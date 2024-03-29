import React, { useEffect, useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
export default function AmbulanceAddition() {
  const ref = useRef(null);
  let history = useHistory();
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [CardDescriptions, setCardDescriptions] = useState("");
  const [CardDescriptionsar, setCardDescriptionsar] = useState("");
  const [CardType, setCardType] = useState("");
  const [CardDetailar, setCardDetailar] = useState("");
  const [CardDetail, setCardDetail] = useState("");

  const [data, setData] = useState({
    CardType: "Air Ambulance",
    CardDetail: CardDetail,
    CardDetailar: CardDetailar,
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
  useEffect(() => { }, []);
  const uppercaseWords = (str) =>
    str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
  const createProductSubmitHandler = async (e) => {
    e.preventDefault();
    setCardType("Air Ambulance");
    setCardDescriptions(CardDescriptions);
    setCardDescriptionsar(CardDescriptionsar);
    setCardDetailar(CardDetailar);
    setCardDetail(CardDetail);
    const myForm = new FormData();
    myForm.append("CardDescriptions", data.CardDescriptions);
    myForm.append("CardDescriptionsar", data.CardDescriptionsar);
    myForm.append("CardDetail", uppercaseWords(data.CardDetail));
    myForm.append("CardDetailar", uppercaseWords(data.CardDetailar));
    myForm.append("CardType", "Air Ambulance");
    // myForm.append("images", data.images);

    images.forEach((image) => {
      myForm.append("images", image);
    });

    console.log(data, "dsad");
    try {
      // const config = {
      //     headers: { "Content-Type": "application/json" },
      // };
      const response = await axios.post(
        `/api/v1/CreateAirAmbulanceList`,
        myForm
      );
      console.log(response);
      Swal.fire("Saved", '', 'success');
      history.replace("/airambulanceservices");
    } catch (err) {
      Swal.fire("Error", '', 'error');
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
        Air Ambulance Panel
      </Typography>

      <div className="contentbox">
        <div className="textboxflex">
          <span className="spanclass">
            <h5>Air Ambulance Title</h5>
            <input
              type="text"
              name="CardDetail"
              value={data.CardDetail}
              onChange={handleChange}
            />
          </span>
          <span className="spanclass">
            <h5>Air Ambulance Title Arabic</h5>
            <input
              type="text"
              name="CardDetailar"
              value={data.CardDetailar}
              onChange={handleChange}
            />
          </span>
        </div>





        <div className="textboxflex">
          <span className="spanclass largetext">
            <h5>Service Description</h5>
            <textarea
              rows="10"
              cols="68"
              className="largetext"
              name="CardDescriptions"
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
              className="largetext"
              name="CardDescriptionsar"
              value={data.CardDescriptionsar}
              placeholder="write service description here"
              style={{ resize: "none" }}
              onChange={handleChange}
            />
          </span>
        </div>





        <h5>Air Ambulance images</h5>

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
