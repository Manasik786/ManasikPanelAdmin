const mongoose = require("mongoose")
const SocialLink_N_LogoSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,


    },
    Link: [{
        linkName: {
            type: String,
            trim: true
        },
        Url: {
            type: String,
            trim: true

        }
    }
    ],

    logo: [
        {
            public_id: {
                type: String,

            },
            url: {
                type: String,

            }
        }
    ],
    flag: {
        type: Boolean,
        default: 1,

    },
})
module.exports = mongoose.model("SocialLink_n_logo", SocialLink_N_LogoSchema)