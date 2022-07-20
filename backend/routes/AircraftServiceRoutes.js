const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetAirCraftServiceItems, DeleteAirCraftServiceItems, UpdateAirCraftServiceItems, CreateAirCraftServiceList } = require("../controller/AirCraftServiceController")
router.route("/AirCraftService").get(GetAirCraftServiceItems)
router.route("/createAirCraftService").post(CreateAirCraftServiceList)
router.route("/AirCraftService/:id").put(UpdateAirCraftServiceItems)
router.route("/AirCraftService/:id").delete(DeleteAirCraftServiceItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;