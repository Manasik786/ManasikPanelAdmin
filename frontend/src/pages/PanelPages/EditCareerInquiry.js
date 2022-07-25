import React, { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function CareerInquiryEdit() {
  const Stylings = {
    color: "white",
    textDecoration: "none",
  };
  let isAnonymous = true;
  let history = useHistory();
  const ref = useRef(null);
  const [Designation, setDesignation] = useState("");
  const [Designationar, setDesignationar] = useState("");
  const [Deptar, setDeptar] = useState("");
  const [Dept, setDept] = useState("");
  const [Locationar, setLocationar] = useState("");
  const [Location, setLocation] = useState("");
  const [Type, setType] = useState("");
  const [Typear, setTypear] = useState("");
  const [Valid, setValid] = useState("");

  const [data, setData] = useState({
    Designation: Designation,
    Designationar: Designationar,
    Dept: Dept,
    Deptar: Deptar,
    Valid: Valid,
    Location: Location,
    Locationar: Locationar,
    Type: Type,
    Typear: Typear,
  });
  const [preditdata, setpreditData] = useState({
    Designation: Designation,
    Designationar: Designationar,
    Dept: Dept,
    Deptar: Deptar,
    Valid: Valid,
    Location: Location,
    Locationar: Locationar,
    Type: Type,
    Typear: Typear,
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
    setDesignation(Designation);
    setDesignationar(Designationar);
    setTypear(Typear);
    setType(Type);
    setLocationar(Locationar);
    setLocation(Location);
    setDept(Dept);
    setDeptar(Deptar);
    setValid(Valid);
    const myForm = new FormData();
    myForm.append("Designation", data.Designation);
    myForm.append("Designationar", data.Designationar);
    myForm.append("Typear", uppercaseWords(data.Typear));
    myForm.append("Type", uppercaseWords(data.Type));
    myForm.append("Valid", data.Valid);
    myForm.append("Locationar", uppercaseWords(data.Locationar));
    myForm.append("Location", uppercaseWords(data.Location));
    myForm.append("Dept", uppercaseWords(data.Dept));
    myForm.append("Deptar", uppercaseWords(data.Deptar));
    console.log(data, "dsad");
    try {
      // const config = {
      //     headers: { "Content-Type": "application/json" },
      // };
      const response = await axios.put(`/api/v1/CareerInquiry/${preditdata._id}`, myForm);
      console.log(response);
      history.replace("/CarrerInquiry");
    } catch (err) {
      console.log(err.data);
    }
  };
  const placeholderdata = async () => {
    await setpreditData(JSON.parse(localStorage.getItem("CareerInquiry")));
    console.log(preditdata, "Abc");
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
        Career Inquiry Service
      </Typography>

      <div className="contentbox">
        <h5> Designation</h5>
        <input
          type="text"
          name="Designation"
          value={data.Designation}
          placeholder={preditdata.Designation}
          onChange={handleChange}
        />
        <h5> Designation Arabic</h5>
        <input
          type="text"
          name="Designationar"
          value={data.Designationar}
          placeholder={preditdata.Designationar}
          onChange={handleChange}
        />
        <h5> Dept</h5>
        <input
          type="text"
          name="Dept"
          value={data.Dept}
          placeholder={preditdata.Dept}
          onChange={handleChange}
        />
        <h5> Dept Arabic</h5>
        <input
          type="text"
          name="Deptar"
          value={data.Deptar}
          placeholder={preditdata.Deptar}
          onChange={handleChange}
        />
        <h5> Valid</h5>
        <input
          type="text"
          name="Valid"
          value={data.Valid}
          placeholder={preditdata.Valid}
          onChange={handleChange}
        />
        <h5> Location</h5>
        <input
          type="text"
          name="Location"
          value={data.Location}
          placeholder={preditdata.Location}
          onChange={handleChange}
        />
        <h5> Location Arabic</h5>
        <input
          type="text"
          name="Locationar"
          value={data.Locationar}
          placeholder={preditdata.Locationar}
          onChange={handleChange}
        />
        <h5> Type</h5>
        <input
          type="text"
          name="Type"
          value={data.Type}
          placeholder={preditdata.Type}
          onChange={handleChange}
        />
        <h5> Type Arabic</h5>
        <input
          type="text"
          name="Typear"
          value={data.Typear}
          placeholder={preditdata.Typear}
          onChange={handleChange}
        />
      </div>
      {/* 2001-02-28T19:00:00.000Z */}
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
