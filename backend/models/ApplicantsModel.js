const mongoose = require("mongoose")
const validator = require("validator")
const Applicants = new mongoose.Schema({

  images: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  Position: {
    type: String,
    required: [true, "Please enter position"],
    trim: true
  },
  Name: {
    type: String,
    required: [true, "Please enter position"],
    trim: true
  },
  Phone: {
    type: Number,
    required: [true, "Please Enter Product Price"],
    maxLength: [13, "Price cannot exceed 8 characters"]
  },

  Email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a Valid Email"],
  },
  Gender: {
    type: String,
    required: [true, "Please enter gender"],
    trim: true

  },
  Nationality: {
    type: String,
    required: [true, "Please enter Nationality"],
    trim: true
  },
  Cv: [
    {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    }
  ],
  Applied: {
    type: Boolean,
    default: 1,

  }

})
module.exports = mongoose.model("Applicants", Applicants)
