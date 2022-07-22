const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetAirAmbulanceItems, CreateAirAmbulanceList, UpdateAirAmbulanceItems, DeleteAirAmbulanceItems } = require("../controller/AirAmbulanceController")
router.route("/AirAmbulance").get(GetAirAmbulanceItems)
router.route("/CreateAirAmbulanceList").post(CreateAirAmbulanceList)
router.route("/AirAmbulance/:id").put(UpdateAirAmbulanceItems)
router.route("/AirAmbulance/:id").delete(DeleteAirAmbulanceItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;