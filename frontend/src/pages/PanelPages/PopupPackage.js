import React,{useState,useEffect,useRef} from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import "./abcd.css"



const PopupPackage = (data) => {

   
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
  // const [CardDescriptions, setCardDescriptions] = useState("");
  // const [CardDescriptionsar, setCardDescriptionsar] = useState("");
  // const [CardType, setCardType] = useState("");
  // const [CardTitle, setCardTitle] = useState("");
  // const [CardTitlear, setCardTitlear] = useState("");
  // const [viewdata, setviewData] = useState({
  //   CardType: "service",
  //   CardTitle: CardTitle,
  //   CardTitlear: CardTitlear,
  //   CardDescriptions: CardDescriptions,
  //   CardDescriptionsar: CardDescriptionsar,
  //   images: " ",
  // });
  // const [data, setData] = useState({
  //   CardType: "service",
  //   CardTitle: CardTitle,
  //   CardTitlear: CardTitlear,
  //   CardDescriptions: CardDescriptions,
  //   CardDescriptionsar: CardDescriptionsar,
  //   images: " ",
  // });
  // const [preditdata, setpreditData] = useState({
  //   CardType: "service",
  //   CardTitle: CardTitle,
  //   CardTitlear: CardTitlear,
  //   CardDescriptions: CardDescriptions,
  //   CardDescriptionsar: CardDescriptionsar,
  //   images: " ",
  // });
  
  // const uppercaseWords = (str) =>
  //   str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());
  // const createProductSubmitHandler = async (e) => {
  //   e.preventDefault();
  //   setCardType("Services");
  //   setCardDescriptions(CardDescriptions);
  //   setCardDescriptions(CardDescriptionsar);
  //   setCardTitle(CardTitle);
  //   setCardTitlear(CardTitlear);
  //   const myForm = new FormData();
  //   myForm.append("CardDescriptions", data.CardDescriptions);
  //   myForm.append("CardDescriptionsar", data.CardDescriptionsar);
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
  // //{"flag":true,"_id":"62d52e7e23b2fa38448f747c","CardType":"service","CardTitle":"Good Service","CardDescriptions":"lorem ipsum",
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
console.log(data.data.CardDescriptions)

  return (
    <>
      <div className="popup1 design"  >
         <div className="popupform1">
         <div className="row">
                <div className="col-sm-6">
                    <h3 >Package Service</h3>
                    <p>{data.data.Name}</p>
                    <p>{data.data.Namear}</p>
                    <h3 className="arabic-style">خدمة</h3>
                    <p className="arabic-style" >{data.data.EmailAddress}</p>
                    <p className="arabic-style" >{data.data.EmailAddressar}</p>
                    <h3>Description</h3>
                    <p>{data.data.PkgName}</p> 
                    <h3 className="arabic-style">وصف</h3>
                    <p className="arabic-style">{data.data.DaysOfstay}</p>
                    <p className="arabic-style">{data.data.PkgDetailar}</p>
                    <p className="arabic-style">{data.data.PkgNamear}</p>
                    <p className="arabic-style">{data.data.ValidTill}</p>
                 
                </div>
                <div className="col-sm-6 imge">
                    <img src={data.data.images[0].url} width="100%"/>
                </div>
            </div>
         </div>
      </div>  
    </>
  );
};

export default PopupPackage;