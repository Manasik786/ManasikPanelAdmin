const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetContactLeadItems, CreateContactLeadList, UpdateContactLeadItems, DeleteContactLeadItems } = require("../controller/ContactLeadController")
router.route("/ContactLead").get(GetContactLeadItems)
router.route("/createContactLead").post(CreateContactLeadList)
router.route("/ContactLead/:id").put(UpdateContactLeadItems)
router.route("/ContactLead/:id").delete(DeleteContactLeadItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;