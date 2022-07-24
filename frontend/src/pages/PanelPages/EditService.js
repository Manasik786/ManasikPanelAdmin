import React, { useEffect, useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
export default function EditService() {
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
  const [CardDescriptions, setCardDescriptions] = useState("");
  const [CardDescriptionsar, setCardDescriptionsar] = useState("");
  const [CardType, setCardType] = useState("");
  const [CardTitle, setCardTitle] = useState("");
  const [CardTitlear, setCardTitlear] = useState("");

  const [data, setData] = useState({
    CardType: "service",
    CardTitle: CardTitle,
    CardTitlear: CardTitlear,
    CardDescriptions: CardDescriptions,
    CardDescriptionsar: CardDescriptionsar,
    images: " ",
  });
  const [preditdata, setpreditData] = useState({
    CardType: "service",
    CardTitle: CardTitle,
    CardTitlear: CardTitlear,
    CardDescriptions: CardDescriptions,
    CardDescriptionsar: CardDescriptionsar,
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
    setCardType("Services");
    setCardDescriptions(CardDescriptions);
    setCardDescriptions(CardDescriptionsar);
    setCardTitle(CardTitle);
    setCardTitlear(CardTitlear);
    const myForm = new FormData();
    myForm.append("CardDescriptions", data.CardDescriptions);
    myForm.append("CardDescriptionsar", data.CardDescriptionsar);
    myForm.append("CardTitle", uppercaseWords(data.CardTitle));
    myForm.append("CardTitlear", uppercaseWords(data.CardTitlear));
    myForm.append("CardType", "service");
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
        `/api/v1/CardItems/${preditdata._id}`,
        myForm
      );
      console.log(response);
      history.replace("/services");
    } catch (err) {
      console.log(err.data);
    }
  };
  //{"flag":true,"_id":"62d52e7e23b2fa38448f747c","CardType":"service","CardTitle":"Good Service","CardDescriptions":"lorem ipsum",
  //"images":[{"_id":"62d52e7e23b2fa38448f747d","public_id":"AviationsFolder/pw42cvnnasyk7nm85tul","url":"https://res.cloudinary.com/dag7tgw83/image/upload/v1658138238/AviationsFolder/pw42cvnnasyk7nm85tul.png"}],"__v":0}
  const placeholderdata = async () => {
    await setpreditData(JSON.parse(localStorage.getItem("D")));
    console.log(preditdata, "Abc");
    console.log(preditdata.images[0].url);
  };

  useEffect(() => {
    placeholderdata();
  }, []);

  const Submission = async (id, productData) => {
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const response = await axios.put(
        `/api/v1/CardItems/${id}`,
        productData,
        config
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
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
        Service Panel
      </Typography>

      <div className="contentbox">
        <h5>Service Title Arabic</h5>
        <input
          type="text"
          name="CardTitlear"
          value={data.CardTitlear}
          placeholder={preditdata.CardTitlear}
          onChange={handleChange}
        />

        <h5>Service Title</h5>
        <input
          type="text"
          name="CardTitle"
          value={data.CardTitle}
          placeholder={preditdata.CardTitle}
          onChange={handleChange}
        />
        <h5>Service images</h5>
        {/* <input type='text' placeholder="image" name="images" value={images} onChange={(e) => setImages(e.target.value)} /> */}
        <input
          type="file"
          name="images"
          accept="image/*"
          onChange={createServiceImagesChange}
          multiple
        />

        <h5>Service Description</h5>
        <textarea
          rows="10"
          cols="218"
          name="CardDescriptionsar"
          value={data.CardDescriptionsar}
          placeholder={preditdata.CardDescriptionsar}
          style={{ resize: "none" }}
          onChange={handleChange}
        />
        <h5>Service Description</h5>

        <textarea
          rows="10"
          cols="218"
          name="CardDescriptions"
          value={data.CardDescriptions}
          placeholder={preditdata.CardDescriptions}
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
