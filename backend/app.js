const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
// const path = require("path");
const sliderroutes = require("./routes/SliderRoutes");
const Applicantsroutes = require("./routes/ApplicantsRoutes");
const CardDetailsRoutes = require("./routes/CardDetailsRoutes");
const CareerInquiryRoutes = require("./routes/CareerInquiryRoutes");
const CareerViewRoutes = require("./routes/CareerViewRoutes");
const CategoryRoutes = require("./routes/CategoryRoutes");
const ContactLeadRoutes = require("./routes/ContactLeadRoutes");
const ContactRoutes = require("./routes/ContactRoutes");
const PackageViewRoutes = require("./routes/PackageViewRoutes");
const Service_N_PackageRoutes = require("./routes/Service_N_PackageRoutes");
const SocialLink_N_LogoRoutes = require("./routes/SocialLink_N_LogoRoutes");
const AirAmbulanceRoutes = require("./routes/AirAmbulanceRoutes");
const GalleryRoutes = require("./routes/GalleryRoutes");
const BookingRoutes = require("./routes/BookingFormroutes")
const path = require("path");
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use("/api/v1", sliderroutes);
app.use("/api/v1", Applicantsroutes);
app.use("/api/v1", CardDetailsRoutes);
app.use("/api/v1", CareerInquiryRoutes);
app.use("/api/v1", CareerViewRoutes);
app.use("/api/v1", CategoryRoutes);
app.use("/api/v1", ContactLeadRoutes);
app.use("/api/v1", PackageViewRoutes);
app.use("/api/v1", ContactRoutes);
app.use("/api/v1", Service_N_PackageRoutes);
app.use("/api/v1", SocialLink_N_LogoRoutes);
app.use("/api/v1", AirAmbulanceRoutes);
app.use("/api/v1", GalleryRoutes);
app.use("api/v1", BookingRoutes)
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});



app.use(errorMiddleware);
//middleware for messages and shifts of env
module.exports = app;
