const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetGalleryItems, CreateGalleryList, UpdateGalleryItems, DeleteGalleryItems } = require("../controller/GalleryController")
router.route("/GalleryItems").get(GetGalleryItems)
router.route("/CreateGalleryList").post(CreateGalleryList)
router.route("/GalleryItems/:id").put(UpdateGalleryItems)
router.route("/GalleryItems/:id").delete(DeleteGalleryItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;