const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetApplicantsItems, CreateApplicantsList, UpdateApplicantsItems, DeleteApplicantsItems } = require("../controller/ApplicantsController")
router.route("/applicants").get(GetApplicantsItems)
router.route("/createapplicants").post(CreateApplicantsList)
router.route("/applicants/:id").put(UpdateApplicantsItems)
router.route("/applicants/:id").delete(DeleteApplicantsItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;