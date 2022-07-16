const express = require("express")
const router = express.Router()
const { SendComplaintLead, GetCategory, CreateCategory, UpdateCategory, DeleteCategory } = require("../controller/CategoryController")
router.route("/Category").get(GetCategory)
router.route("/createCategory").post(CreateCategory)
router.route("/Category/:id").put(UpdateCategory)
router.route("/Category/:id").delete(DeleteCategory)
router.route("/email").post(SendComplaintLead)
module.exports = router;