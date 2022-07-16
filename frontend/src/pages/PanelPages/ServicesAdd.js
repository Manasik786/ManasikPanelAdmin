import React, { useEffect, useState } from 'react'
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ReactQuill from 'react-quill';
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function ServicesAddition() {
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [CardDescriptions, setCardDescriptions] = useState("")
    const [CardType, setCardType] = useState("")
    const [CardTitle, setCardTitle] = useState("")

    const [data, setData] = useState({
        CardType: "",
        CardTitle: "",
        CardDescriptions: "",
        images: []

    })
    const createProductSubmitHandler = async (e) => {
        e.preventDefault();
        setCardType("Services")
        const myForm = new FormData();
        myForm.set("CardDescriptions", CardDescriptions)
        myForm.set("CardType", "services")

        console.log(myForm)
        await setData({
            CardType: "S",
            CardTitle: CardTitle,
            CardDescriptions: CardDescriptions,
            images: images
        })
        console.log(data)
        try {
            const config = {
                headers: { "Content-Type": "application/json" },
            };
            const response = await axios.post(
                `/api/v1/CreateCardList`, data, config
            );
            console.log(response)

        } catch (err) {
            console.log(err.data)
        }

    };
    const createServiceImagesChange = (e) => {
        const files = Array.from(e.target.files);

        setImages([]);
        setImagesPreview([]);

        files.forEach((file) => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((old) => [...old, reader.result]);
                    setImages((old) => [...old, reader.result]);
                }
            };

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
                <h5>Service Title</h5>
                <input type="text" placeholder='CardTitle' onChange={(e) => setCardTitle(e.target.value)} />
                <h5>Service images</h5>
                <input type='text' placeholder="image" name="images" onChange={(e) => setImages(e.target.value)} />


                <h5>Service Description</h5>
                <textarea rows="10" cols="218" name="CardDescriptions" placeholder='write service description here' style={{ "resize": "none" }} value={CardDescriptions} onChange={(e) => setCardDescriptions(e.target.value)} />


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
                        onClick={createProductSubmitHandler}
                        variant="contained"
                    >
                        Submit
                    </Button>
                </Grid>



            </div>
        </div >
    );
}