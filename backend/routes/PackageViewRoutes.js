const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetPackageViewSchemaItems, CreatePackageViewSchemaList, UpdatePackageViewSchemaItems, DeletePackageViewSchemaItems } = require("../controller/PackageViewController")
router.route("/PackageView").get(GetPackageViewSchemaItems)
router.route("/createPackageView").post(CreatePackageViewSchemaList)
router.route("/PackageView/:id").put(UpdatePackageViewSchemaItems)
router.route("/PackageView/:id").delete(DeletePackageViewSchemaItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;