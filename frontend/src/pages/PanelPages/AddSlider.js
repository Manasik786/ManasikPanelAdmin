import React, { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function SliderAddition() {
  const ref = useRef(null);
  let history = useHistory();
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [Description, setDescription] = useState("");
  const [Descriptionar, setDescriptionar] = useState("");
  const [titlear, settitlear] = useState("");
  const [title, settitle] = useState("");

  const [data, setData] = useState({
    title: title,
    titlear: titlear,
    Description: Description,
    Descriptionar: Descriptionar,
    images: images,
  });
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    console.log(data);
  };
  useEffect(() => {}, []);
  const uppercaseWords = (str) =>
    str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
  const createProductSubmitHandler = async (e) => {
    e.preventDefault();

    setDescription(Description);
    setDescriptionar(Descriptionar);
    settitle(title);
    settitlear(title);
    const myForm = new FormData();
    myForm.append("Description", data.Description);
    myForm.append("Descriptionar", data.Descriptionar);
    myForm.append("title", uppercaseWords(data.title));
    myForm.append("titlear", uppercaseWords(data.titlear));

    images.forEach((image) => {
      myForm.append("images", image);
    });

    console.log(data, "dsad");
    try {
      const response = await axios.post(`/api/v1/createslider`, myForm);
      console.log(response);
      history.replace("/Slider");
    } catch (err) {
      console.log(err.data);
    }
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
        Slider Panel
      </Typography>

      <div className="contentbox">
        <div className="textboxflex">
          <span className="spanclass">
            <h5>Service Title</h5>
            <input
              type="text"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
          </span>
          <span className="spanclass">
            <h5>Service Title Arabic</h5>
            <input
              type="text"
              name="titlear"
              value={data.titlear}
              onChange={handleChange}
            />
          </span>
        </div>

        <div className="textboxflex">
          
          <span className="spanclass largetext">
            <h5>Service Description </h5>
            <textarea
              rows="10"
              cols="68"
              name="Description"
              className="largetext"
              value={data.Description}
              placeholder="write service description here"
              style={{ resize: "none" }}
              onChange={handleChange}
            />
          </span>
          <span className="spanclass largetext">
            <h5>Service Description Arabic</h5>
            <textarea
              rows="10"
              cols="68"
              name="Descriptionar"
              className="largetext"
              value={data.Descriptionar}
              placeholder="write service description here"
              style={{ resize: "none" }}
              onChange={handleChange}
            />
          </span>
        </div>

        <h5>Service images</h5>
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
