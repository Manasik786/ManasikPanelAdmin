const mongoose = require("mongoose");
const CareerInquirySchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.ObjectId,
  },
  flag: {
    type: Boolean,
    default: 1,
  },
  Designation: {
    type: String,
    required: [true, "Please Enter Designation"],
  },
  Dept: {
    type: String,
    required: [true, "Please Enter Department"],
  },
  Valid: {
    type: Date,
    default: Date.now,
  },
  Location: {
    type: String,
    required: [true, "Please Enter Location"],
  },
  flag: {
    type: Boolean,
    default: 1,
  },
  Description: {
    type: String,
    required: true,
    trim: true
  },
  Descriptionar: {
    type: String,
    required: true,
    trim: true

  },
  Type: {
    type: String,
    required: [true, "Please Enter Type"],
  },
  Designationar: {
    type: String,
    required: [true, "Please Enter Designation"],
  },
  Deptar: {
    type: String,
    required: [true, "Please Enter Department"],
  },
  Locationar: {
    type: String,
    required: [true, "Please Enter Location"],
  },
  Typear: {
    type: String,
    required: [true, "Please Enter Type"],
  },
});
module.exports = mongoose.model("CareerInquiry", CareerInquirySchema);
