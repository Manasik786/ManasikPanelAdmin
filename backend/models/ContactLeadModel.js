const mongoose = require("mongoose")
const validator = require("validator")
const ContactLeadSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,

    },
    Name: {
        type: String,
        trim: true,
        required: [true, "Please enter your name"]
    },
    Email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        validate: [validator.isEmail, "Please Enter a Valid Email"],
    },
    Message: {
        type: String,
        trim: true,
        required: [true, "Please enter your name"]
    },
    Detail: {
        type: String,
        trim: true,
        // required: [true, "Please enter your name"]
    },
    flag: {
        type: Boolean,
        default: 1,

    },
})
module.exports = mongoose.model("ContactLead", ContactLeadSchema)