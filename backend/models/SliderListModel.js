const mongoose = require("mongoose")
const SliderSchema = new mongoose.Schema({
    // id:{
    //     type:mongoose.Schema.ObjectId,
    //     required: true
    // },
    titleEnglish: {
        type: String,
        required: [true, "Please Enter Slider Name"],
        trim: true
    },
    titleArabic: {
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