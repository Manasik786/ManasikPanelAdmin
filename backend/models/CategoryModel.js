const mongoose = require("mongoose")
const CategoriesModel = new mongoose.Schema({
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
    title: {
        type: String,
        required: [true, "Please Enter title"],
        trim: true
    },
    Category: { 
        type: String,
        required: [true, "Please Enter "],

    },
    flag: {
        type: Boolean,
        default: 1,

    },
})
module.exports = mongoose.model("CategoriesModel", CategoriesModel)