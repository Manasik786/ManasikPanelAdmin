const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetCareerInquiryItems, DeleteCareerInquiryItems, UpdateCareerInquiryItems, CreateCareerInquiryList } = require("../controller/CareerInquiryController")
router.route("/CareerInquiry").get(GetCareerInquiryItems)
router.route("/createCareerInquiry").post(CreateCareerInquiryList)
router.route("/CareerInquiry/:id").put(UpdateCareerInquiryItems)
router.route("/CareerInquiry/:id").delete(DeleteCareerInquiryItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;