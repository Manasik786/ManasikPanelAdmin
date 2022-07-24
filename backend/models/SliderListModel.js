const mongoose = require("mongoose")
const SliderSchema = new mongoose.Schema({
    // id:{
    //     type:mongoose.Schema.ObjectId,
    //     required: true
    // },
    title: {
        type: String,
        required: [true, "Please Enter Slider Name"],
        trim: true
    },
    titlear: {
        type: String,
        required: [true, "Please Enter Slider Name"],
        trim: true
    },
    Description: {
        type: String,
        required: [true, "Please Enter Slider Name"],
        trim: true
    },
    Descriptionar: {
        type: String,
        required: [true, "Please Enter Slider Name"],
        trim: true
    },
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
    flag: {
        type: Boolean,
        default: 1,
    
    },
})
module.exports = mongoose.model("SliderSchema", SliderSchema)