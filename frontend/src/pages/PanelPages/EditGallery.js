import React, { useEffect, useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
export default function EditGallery() {
  const Stylings = {
    color: "white",
    textDecoration: "none",
  };
  let isAnonymous = true;
  let history = useHistory();
  const ref = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [CardDescriptionsar, setCardDescriptionsar] = useState("");
  const [CardDescriptions, setCardDescriptions] = useState("");

  const [CardTypear, setCardTypear] = useState("");
  const [CardType, setCardType] = useState("");

  const [data, setData] = useState({
    CardType: CardType,
    CardTypear: CardTypear,
    CardDescriptions: CardDescriptions,
    CardDescriptionsar: CardDescriptionsar,
    images: " ",
  });
  const [preditdata, setpreditData] = useState({
    CardType: CardType,
    CardTypear: CardTypear,
    CardDescriptionsar: CardDescriptionsar,
    CardDescriptions: CardDescriptions,
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
    setCardDescriptions(CardDescriptions);
    setCardDescriptionsar(CardDescriptionsar);
    setCardTypear(CardTypear);
    setCardType(CardType);
    const myForm = new FormData();
    myForm.append("CardDescriptions", data.CardDescriptions);
    myForm.append("CardDescriptionsar", data.CardDescriptionsar);
    myForm.append("CardTypear", uppercaseWords(data.CardTypear));
    myForm.append("CardType", uppercaseWords(data.CardType));
    // myForm.append("images", data.images);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    console.log(data, "dsad");
    try {
      // const config = {
      //     headers: { "Content-Type": "application/json" },
      // };
      const response = await axios.put(
        `/api/v1/GalleryItems/${preditdata._id}`,
        myForm
      );
      console.log(response);
      history.replace("/galleryservices");
    } catch (err) {
      console.log(err.data);
    }
  };
  //{"flag":true,"_id":"62d52e7e23b2fa38448f747c","CardType":CardType,"CardType":"Good Service","CardDescriptions":"lorem ipsum",
  //"images":[{"_id":"62d52e7e23b2fa38448f747d","public_id":"AviationsFolder/pw42cvnnasyk7nm85tul","url":"https://res.cloudinary.com/dag7tgw83/image/upload/v1658138238/AviationsFolder/pw42cvnnasyk7nm85tul.png"}],"__v":0}
  const placeholderdata = async () => {
    await setpreditData(JSON.parse(localStorage.getItem("Gallery")));
    console.log(preditdata, "Abc");
    console.log(preditdata.images[0].url);
  };

  useEffect(() => {
    placeholderdata();
  }, []);

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
        Gallery Edit
      </Typography>

      <div className="contentbox">
        <h5>Gallery Type</h5>

        <input
          type="text"
          name="CardType"
          value={data.CardType}
          placeholder={preditdata.CardType}
          onChange={handleChange}
        />
        <h5>Gallery Type Arabic</h5>
        <input
          type="text"
          name="CardTypear"
          value={data.CardTypear}
          placeholder={preditdata.CardTypear}
          onChange={handleChange}
        />
        <h5>Gallery images</h5>
        {/* <input type='text' placeholder="image" name="images" value={images} onChange={(e) => setImages(e.target.value)} /> */}
        <input
          type="file"
          name="images"
          accept="image/*"
          onChange={createServiceImagesChange}
          multiple
        />

        <h5>Gallery Description</h5>
        <textarea
          rows="10"
          cols="218"
          name="CardDescriptions"
          value={data.CardDescriptions}
          placeholder={preditdata.CardDescriptions}
          style={{ resize: "none" }}
          onChange={handleChange}
        />
        <h5>Gallery Description Arabic</h5>
        <textarea
          rows="10"
          cols="218"
          name="CardDescriptionsar"
          value={data.CardDescriptionsar}
          placeholder={preditdata.CardDescriptionsar}
          style={{ resize: "none" }}
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
