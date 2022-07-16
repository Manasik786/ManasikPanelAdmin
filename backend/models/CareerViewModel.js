const mongoose = require("mongoose")
const careerViewSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,

    },
    FullName: {
        type: String,
        required: [true, "please enter your full name"],
        trim: true
    },
    Gender: {
        type: String,
        required: [true, "please enter your gender"],
        trim: true
    },
    Email: {
        type: String,
        required: [true, "please enter email"]
    },
    Phone: {
        type: Number,
        required: true,
        maxlength: [16, "please write valid phon number"]
    },
    ProfilePhoto: [
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
    Nationality: {
        type: String,
        trim: true,
        required: [true, "please enter nationality"]

    },
    flag: {
        type: Boolean,
        default: 1,

    },


})
module.exports = mongoose.model("careerView", careerViewSchema)