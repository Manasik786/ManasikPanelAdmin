const express = require("express");
const router = express.Router();
const { SendComplaintLead, GetService_N_PackageItems, CreateService_N_PackageList, UpdateService_N_PackageItems, DeleteService_N_PackageItems } = require("../controller/Service_N_PackageInquiryController")
router.route("/service_N_PackageItems").get(GetService_N_PackageItems)
router.route("/createService_N_PackageItems").post(CreateService_N_PackageList)
router.route("/Service_N_PackageItems/:id").put(UpdateService_N_PackageItems)
router.route("/Service_N_PackageItems/:id").delete(DeleteService_N_PackageItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;