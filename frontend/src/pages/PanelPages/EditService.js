import React, { useEffect, useState } from 'react'
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ReactQuill from 'react-quill';
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function EditService() {
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [CardDescriptions, setCardDescriptions] = useState("")
    const [CardType, setCardType] = useState("")
    const [CardTitle, setCardTitle] = useState("")

    const [preditdata, setpreditData] = useState({
        CardType: "",
        CardTitle: "",
        CardDescriptions: "",
        images: [{
            _id: "62d52e7e23b2fa38448f747d",
            public_id: "AviationsFolder/pw42cvnnasyk7nm85tul",
            url: "https://res.cloudinary.com/dag7tgw83/image/upload/v1658138238/AviationsFolder/pw42cvnnasyk7nm85tul.png"
        }]

    })


    const [data, setData] = useState({
        CardType: "",
        CardTitle: "",
        CardDescriptions: "",
        images: []

    })
    //{"flag":true,"_id":"62d52e7e23b2fa38448f747c","CardType":"service","CardTitle":"Good Service","CardDescriptions":"lorem ipsum",
    //"images":[{"_id":"62d52e7e23b2fa38448f747d","public_id":"AviationsFolder/pw42cvnnasyk7nm85tul","url":"https://res.cloudinary.com/dag7tgw83/image/upload/v1658138238/AviationsFolder/pw42cvnnasyk7nm85tul.png"}],"__v":0}
    const placeholderdata = async () => {
        await setpreditData(JSON.parse(localStorage.getItem("D")))
        console.log(preditdata, "Abc")
        console.log(preditdata.images[0].url)
    };
    useEffect(() => {
        try {
            placeholderdata()
        } catch (error) {
            console.log(error)
        }
    }, []);
    const createProductSubmitHandler = async (e) => {
        e.preventDefault();
        setCardType("Services")
        const myForm = new FormData();
        await myForm.set("CardDescriptions", CardDescriptions)
        await myForm.set("CardType", "services")
        await myForm.set("CardTitle", CardTitle)
        if (CardTitle == "") {
            await setCardTitle(preditdata.CardTitle)
        }
        if (CardDescriptions == "") {
            await setCardDescriptions(preditdata.CardDescriptions)
        }
        if (images == "") {
            await setImages(preditdata.images)
        }

        console.log(myForm)


        await setData({
            CardType: "service",
            CardTitle: CardTitle,
            CardDescriptions: CardDescriptions,
            images: images
        })

        if (data.CardDescriptions = "" && data.CardTitle == "") {
            await setData({
                CardType: "service",
                CardTitle: CardTitle,
                CardDescriptions: CardDescriptions,
                images: images
            })

        }
        else {
            console.log("chal gaya")
        }

        console.log(data)
        try {
            const config = {
                headers: { "Content-Type": "application/json" },
            };
            const response = await axios.put(
                `/api/v1/CardItems/${preditdata._id}`, data, config
            );
            console.log(response)

        } catch (err) {
            console.log(err.data)
        }
       await Submission(myForm)
    };
    const Submission = async (data) => {
        try {
            const config = {
                headers: { "Content-Type": "application/json" },
            };
            const response = await axios.put(
                `/api/v1/CardItems/${preditdata._id}`, data, config
            );
            console.log(response)

        } catch (err) {
            console.log(err.data)
        }

    }
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
                Service Panel edit
            </Typography>

            <div className="contentbox">
                <h5>Service Title</h5>
                <input type="text" placeholder={preditdata.CardTitle} onChange={(e) => setCardTitle(e.target.value)} />
                <h5>Service images</h5>
                <input type='text' placeholder="LINK" name="images" onChange={(e) => setImages(e.target.value)} />


                <h5>Service Description</h5>
                <textarea rows="10" cols="218" name="CardDescriptions" placeholder={preditdata.CardDescriptions} style={{ "resize": "none" }} value={CardDescriptions} onChange={(e) => setCardDescriptions(e.target.value)} />
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

                    > Submit
                    </Button>
                </Grid>



            </div>
        </div >
    );
}