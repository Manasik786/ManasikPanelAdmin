const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetCardItems, CreateCardList, UpdateCardItems, DeleteCardItems } = require("../controller/CardDetailsController")
router.route("/CardItems").get(GetCardItems)
router.route("/CreateCardList").post(CreateCardList)
router.route("/CardItems/:id").put(UpdateCardItems)
router.route("/CardItems/:id").delete(DeleteCardItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;