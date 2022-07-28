import React, { useEffect, useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
export default function EditPackages() {
  const Stylings = {
    color: "white",
    textDecoration: "none",
  };
  let isAnonymous = true;
  let history = useHistory();
  const ref = useRef(null);
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
  const [preditdata, setpreditData] = useState({
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
    console.log(data, "dsad");
    try {
      const response = await axios.put(`/api/v1/PackageView/${preditdata._id}`, myForm);
      console.log(response);
      history.replace("/managepackage");
    } catch (err) {
      console.log(err.data);
    }
  };

  const placeholderdata = async () => {
    await setpreditData(JSON.parse(localStorage.getItem("Package")));
    console.log(preditdata, "Abc");
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
      setdisplay("inline-block")
    });
  };

  useEffect(() => {
    placeholderdata();
  }, []);

  return (
    <div className="productList">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: "#ffba02" }}
      >
        Package Edit
      </Typography>

      <div className="contentbox">
        <h5>Name</h5>
        <input
          type="text"
          name="Name"
          value={data.Name}
          placeholder={preditdata.Name}
          onChange={handleChange}
        />
        <h5>Name Arabic</h5>

        <input
          type="text"
          name="Namear"
          value={data.Namear}
          placeholder={preditdata.Namear}
          onChange={handleChange}
        />
        <h5>EmailAddress</h5>

        <input
          type="text"
          name="EmailAddress"
          value={data.EmailAddress}
          placeholder={preditdata.EmailAddress}
          onChange={handleChange}
        />

        <h5>Package Name</h5>

        <input
          type="text"
          name="PkgName"
          value={data.PkgName}
          placeholder={preditdata.PkgName}
          onChange={handleChange}
        />
        <h5>Package Name Arabic</h5>

        <input
          type="text"
          name="PkgNamear"
          value={data.PkgNamear}
          placeholder={preditdata.PkgNamear}
          onChange={handleChange}
        />
        <h5>Days Of Stay</h5>

        <input
          type="text"
          name="DaysOfstay"
          value={data.DaysOfstay}
          placeholder={preditdata.DaysOfstay}
          onChange={handleChange}
        />
        <h5>Package Details</h5>

        <input
          type="text"
          name="PkgDetail"
          value={data.PkgDetail}
          placeholder={preditdata.PkgDetail}
          onChange={handleChange}
        />
        <h5>Package Detail Arabic</h5>

        <input
          type="text"
          name="PkgDetailar"
          value={data.PkgDetailar}
          placeholder={preditdata.PkgDetailar}
          onChange={handleChange}
        />
        <h5>Valid Till</h5>

        <input
          type="text"
          name="ValidTill"
          value={data.ValidTill}
          placeholder={preditdata.ValidTill}
          onChange={handleChange}
        />
        <h5>Valid Till Arabic</h5>

        <input
          type="text"
          name="ValidTillar"
          value={data.ValidTillar}
          placeholder={preditdata.ValidTillar}
          onChange={handleChange}
        />
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
