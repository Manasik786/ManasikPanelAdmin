const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const BookingFormSchema = require("../models/BookingFormModel")
const sendEmail = require("../utils/sendEmail")
exports.CreateBookingFormList = catchAsyncErrors(async (req, res, next) => {
  let upload = [];


  if (typeof req.body.upload === "string") {
    upload.push(req.body.upload);
  } else {
    upload = req.body.upload;
  }
  console.log(req.body.upload, "ab")

  const imagesLinks = [];
  for (let i = 0; i < upload.length; i++) {
    const result = await cloudinary.v2.uploader.upload(upload[i], {
      folder: "AviationsFolder",
    });
    console.log(result);
    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.upload = imagesLinks

  console.log(req.body)
  const data = await BookingFormSchema.create(req.body);

  res.status(201).json({
    success: true,
    data,
  })
})
exports.SendLength = catchAsyncErrors(async (req, res, next) => {
  const data = await BookingFormSchema.countDocuments()
  // const abcd = await BookingFormSchema.find({ Date: {} })
  res.status(200).json({
    success: true,
    data,
    // abcd
  })
})
exports.GetBookingFormItems = catchAsyncErrors(async (req, res, next) => {
  const data = await BookingFormSchema.find();

  res.status(200).json({
    success: true,
    data,
  })
})

exports.DeleteBookingFormItems = catchAsyncErrors(async (req, res, next) => {
  const data = await BookingFormSchema.findById(req.params.id)
  if (!data) {
    return next(new ErrorHandler("data  not found ", 404))
  }

  await data.remove();
  res.status(200).json({
    success: true,
    message: "Data deleted successfully "
  })
})
exports.UpdateBookingFormItems = catchAsyncErrors(async (req, res, next) => {
  let data = await BookingFormSchema.findById(req.params.id)



  if (!data) {
    return next(new ErrorHander("Data not found", 404));
  }
  let upload = []
  if (typeof req.body.upload === "string") {
    upload.push(req.body.upload);
  }
  else {
    upload = req.body.upload;
  }
  if (upload !== undefined) {
    for (let i = 0; i < data.upload.length; i++) {
      await cloudinary.v2.uploader.destroy(data.upload[i].public_id);
    }


  }
  data = await BookingFormSchema.findByIdAndUpdate(req.params.id, req.body, {
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
