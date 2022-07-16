const mongoose = require("mongoose")
const ContactModelSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,

    },
    email: [{
        type: String,
        required: [true, "please enter email"]
    }],
    phone: [{
        type: Number,
        required: [true, "please enter email"]
    }],
    location: {
        type: String,
        required: [true, "please enter email"]

    },
    flag: {
        type: Boolean,
        default: 1,

    },
})
module.exports = mongoose.model("ContactModel", ContactModelSchema)