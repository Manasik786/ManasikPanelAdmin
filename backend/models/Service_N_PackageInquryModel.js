const mongoose = require("mongoose")
const validator = require("validator")
const Service_N_PackagesModel = new mongoose.Schema({
    Inquiryid: {
        type: mongoose.Schema.ObjectId,

    },
    InquiryType: {
        type: String,
        required: [true, "please confirm it wether is service Inquiry or package inquiry"],
        trim: true
    },
    Email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        trim: true,
        validate: [validator.isEmail, "Please Enter a Valid Email"],
    },
    Name: {
        type: String,
        required: [true, "Please write your  name"],
        trim: true,
    },
    Message: {
        type: String,
        required: [true, "please write your message"],
        trim: true,
    },
    DateOfInquiry: {
        type: Date,
        default: Date.now
    },
    flag: {
        type: Boolean,
        default: 1

    },
})
module.exports = mongoose.model("Service_N_Package", Service_N_PackagesModel)