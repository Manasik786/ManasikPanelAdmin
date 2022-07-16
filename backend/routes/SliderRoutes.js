const express = require("express");
const { CreateSliderList, GetSliderItems, UpdateSliderItems, DeleteSliderItems } = require("../controller/SliderController")
const router = express.Router()
router.route("/slider").get(GetSliderItems)
router.route("/createslider").post(CreateSliderList)
router.route("/slider/:id").put(UpdateSliderItems)
router.route("/slider/:id").delete(DeleteSliderItems)
module.exports = router;