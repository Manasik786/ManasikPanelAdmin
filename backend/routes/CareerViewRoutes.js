const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetcareerViewItems, CreatecareerViewList, UpdatecareerViewItems, DeletecareerViewItems } = require("../controller/CareerViewController")
router.route("/careerView").get(GetcareerViewItems)
router.route("/createcareerView").post(CreatecareerViewList)
router.route("/careerView/:id").put(UpdatecareerViewItems)
router.route("/careerView/:id").delete(DeletecareerViewItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;