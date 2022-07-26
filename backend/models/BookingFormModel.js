const mongoose = require("mongoose")
const validator = require("validator")
const BookingFormSchema = new mongoose.Schema({
    stayperiod: {
        type: String,

        trim: true
    },
    Servicetype: {
        type: String,

        trim: true
    },
    Name: {
        type: String,

        trim: true
    },
    familyname: {
        type: String,

        trim: true
    },
    DOB: {
        type: String,

    },
    Email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a Valid Email"],
    },
    country: {
        type: String,
        required: [true, "Please enter country"],
        trim: true

    },
    Phone: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [15, "Price cannot exceed 8 characters"]
    },
    passportno: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [20, "Price cannot exceed 8 characters"]
    },
    nationalid: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [20, "Price cannot exceed 8 characters"]
    },
    Visitedbefore: {
        type: Boolean,
        default: 1,


    },
    relativecontact: {
        type: String,
        trim: true
    },
    upload: [
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
    Reasontovisitksa: {
        type: String,
        trim: true

    },
    Religion: {
        type: String,
        trim: true
    },
    CardType: {
        type: String,
        trim: true
    }

})
module.exports = mongoose.model("BookingFormSchema", BookingFormSchema)


