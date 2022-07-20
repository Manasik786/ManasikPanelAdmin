const mongoose = require("mongoose")
const validator = require("validator")
const AircraftServiceModel = new mongoose.Schema({
    Name: {
        type: String,

        trim: true
    },
    familyname: {
        type: String,
        trim: true
    },
    DestinationTo: {
        type: String,
        trim: true

    },
    Email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a Valid Email"],
    },
    DestinationFrom: {
        type: String,
        required: [true, "Please enter country"],
        trim: true

    },
    Phone: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [15, "Price cannot exceed 8 characters"]
    },
    NumberOfPasseneger: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [20, "Price cannot exceed 8 characters"]
    },
    nationalid: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [20, "Price cannot exceed 8 characters"]
    },
    HotelService: {
        type: Boolean,
        default: 1,


    },
    VisaService: {
        type: Boolean,
        default: 1,


    },
     TransportationService: {
        type: Boolean,
        default: 1,


    },
    CateringService: {
        type: Boolean,
        default: 1,


    },
    Notes: {
        type: String,
        trim: true
    }

})
module.exports = mongoose.model("AircraftServiceModel", AircraftServiceModel)
