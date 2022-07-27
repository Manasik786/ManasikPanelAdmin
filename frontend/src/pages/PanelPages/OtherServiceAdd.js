import React, { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function OtherServicesAddition() {
  const ref = useRef(null);
  let history = useHistory();
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [CardDescriptions, setCardDescriptions] = useState("");
  const [CardDescriptionsar, setCardDescriptionsar] = useState("");
  const [CardType, setCardType] = useState("");
  const [CardTitlear, setCardTitlear] = useState("");
  const [CardTitle, setCardTitle] = useState("");

  const [data, setData] = useState({
    CardType: CardType,
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
  useEffect(() => {}, []);
  const uppercaseWords = (str) =>
    str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
  const createProductSubmitHandler = async (e) => {
    e.preventDefault();
    setCardType("Services");
    setCardDescriptions(CardDescriptions);
    setCardDescriptionsar(CardDescriptionsar);
    setCardTitle(CardTitle);
    setCardTitlear(CardTitle);
    const myForm = new FormData();
    myForm.append("CardDescriptions", data.CardDescriptions);
    myForm.append("CardDescriptionsar", data.CardDescriptionsar);
    myForm.append("CardTitle", uppercaseWords(data.CardTitle));
    myForm.append("CardTitlear", uppercaseWords(data.CardTitlear));
    myForm.append("CardType", uppercaseWords(data.CardType));

    images.forEach((image) => {
      myForm.append("images", image);
    });

    console.log(data, "dsad");
    try {
      // const config = {
      //     headers: { "Content-Type": "application/json" },
      // };
      const response = await axios.post(`/api/v1/CreateCardList`, myForm);
      console.log(response);
      history.replace("/otherservices");
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
        Service Panel
      </Typography>

      <div className="contentbox">
        <h5>Service Type</h5>
        {/* <input
                    type="text"
                    name="CardType"
                    value={data.CardType}
                    onChange={handleChange}
                /> */}
        <input
          type="radio"
          value="About"
          name="CardType"
          onChange={handleChange}
        />{" "}
        About
        <input
          type="radio"
          value="Vision"
          name="CardType"
          onChange={handleChange}
        />{" "}
        Vision
        <input
          type="radio"
          value="Mission"
          name="CardType"
          onChange={handleChange}
        />{" "}
        Mission
        <input
          type="radio"
          value="Ceomessage"
          name="CardType"
          onChange={handleChange}
        />{" "}
        Ceomessage
        <div className="textboxflex">
          <span className="spanclass">
            <h5>Service Title</h5>
            <input
              type="text"
              name="CardTitle"
              value={data.CardTitle}
              onChange={handleChange}
            />
          </span>
          <span className="spanclass">
            <h5>Service Title Arabic</h5>
            <input
              type="text"
              name="CardTitlear"
              value={data.CardTitlear}
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
              name="CardDescriptions"
              className="largetext"
              value={data.CardDescriptions}
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
              name="CardDescriptionsar"
              className="largetext"
              value={data.CardDescriptionsar}
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
