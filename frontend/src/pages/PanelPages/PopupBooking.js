import React, { useState, useEffect, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import "./abcd.css"




const PopupBooking = (data) => {
    console.log(data.data)

    return (
        <>

            <div className="popup1 design"  >
                <div className="popupform2">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4 style={{ textAlign: "center" }}>Name </h4>
                            <p style={{ textAlign: "center" }}>{data.data.Name ? data.data.Name : "not given"}</p>
                            <h4 style={{ textAlign: "center" }}>Date of Birth </h4>
                            <p style={{ textAlign: "center" }}>{data.data.DOB ? data.data.DOB : "not given"}</p>
                           
                            <h4 style={{ textAlign: "center" }}>Stay period </h4>
                            <p style={{ textAlign: "center" }}>{data.data.stayperiod ? data.data.stayperiod : "not given"}</p>
                            <h4 style={{ textAlign: "center" }}>Service Type </h4>
                            <p style={{ textAlign: "center" }} >{data.data.Servicetype ? data.data.Servicetype : "not given"}</p>
                            <h4 style={{ textAlign: "center" }}>Family Name </h4>
                            <p style={{ textAlign: "center" }}>{data.data.familyname ? data.data.familyname : "not given"}</p>
                            <h4 style={{ textAlign: "center" }}>Email </h4>
                            <p style={{ textAlign: "center" }}>{data.data.Email ? data.data.Email : "not given"}</p>
                            <h4 style={{ textAlign: "center" }}>Country </h4>
                            <p style={{ textAlign: "center" }}>{data.data.country ? data.data.country : "not given"}</p>
                            <h4 style={{ textAlign: "center" }}>Phone </h4>
                            <p style={{ textAlign: "center" }}>{data.data.Phone ? data.data.Phone : "not given"}</p>
                            </div>
                        <div className="col-sm-6">
                        <h4 style={{ textAlign: "center" }}>Service Type </h4>
                            <p style={{ textAlign: "center" }} >{data.data.Servicetype ? data.data.Servicetype : "not given"}</p>
                            <h4 style={{ textAlign: "center" }}>Relative Contact</h4>
                            <p style={{ textAlign: "center" }}>{data.data.relativecontact ? data.data.relativecontact : "not given"}</p>
                            <h4 style={{ textAlign: "center" }}>Reason to Visit </h4>
                            <p style={{ textAlign: "center" }}>{data.data.Reasontovisitksa ? data.data.Reasontovisitksa : "not given"}</p>
                            <h4 style={{ textAlign: "center" }}>Religion </h4>
                            <p style={{ textAlign: "center" }}>{data.data.Religion ? data.data.Religion : "not given"}</p>
                            <h4 style={{ textAlign: "center" }}>Passport # </h4>
                            <p style={{ textAlign: "center" }}>{data.data.passportno ? data.data.passportno : "not given"}</p>
                            <h4 style={{ textAlign: "center" }}>Natioanl ID </h4>
                            <p style={{ textAlign: "center" }}>{data.data.nationalid ? data.data.nationalid : "not given"}</p>
                            <h4 style={{ textAlign: "center" }}>Visited Before </h4>
                            <p style={{ textAlign: "center" }}>{data.data.Visitedbefore ? "yes" : "not given"}</p>
                            
                        </div>
                        
                    </div>

                </div>
            </div>
        </>
    );
};

export default PopupBooking;