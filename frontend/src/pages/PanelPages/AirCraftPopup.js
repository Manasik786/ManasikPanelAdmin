import React, { useState, useEffect, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import "./abcd.css"



const AirCraftPopup = (data) => {


    //   const handleChange = (event) => {
    //       setData({
    //         ...data,
    //         [event.target.name]: event.target.value,
    //       });
    //       console.log(data);
    //     };
    //     let history = useHistory();
    // const ref = useRef(null);
    // const [images, setImages] = useState([]);
    // const [imagesPreview, setImagesPreview] = useState([]);
    // const [oldImages, setOldImages] = useState([]);
    // const [Description, setDescription] = useState("");
    // const [Descriptionar, setDescriptionar] = useState("");
    // const [CardType, setCardType] = useState("");
    // const [CardCardDetail, setCardTitle] = useState("");
    // const [CardTitlear, setCardTitlear] = useState("");
    // const [viewdata, setviewData] = useState({
    //   CardType: "service",
    //   CardTitle: CardTitle,
    //   CardTitlear: CardTitlear,
    //   Description: Description,
    //   Descriptionar: Descriptionar,
    //   images: " ",
    // });
    // const [data, setData] = useState({
    //   CardType: "service",
    //   CardTitle: CardTitle,
    //   CardTitlear: CardTitlear,
    //   Description: Description,
    //   Descriptionar: Descriptionar,
    //   images: " ",
    // });
    // const [preditdata, setpreditData] = useState({
    //   CardType: "service",
    //   CardTitle: CardTitle,
    //   CardTitlear: CardTitlear,
    //   Description: Description,
    //   Descriptionar: Descriptionar,
    //   images: " ",
    // });

    // const uppercaseWords = (str) =>
    //   str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
    // const createProductSubmitHandler = async (e) => {
    //   e.preventDefault();
    //   setCardType("Services");
    //   setDescription(Description);
    //   setDescription(Descriptionar);
    //   setCardTitle(CardTitle);
    //   setCardTitlear(CardTitlear);
    //   const myForm = new FormData();
    //   myForm.append("Description", data.Description);
    //   myForm.append("Descriptionar", data.Descriptionar);
    //   myForm.append("CardTitle", uppercaseWords(data.CardTitle));
    //   myForm.append("CardTitlear", uppercaseWords(data.CardTitlear));
    //   myForm.append("CardType", "service");
    //   // myForm.append("images", data.images);

    //   images.forEach((image) => {
    //     myForm.append("images", image);
    //   });

    //   console.log(data, "dsad");
    //   try {
    //     // const config = {
    //     //     headers: { "Content-Type": "application/json" },
    //     // };
    //     const response = await axios.put(
    //       `/api/v1/CardItems/${preditdata._id}`,
    //       myForm
    //     );
    //     console.log(response);
    //     history.replace("/services");
    //   } catch (err) {
    //     console.log(err.data);
    //   }
    // };
    // //{"flag":true,"_id":"62d52e7e23b2fa38448f747c","CardType":"service","CardTitle":"Good Service","Description":"lorem ipsum",
    // //"images":[{"_id":"62d52e7e23b2fa38448f747d","public_id":"AviationsFolder/pw42cvnnasyk7nm85tul","url":"https://res.cloudinary.com/dag7tgw83/image/upload/v1658138238/AviationsFolder/pw42cvnnasyk7nm85tul.png"}],"__v":0}
    // const placeholderdata = async () => {
    //   await setpreditData(JSON.parse(localStorage.getItem("D")));
    //   console.log(preditdata, "Abc");
    //   console.log(preditdata.images[0].url);
    // };

    // useEffect(() => {
    //   placeholderdata();
    // }, []);

    // const Submission = async (id, productData) => {
    //   try {
    //     const config = {
    //       headers: { "Content-Type": "application/json" },
    //     };

    //     const response = await axios.put(
    //       `/api/v1/CardItems/${id}`,
    //       productData,
    //       config
    //     );

    //     console.log(response.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // const createServiceImagesChange = (e) => {
    //   const files = Array.from(e.target.files);

    //   setImages([]);
    //   setImagesPreview([]);
    //   setOldImages([]);

    //   files.forEach((file) => {
    //     const reader = new FileReader();

    //     reader.onload = () => {
    //       if (reader.readyState === 2) {
    //         setImagesPreview((old) => [...old, reader.result]);
    //         setImages((old) => [...old, reader.result]);
    //       }
    //     };
    //     console.log(file);
    //     reader.readAsDataURL(file);
    //   });
    // };
    // console.log(data.data.Description)

    return (
        <>
            <div className="popup1 design"  >
                <div className="popupform1">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3 style={{ textAlign: "center" }}>familyName</h3>
                            <p style={{ textAlign: "center" }}>{data.data.Name ? data.data.Name : "no"}</p>
                            <h3 style={{ textAlign: "center" }}>familyName</h3>
                            <p style={{ textAlign: "center" }}>{data.data.familyname ? data.data.familyname : "no"}</p>
                            <h3 style={{ textAlign: "center" }}>nationalid</h3>
                            <p style={{ textAlign: "center" }} >{data.data.nationalid ? data.data.nationalid : "no"}</p>
                            <h3 style={{ textAlign: "center" }}>DestinationFrom</h3>
                            <p style={{ textAlign: "center" }} >{data.data.DestinationFrom ? data.data.DestinationFrom : "no"}</p>
                            <h3 style={{ textAlign: "center" }}>NumberOfPasseneger</h3>
                            <p style={{ textAlign: "center" }} >{data.data.NumberOfPasseneger ? data.data.NumberOfPasseneger : "no"}</p>
                            <h3 style={{ textAlign: "center" }}>Hotel Service</h3>
                            <p style={{ textAlign: "center" }} >{data.data.HotelService ? "yes" : "no"}</p>
                            <h3 style={{ textAlign: "center" }}>Visa Service</h3>
                            <p style={{ textAlign: "center" }} >{data.data.VisaService ? "yes" : "no"}</p>
                            <h3 style={{ textAlign: "center" }}>Department</h3>
                            <p style={{ textAlign: "center" }} >{data.data.TransportationService ? "yes" : "no"}</p>


                        </div>
                        <div className="col-sm-6 ">


                            <h3 style={{ textAlign: "center" }}>Valid </h3>
                            <p style={{ textAlign: "center" }} >{data.data.Email ? data.data.Email : "no"}</p>
                            <h3 style={{ textAlign: "center" }}>Phone </h3>
                            <p style={{ textAlign: "center" }} >{data.data.Phone ? "yes" : "no"}</p>
                            <h3 style={{ textAlign: "center" }}>Valid </h3>
                            <p style={{ textAlign: "center" }} >{data.data.CateringService ? "yes" : "no"}</p>
                            <h3 style={{ textAlign: "center" }}>Location</h3>
                            <p style={{ textAlign: "center" }} >{data.data.Notes ? "yes" : "no"}</p>
                            <h3 style={{ textAlign: "center" }}>Location Arabic</h3>
                            <p style={{ textAlign: "center" }} >{data.data.Date ? "yes" : "no"}</p>


                        </div>
                        {/* <div className="col-sm-6 imge">
                    <img src={data.data.images[0].url} width="100%"/>
                </div> */}
                    </div>

                </div>
            </div>
        </>
    );
};

export default AirCraftPopup;