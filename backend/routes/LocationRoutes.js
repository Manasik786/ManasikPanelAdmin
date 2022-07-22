const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetLocationItems, CreateLocationList, UpdateLocationItems, DeleteLocationItems } = require("../controller/LocationController")
router.route("/Location").get(GetLocationItems)
router.route("/CreateLocation").post(CreateLocationList)
router.route("/Location/:id").put(UpdateLocationItems)
router.route("/Location/:id").delete(DeleteLocationItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;