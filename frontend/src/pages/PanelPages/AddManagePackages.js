import React, { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function PackagesAddition() {
  const Stylings = {
    color: "white",
    textDecoration: "none",
  };
  let isAnonymous = true;
  let history = useHistory();
  const ref = useRef(null);

  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [Name, SetName] = useState("");
  const [Namear, SetNamear] = useState("");
  const [EmailAddress, SetEmailAddress] = useState("");
  const [PkgName, SetPkgName] = useState("");
  const [PkgNamear, SetPkgNamear] = useState("");
  const [ValidTill, SetValidTill] = useState("");
  const [DaysOfstay, SetDaysOfstay] = useState("");
  const [ValidTillar, SetValidTillar] = useState("");
  const [PkgDetail, SetPkgDetail] = useState("");
  const [PkgDetailar, SetPkgDetailar] = useState("");
  const [images, setImages] = useState([]);
  const [data, setData] = useState({
    Name: Name,
    EmailAddress: EmailAddress,
    PkgName: PkgName,
    DaysOfstay: DaysOfstay,
    PkgDetail: PkgDetail,
    ValidTill: ValidTill,
    Namear: Namear,
    PkgNamear: PkgNamear,
    PkgDetailar: PkgDetailar,
    ValidTillar: ValidTillar,
    images: " ",
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log(data);
  };
  const uppercaseWords = (str) =>
    str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
  const createProductSubmitHandler = async (e) => {
    e.preventDefault();
    SetName(Name);
    SetNamear(Namear);
    SetEmailAddress(EmailAddress);
    SetPkgName(PkgName);
    SetPkgNamear(PkgNamear);
    SetDaysOfstay(DaysOfstay);
    SetPkgDetail(PkgDetail);
    SetPkgDetailar(PkgDetailar);
    SetValidTill(ValidTill);
    SetValidTillar(ValidTillar);
    const myForm = new FormData();
    myForm.append("Name", data.Name);
    myForm.append("EmailAddress", data.EmailAddress);
    myForm.append("Namear", data.Namear);
    myForm.append("PkgNamear", data.PkgNamear);
    myForm.append("PkgName", data.PkgName);
    myForm.append("PkgDetail", data.PkgDetail);
    myForm.append("PkgDetailar", data.PkgDetailar);
    myForm.append("ValidTill", data.ValidTill);
    myForm.append("ValidTillar", data.ValidTillar);
    myForm.append("DaysOfstay", data.DaysOfstay);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    console.log(data);
    try {
      const response = await axios.post(`/api/v1/createPackageView`, myForm);
      console.log(response);
      history.replace("/managepackage");
    } catch (err) {
      console.log(err.data);
    }
    console.log(myForm);
  };
  const createServiceImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      console.log(file);
      reader.readAsDataURL(file);
     
    });
  };
  return (
    <div className="productList">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: "#ffba02" }}
      >
        Packages Panel
      </Typography>

      <div className="contentbox">
        <div className="textboxflex">
          <span className="spanclass">
            <h5>Name</h5>
            <input
              type="text"
              name="Name"
              value={data.Name}
              placeholder=" Name "
              onChange={handleChange}
            />
          </span>
          <span className="spanclass">
            <h5>Name Arabic</h5>

            <input
              type="text"
              name="Namear"
              value={data.Namear}
              placeholder=" Name Arabic"
              onChange={handleChange}
            />
          </span>
        </div>

        <div className="textboxflex">
          <span className="spanclass">
            <h5>Package Name</h5>
            <input
              type="text"
              name="PkgName"
              value={data.PkgName}
              placeholder=" Package Name "
              onChange={handleChange}
            />
          </span>
          <span className="spanclass">
            <h5>Package Name Arabic</h5>

            <input
              type="text"
              name="PkgNamear"
              value={data.PkgNamear}
              placeholder=" Package Name Arabic"
              onChange={handleChange}
            />
          </span>
        </div>

        <div className="textboxflex">
          <span className="spanclass largetext">
            <h5>Package Details</h5>

            <input
              type="text"
              name="PkgDetail"
              className="largetext"
              value={data.PkgDetail}
              placeholder="Package Detail "
              onChange={handleChange}
            />
          </span>
          <span className="spanclass largetext">
            <h5>Package Detail Arabic</h5>

            <input
              type="text"
              name="PkgDetailar"
              value={data.PkgDetailar}
              className="largetext"
              placeholder=" package Detail Arabic"
              onChange={handleChange}
            />
          </span>
        </div>
        <div className="textboxflex">
          <span className="spanclass">
            <h5>EmailAddress</h5>

            <input
              type="text"
              name="EmailAddress"
              value={data.EmailAddress}
              placeholder=" Email Address "
              onChange={handleChange}
            />
          </span>

          <span className="spanclass">
            <h5>Days Of Stay</h5>

            <input
              type="text"
              name="DaysOfstay"
              value={data.DaysOfstay}
              placeholder="Days of Stays "
              onChange={handleChange}
            />
          </span>
        </div>

        <div className="textboxflex">
          <span className="spanclass">
            <h5>Valid Till</h5>

            <input
              type="text"
              name="ValidTill"
              value={data.ValidTill}
              placeholder=" Valid Till "
              onChange={handleChange}
            />
          </span>
          <span className="spanclass">
            <h5>Valid Till Arabic</h5>

            <input
              type="text"
              name="ValidTillar"
              value={data.ValidTillar}
              placeholder=" Valid Till Arabic"
              onChange={handleChange}
            />
          </span>
         </div>
         <h5>Package image</h5>
          {/* <input type='text' placeholder="image" name="images" value={images} onChange={(e) => setImages(e.target.value)} /> */}
          <input
            type="file"
            name="images"
            accept="image/*"
            onChange={createServiceImagesChange}
            multiple
          />
        
      </div>

      <div className="sliderbutton">
        <Grid item xs={6} sm={6}>
          <Button
            ref={ref}
            style={{
              backgroundColor: "#ffba02",
              color: "black",
              height: "55px",
              borderRadius: "5px",
            }}
            onClick={createProductSubmitHandler}
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      </div>
    </div>
  );
}
