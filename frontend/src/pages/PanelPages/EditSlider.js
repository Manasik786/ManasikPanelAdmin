import React, { useEffect, useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
export default function EdiSlider() {
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
    const [preditdata, setpreditData] = useState({
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
                `/api/v1/slider/${preditdata._id}`,
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
                `/api/v1/slider/${id}`,
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
                <h5>Slider Title Arabic</h5>
                <input
                    type="text"
                    name="titlear"
                    value={data.titlear}
                    placeholder={preditdata.titlear}
                    onChange={handleChange}
                />

                <h5>Service Title</h5>
                <input
                    type="text"
                    name="title"
                    value={data.title}
                    placeholder={preditdata.title}
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

                <h5>Service Description Arabic</h5>
                <textarea
                    rows="10"
                    cols="218"
                    name="Descriptionar"
                    value={data.Descriptionar}
                    placeholder={preditdata.Descriptionar}
                    style={{ resize: "none" }}
                    onChange={handleChange}
                />
                <h5>Service Description</h5>

                <textarea
                    rows="10"
                    cols="218"
                    name="Description"
                    value={data.Description}
                    placeholder={preditdata.Description}
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
