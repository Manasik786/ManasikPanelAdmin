
import React, { useEffect, useState } from 'react'
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ReactQuill from 'react-quill';
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './mission.css'

export default function UserList() {

  const [sliderTitle, setsliderTitle] = useState({
    titleEnglish: "",
    titleArabic: "",
    images: []
  })
  //   const [images, setImages] = useState([]);

  useEffect(() => {
   
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setsliderTitle({ ...sliderTitle, [name]: value });
  };
  const PostSlider = async () => {

    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const response = await axios.post(
        `/api/v1/createslider`, sliderTitle, config
      );
      console.log(response)
    } catch (err) {
      console.log(err.data)
    }


  }
 

  return (
    <div className="productList">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: "#ffba02" }}
      >
        Home Slider
      </Typography>
      <Divider />
      <div className="contentbox">
        <Divider />
        <h5>English Slider</h5>
        <input type='text' placeholder="title"
          name="titleEnglish"
          onChange={(e) => handleChange(e)}
        />
        <Divider />
        <h5>Arabic Slider</h5>
        <input type='text' placeholder="title"
          name="titleArabic"
          onChange={(e) => handleChange(e)}
        />
        <Divider />
        <h5>Image URL</h5>
        <input type='text' placeholder="image"
          name="images"
          onChange={(e) => handleChange(e)}
        />
        {/* <h5>Image (Dimension 540 X 330)</h5>
         <input type='file' placeholder="title"
          name="images"
         onChange={(e) => handleChange(e)}
         /> */}
      </div>
      <div className='sliderbutton'>
        <Grid item xs={6} sm={6}>
          <Button
            style={{
              backgroundColor: "#ffba02",
              color: "black",
              height: "55px",
              borderRadius: "5px",
            }}
            onClick={PostSlider}
            variant="contained"
          // onClick={getAllRidersData}
          >
            Submit
          </Button>
        </Grid>

        <Grid item xs={6} sm={6}>
          <Link to="/update">
          
            <Button
              style={{
                backgroundColor: "#ffba02",
                color: "black",
                height: "55px",
                borderRadius: "5px",
              }}
              onClick={PostSlider}
              variant="contained"
            // onClick={getAllRidersData}
            >
              Update
            </Button>
          </Link>
        </Grid>
      </div>
    </div>
  );
}
