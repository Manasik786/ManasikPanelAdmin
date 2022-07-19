const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetBookingFormItems, CreateBookingFormList, UpdateBookingFormItems, DeleteBookingFormItems } = require("../controller/BookingFormController")
router.route("/BookingForm").get(GetBookingFormItems)
router.route("/createBookingForm").post(CreateBookingFormList)
router.route("/BookingForm/:id").put(UpdateBookingFormItems)
router.route("/BookingForm/:id").delete(DeleteBookingFormItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;