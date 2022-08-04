import React, { useEffect, useState } from 'react'
import Typography from "@mui/material/Typography";
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
export default function Editapplicantstatus() {
    let history = useHistory()
    const Stylings = {
        color: "white",
        textDecoration: "none"
    }
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [CardDescriptions, setCardDescriptions] = useState("")
    const [CardType, setCardType] = useState("")
    const [CardTitle, setCardTitle] = useState("")

    const [preditdata, setpreditData] = useState({
        images: [],
        Position: "",
        Name: "",
        Phone: " ",
        Email: "",
        Gender: "",
        Nationality: "",
        Cv: "",
        Status: ""

    })


    const [data, setData] = useState({
        images: [],
        Position: "",
        Name: "",
        Phone: " ",
        Email: "",
        Gender: "",
        Nationality: "",
        Cv: "",
        Status: ""
    })
    //{"flag":true,"_id":"62d52e7e23b2fa38448f747c","CardType":"service","CardTitle":"Good Service","CardDescriptions":"lorem ipsum",
    //"images":[{"_id":"62d52e7e23b2fa38448f747d","public_id":"AviationsFolder/pw42cvnnasyk7nm85tul","url":"https://res.cloudinary.com/dag7tgw83/image/upload/v1658138238/AviationsFolder/pw42cvnnasyk7nm85tul.png"}],"__v":0}
    const placeholderdata = async () => {
        await setpreditData(JSON.parse(localStorage.getItem("applicants")))
        console.log(preditdata, "Abc")
    };
    useEffect(() => {
        placeholderdata()


    }, []);
    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
        console.log(data)

    }
    const createProductSubmitHandler = async (e) => {
        e.preventDefault();
        setCardType("Services")
        setCardDescriptions(CardDescriptions)
        setCardTitle(CardTitle)
        const myForm = new FormData();
        myForm.append("preditdata.Name", preditdata.Name)
        myForm.append("Nationality", preditdata.Nationality)
        myForm.append("Position", preditdata.Position)
        myForm.append("Gender", preditdata.Gender)
        myForm.append("Email", preditdata.Email)
        myForm.append("Status", data.Status)

        images.forEach((image) => {
            myForm.append("images", image);
        });







        await setData({
            images: preditdata.images,
            Position: preditdata.Position,
            Name: preditdata.Name,
            Phone: preditdata.Phone,
            Email: preditdata.Email,
            Gender: preditdata.Gender,
            Nationality: preditdata.Nationality,
            Cv: preditdata.Cv,
            Status: preditdata.Status
        })
        console.log(data)
        console.log(preditdata)
        console.log(preditdata._id)
        console.log(data._id)
        console.log(data.Status)

        await Submission(myForm)
    };

    const Submission = async (StatusData) => {
        try {
            const config = {
                headers: { "Content-Type": "application/json" },
            };
            const response = await axios.put(`/api/v1/applicants/${preditdata._id}`, StatusData);
            console.log(response)
            history.push("/manageapplicant")
        

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
                Applicants Panel Edit
            </Typography>
            <label className='statuspage' >Name:    {preditdata.Name}</label>
            <br />
            <label className='statuspage'>Nationality:    {preditdata.Nationality}</label>
            <br />
            <label className='statuspage'>Position:    {preditdata.Position}</label>
            <br />
            <label className='statuspage'>Gender:    {preditdata.Gender}</label>
            <br />
            <label className='statuspage'>Phone:    {preditdata.Phone}</label>
            <br />
            <label className='statuspage'>Email:    {preditdata.Email}</label>
            <br />
            {/* <img src={preditdata.images[0].url} /> */}
            <br />

            <label className="statuspage" for="Status">Update Status:</label>

            <select name="Status" id="Status"  className="statuspage" onChange={handleChange} >
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="Rejected">Rejected</option>

            </select>
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