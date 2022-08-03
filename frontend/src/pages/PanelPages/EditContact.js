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
    
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [data, setData] = useState({
        phone: phone,
        email: email,
        location: location,
       
    });
    const [preditdata, setpreditData] = useState({
        location: location,
        email: email,
        phone: phone,
       
    });
    console.log("dat is ",preditdata)
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

        setPhone(phone);
        setEmail(email);
        setLocation(location);
        
        const myForm = new FormData();
        myForm.append("phone", data.phone);
        myForm.append("email", data.email);
        myForm.append("location", uppercaseWords(data.location));
        // myForm.append("images", data.images);

       

        console.log(data, "dsad");
        try {
            // const config = {
            //     headers: { "Content-Type": "application/json" },
            // };
            const response = await axios.put(
                `/api/v1/Contact/${preditdata._id}`,
                myForm
            );
            console.log(response);
            history.replace("/contact");
        } catch (err) {
            console.log(err.data);
        }
    };
    //{"flag":true,"_id":"62d52e7e23b2fa38448f747c","CardType":"service","CardTitle":"Good Service","CardDescriptions":"lorem ipsum",
    //"images":[{"_id":"62d52e7e23b2fa38448f747d","public_id":"AviationsFolder/pw42cvnnasyk7nm85tul","url":"https://res.cloudinary.com/dag7tgw83/image/upload/v1658138238/AviationsFolder/pw42cvnnasyk7nm85tul.png"}],"__v":0}
    const placeholderdata = async () => {
        await setpreditData(JSON.parse(localStorage.getItem("contact")));
        console.log(preditdata, "Abc");
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
                `/api/v1/Contact/${id}`,
                productData,
                config
            );

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    

    function BackFunction(){
        history.replace("/contact");
      }

    return (
        <div className="productList">
            <Typography
                variant="h5"
                className="productListTitle"
                style={{ color: "#ffba02" }}
            >
               Contact 
            </Typography>

            <div className="contentbox">
                <h5>Email</h5>
                <input
                    type="text"
                    name="email"
                    value={data.email}
                    placeholder={preditdata.email}
                    onChange={handleChange}
                />

                <h5>Loaction</h5>
                <input
                    type="text"
                    name="location"
                    value={data.location}
                    placeholder={preditdata.location}
                    onChange={handleChange}
                />
                <h5>Phone</h5>
                {/* <input type='text' placeholder="image" name="images" value={images} onChange={(e) => setImages(e.target.value)} /> */}
                <input
                    type="text"
                    name="phone"
                    value={data.phone}
                    placeholder={preditdata.phone}
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
            onClick={BackFunction}
           
            variant="contained"
          >
           BACK
          </Button>
        </Grid>
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
