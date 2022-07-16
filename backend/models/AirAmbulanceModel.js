const mongoose = require("mongoose")
const AirAmbulance = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,

    },
    CardDetail: {
        type: String,
        required: [true, "Please Enter Card Type Package/Service/Gallery"],
        trim: true,
    },
    CardType: {
        type: String,
        required: [true, "Please Enter Card Type Package/Service/Gallery"],
        trim: true,
    },
    CardDescriptions: {
        type: String,
        required: [true, "Please Enter Card Descritpion"],
        trim: true,
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
module.exports = mongoose.model("AirAmbulance", AirAmbulance)