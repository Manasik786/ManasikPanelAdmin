const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const Applicants = require("../models/ApplicantsModel")
const sendEmail = require("../utils/sendEmail")
exports.CreateApplicantsList = catchAsyncErrors(async (req, res, next) => {
  let images = [];
  

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }
  console.log(req.body.images, "ab")

  const imagesLinks = [];
  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "AviationsFolder",
    });
    console.log(result);
    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks
  let Cv = " ";


 
   

    Cv = req.body.Cv;
  
  console.log(req.body.Cv, "ab")

  const CvLinks = [];
  
    const cvs = await cloudinary.v2.uploader.upload(Cv, {
      folder: "AviationsFolder",
    });
    console.log(cvs);
    CvLinks.push({
      public_id: cvs.public_id,
      url: cvs.secure_url,
    });
  

  req.body.Cv = CvLinks
  Cv = req.body.Cv
  console.log(req.body)
  const data = await Applicants.create(req.body);

  res.status(201).json({
    success: true,
    data,
  })
})
exports.GetApplicantsItems = catchAsyncErrors(async (req, res, next) => {
  const data = await Applicants.find();

  res.status(200).json({
    success: true,
    data,
  })
})

exports.DeleteApplicantsItems = catchAsyncErrors(async (req, res, next) => {
  const data = await Applicants.findById(req.params.id)
  if (!data) {
    return next(new ErrorHandler("data  not found ", 404))
  }
  // for (let i = 0; i < data.images.length; i++) {
  //   await cloudinary.v2.uploader.destroy(data.images[i].public_id);
  // }
  await data.remove();
  res.status(200).json({
    success: true,
    message: "Data deleted successfully "
  })
})
exports.UpdateApplicantsItems = catchAsyncErrors(async (req, res, next) => {
  let data = await Applicants.findById(req.params.id)


  const { Position, Name, Phone, Email, Gender, Nationality, Cv, Applied } = req.body


  if (!data) {
    return next(new ErrorHander("Data not found", 404));
  }
  let images = []
  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  }
  else {
    images = req.body.images;
  }
  if (images !== undefined) {
    for (let i = 0; i < data.images.length; i++) {
      await cloudinary.v2.uploader.destroy(data.images[i].public_id);
    }

    const CvLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "AviationsFolder",
      });

      CvLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = CvLinks;
  }
  data = await Applicants.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })
  res.status(200).json({
    success: true,
    data,
  });
})
exports.SendComplaintLead = catchAsyncErrors(async (req, res, next) => {
  const { useremail, message } = req.body
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (!useremail) {
    return next(new ErrorHandler("please write email", 404))
  }
  if (!pattern.test(useremail)) {
    return next(new ErrorHandler("Write Valid Email", 404))
  }
  try {
    sendEmail({
      email: useremail,
      subject: "Manasik Aviation",
      message,
    })
    res.status(200).json({
      success: true,
      message: "your complaint is forwarded to the administration"
    })
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }

})
