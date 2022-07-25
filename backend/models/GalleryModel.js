const mongoose = require("mongoose");
const GallerySchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.ObjectId,
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
  CardTypear: {
    type: String,
    required: [true, "Please Enter Card Type Package/Service/Gallery"],
    trim: true,
  },
  CardDescriptionsar: {
    type: String,
    required: [true, "Please Enter Card Descritpion"],
    trim: true,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  flag: {
    type: Boolean,
    default: 1,
  },
});
module.exports = mongoose.model("GallerySchema", GallerySchema);
