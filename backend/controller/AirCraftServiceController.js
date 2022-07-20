const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const AirCraftServiceModel = require("../models/AirCraftServiceModel")
const sendEmail = require("../utils/sendEmail")
exports.CreateAirCraftServiceList = catchAsyncErrors(async (req, res, next) => {
    // let images = [];
    // const { Position, Name, Phone, Email, Gender, Nationality, CV, Applied } = req.body

    // if (typeof req.body.images === "string") {
    //     images.push(req.body.images);
    // } else {
    //     images = req.body.images;
    // }
    // console.log(req.body.images, "ab")

    // const imagesLinks = [];
    // for (let i = 0; i < images.length; i++) {
    //     const result = await cloudinary.v2.uploader.upload(images[i], {
    //         folder: "AviationsFolder",
    //     });
    //     console.log(result);
    //     imagesLinks.push({
    //         public_id: result.public_id,
    //         url: result.secure_url,
    //     });
    // }

    // req.body.images = imagesLinks
    // console.log(req.body)
    const data = await AirCraftServiceModel.create(req.body);

    res.status(201).json({
        success: true,
        data,
    })
})
exports.GetAirCraftServiceItems = catchAsyncErrors(async (req, res, next) => {
    const data = await AirCraftServiceModel.find();
    res.status(200).json({
        success: true,
        data,
    })
})

exports.DeleteAirCraftServiceItems = catchAsyncErrors(async (req, res, next) => {
    const data = await AirCraftServiceModel.findById(req.params.id)
    if (!data) {
        return next(new ErrorHandler("data  not found ", 404))
    }
  // for (let i = 0; i < data.images.length; i++) {
    //     await cloudinary.v2.uploader.destroy(data.images[i].public_id);
    // }

    await data.remove();
    res.status(200).json({
        success: true,
        message: "Data deleted successfully "
    })
})
exports.UpdateAirCraftServiceItems = catchAsyncErrors(async (req, res, next) => {
    let data = await AirCraftServiceModel.findById(req.params.id)
    // const { Position, Name, Phone, Email, Gender, Nationality, CV, Applied } = req.body

    if (!data) {
        return next(new ErrorHander("Data not found", 404));
    }
    // let images = []
    // if (typeof req.body.images === "string") {
    //     images.push(req.body.images);
    // }
    // else {
    //     images = req.body.images;
    // }
    // if (images !== undefined) {
    //     for (let i = 0; i < data.images.length; i++) {
    //         await cloudinary.v2.uploader.destroy(data.images[i].public_id);
    //     }

    //     const imagesLinks = [];

    //     for (let i = 0; i < images.length; i++) {
    //         const result = await cloudinary.v2.uploader.upload(images[i], {
    //             folder: "AviationsFolder",
    //         });

    //         imagesLinks.push({
    //             public_id: result.public_id,
    //             url: result.secure_url,
    //         });
    //     }

    //     req.body.images = imagesLinks;
    // }
    data = await AirCraftServiceModel.findByIdAndUpdate(req.params.id, req.body, {
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