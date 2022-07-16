const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetSocialLink_N_LogoItems, CreateSocialLink_N_LogoList, UpdateSocialLink_N_LogoItems, DeleteSocialLink_N_LogoItems } = require("../controller/SocialLinksController")
router.route("/SocialLink_N_Logo").get(GetSocialLink_N_LogoItems)
router.route("/createSocialLink_N_Logo").post(CreateSocialLink_N_LogoList)
router.route("/SocialLink_N_Logo/:id").put(UpdateSocialLink_N_LogoItems)
router.route("/SocialLink_N_Logo/:id").delete(DeleteSocialLink_N_LogoItems)
router.route("/email").post(SendComplaintLead)
module.exports = router;
