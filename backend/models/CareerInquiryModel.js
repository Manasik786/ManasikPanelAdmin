const mongoose = require("mongoose")
const CareerInquirySchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,
    },
    Designation: {
        type: String,
        required: [true, "Please Enter Designation"]
    },
    Dept: {
        type: String,
        required: [true, "Please Enter Department"]
    },
    Valid: {
        type: Date,
        default: Date.now,
    },
    Location: {
        type: String,
        required: [true, "Please Enter Location"]
    },
    flag: {
        type: Boolean,
        default: 1,

    },
})
module.exports = mongoose.model("CareerInquiry", CareerInquirySchema)