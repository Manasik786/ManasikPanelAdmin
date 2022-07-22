const mongoose = require("mongoose")
const LocationSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,
    },
    Latitude: {
        type: String,
        required: [true, "Please Enter Latitude"]
    },
    Longitude: {
        type: String,
        required: [true, "Please Enter Longitude"]
    },

})
module.exports = mongoose.model("Location", LocationSchema)