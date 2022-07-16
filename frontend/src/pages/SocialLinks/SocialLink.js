import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ReactQuill from 'react-quill';
import { Button } from "@material-ui/core";
import { Grid } from "@mui/material";
import 'react-quill/dist/quill.snow.css';
import './sociallink.css'
import { useEffect, useState } from "react";
import axios from "axios"



export default function UserList() {
  const [data, setData] = useState([]);
  const [facebook, setfacebook] = useState()
  const [instagram, setinstagram] = useState()
  const [LinkedIn, setLinkedin] = useState()
  const [socialdata, setsocialdata] = useState([])
  // {
  //   Link: [
  //     {
  //       linkName: "facbook",
  //       Url: facebook
  //     },
  //     {
  //       linkName: "instagram",
  //       Url: instagram
  //     },
  //     {
  //       linkName: "linkedin",
  //       Url: LinkedIn
  //     }
  //   ],
  //   logo: ["https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo.jpg"
  //     , "https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo.jpg",
  //     "https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo.jpg"
  //   ]
  // }
  const handlesubmission = async (e) => {


    // const myForm = new FormData();
    // myForm.set("socialdata", socialdata)


    // const [name, value] = e.target
    // setsocialdata({ ...socialdata, [name]: value })
  }
  const Postlinks = async () => {
    console.log(facebook);
    console.log(LinkedIn);
    console.log(instagram);
    console.log(socialdata, "data")
    const data = {
      Link: [
        {
          linkName: "facbook",
          Url: facebook
        },
        {
          linkName: "instagram",
          Url: instagram
        },
        {
          linkName: "linkedin",
          Url: LinkedIn
        }
      ],
      logo: ["https://img.icons8.com/ios/100/000000/facebook--v1.png"
        , "https://img.icons8.com/ios/100/000000/linkedin-circled--v3.png",
        "https://workingwithdog.com/wp-content/uploads/2016/05/new_instagram_logo.jpg"
      ]
    }
    console.log(data, "op")
    setsocialdata(data)
    console.log(socialdata, "updated data")

    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const response = await axios.post(
        `/api/v1/createSocialLink_N_Logo`, socialdata, config
      );
      console.log(response)

    } catch (err) {
      console.log(err.data)
    }
    // try {
    //   const config = {
    //     headers: { "Content-Type": "application/json" },
    //   };
    //   const response = await axios.post( 
    //     `/api/v1/createslider`, socialdata, config
    //   );
    //   console.log(response)
    // } catch (err) {
    //   console.log(err.data)
    // }


  }
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get('/api/v1/SocialLink_N_Logo');
      setData(data.data);
      console.log(data.data);
    };
    getdata();

  }, [])
  return (
    <div className="productList">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: "#ffba02" }}
      >
        Social Links
      </Typography>
      <Divider />
      <div className="contentbox">
        <Divider />
        <h5>FaceBook Link</h5>
        <input type='text' placeholder="facebook link" onChange={(e) => setfacebook(e.target.value)} />
        <h5>LinkedIn Link</h5>
        <input type='text' placeholder="LinkedIn Link" onChange={(e) => setLinkedin(e.target.value)} />
        <h5>Instagram Link</h5>
        <input type='text' placeholder="Instagram Link" onChange={(e) => setinstagram(e.target.value)} />
      </div>
      <Grid item xs={6} sm={6}>
        <Button
          style={{
            backgroundColor: "#ffba02",
            color: "black",
            height: "55px",
            borderRadius: "5px",
          }}
          variant="contained"
          onClick={Postlinks}
        >
          Submit
        </Button>

      </Grid>
    </div>
  );
}
