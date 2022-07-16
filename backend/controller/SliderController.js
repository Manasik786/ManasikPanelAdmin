const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const SliderSchema = require("../models/SliderListModel")
exports.CreateSliderList = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }
  console.log(req.body.images, "ab")

  const imagesLinks = [];
  for (let i = 0; i < images.length ; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "AviationsFolder",
    });
    console.log(result);
    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }
  const { titleEnglish, titleArabic } = req.body
  if (!titleEnglish && !titleArabic) {
    next(new ErrorHandler("Writing Title is must", 404))
  }
  req.body.images = imagesLinks
  console.log(req.body)
  const slider = await SliderSchema.create(req.body);
  res.status(201).json({
    success: true,
    slider,
  })
})
exports.GetSliderItems = catchAsyncErrors(async (req, res, next) => {
  const items = await SliderSchema.find()
  res.status(200).json({
    success: true,
    items,
  })
})

exports.DeleteSliderItems = catchAsyncErrors(async (req, res, next) => {
  const SliderItem = await SliderSchema.findById(req.params.id)
  if (!SliderItem) {
    return next(new ErrorHandler("data  not found ", 404))
  }
  for (let i = 0; i < SliderItem.images.length; i++) {
    await cloudinary.v2.uploader.destroy(SliderItem.images[i].public_id);
  }
  await SliderItem.remove();
  res.status(200).json({
    success: true,
    message: "Data deleted successfully "
  })
})
exports.UpdateSliderItems = catchAsyncErrors(async (req, res, next) => {
  let SliderItem = await SliderSchema.findById(req.params.id)
  if (!SliderItem) {
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
    for (let i = 0; i < SliderItem.images.length; i++) {
      await cloudinary.v2.uploader.destroy(SliderItem.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "AviationsFolder",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }
  SliderItem = await SliderSchema.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })
  res.status(200).json({
    success: true,
    SliderItem,
  });
})
