const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetContactItems, CreateContactList, UpdateContactItems, DeleteContactItems } = require("../controller/ContactController")
router.route("/Contact").get(GetContactItems)
router.route("/createContact").post(CreateContactList)
router.route("/Contact/:id").put(UpdateContactItems)
router.route("/Contact/:id").delete(DeleteContactItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;