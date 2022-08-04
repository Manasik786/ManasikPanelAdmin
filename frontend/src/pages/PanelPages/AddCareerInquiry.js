import React, { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";

import axios from "axios";
import { useHistory } from "react-router-dom";
export default function CareerInquiryAddition() {
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
  const [Description, setDescription] = useState("");
  const [Descriptionar, setDescriptionar] = useState("");

  const [data, setData] = useState({
    Designation: Designation,
    Description: Description,
    Descriptionar: Descriptionar,
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
    setDescription(Description);
    setDescriptionar(Descriptionar);
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
    myForm.append("Description", data.Description);
    myForm.append("Descriptionar", data.Descriptionar);
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
      const response = await axios.post(`/api/v1/createCareerInquiry`, myForm);
      console.log(response);
      Swal.fire("Saved", '', 'success');
      history.replace("/CarrerInquiry");
    } catch (err) {
      console.log(err.data);
       Swal.fire("Error!", '', 'error');
    }
  };

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
        <div className="textboxflex">
          <span className="spanclass">
            <h5> Designation</h5>
            <input
              type="text"
              name="Designation"
              value={data.Designation}
              placeholder="Describe Designation"
              onChange={handleChange}
            />
          </span>
          <span className="spanclass">
            <h5> Designation Arabic</h5>
            <input
              type="text"
              name="Designationar"
              value={data.Designationar}
              placeholder="Describe Designation Arabic"
              onChange={handleChange}
            />
          </span>
        </div>
        <div className="textboxflex">
          <span className="spanclass">
            <h5> Description</h5>
            <input
              type="text"
              name="Description"
              value={data.Description}
              placeholder="Describe Description"
              onChange={handleChange}
            />
          </span>
          <span className="spanclass">
            <h5> Description Arabic</h5>
            <input
              type="text"
              name="Descriptionar"
              value={data.Descriptionar}
              placeholder="Describe Description Arabic"
              onChange={handleChange}
            />
          </span>
        </div>


        <div className="textboxflex">
          <span className="spanclass">
            <h5> Dept</h5>
            <input
              type="text"
              name="Dept"
              value={data.Dept}
              placeholder="Describe Dept"
              onChange={handleChange}
            />
          </span>
          <span className="spanclass">
            <h5> Dept Arabic</h5>
            <input
              type="text"
              name="Deptar"
              value={data.Deptar}
              placeholder="Describe Dept Arabic"
              onChange={handleChange}
            />
          </span>
        </div>

        <div className="textboxflex">
          <span className="spanclass">
            <h5> Location</h5>
            <input
              type="text"
              name="Location"
              value={data.Location}
              placeholder="Describe Location"
              onChange={handleChange}
            />
          </span>
          <span className="spanclass">
            <h5> Location Arabic</h5>
            <input
              type="text"
              name="Locationar"
              value={data.Locationar}
              placeholder="Describe Location Arabic"
              onChange={handleChange}
            />
          </span>
        </div>

        <div className="textboxflex">
          <span className="spanclass">
            <h5> Type</h5>
            <input
              type="text"
              name="Type"
              value={data.Type}
              placeholder="Describe  Type"
              onChange={handleChange}
            />
          </span>
          <span className="spanclass">
            <h5> Type Arabic</h5>
            <input
              type="text"
              name="Typear"
              value={data.Typear}
              placeholder="Describe  Type Arabic"
              onChange={handleChange}
            />
          </span>
        </div>
        <h5> Valid</h5>
        <input
          type="text"
          name="Valid"
          value={data.Valid}
          placeholder="Describe Valid"
          onChange={handleChange}
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
