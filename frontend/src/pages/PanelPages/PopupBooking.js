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
                            <h4 style={{ textAlign: "" }}>Name</h4>
                            <p style={{ textAlign: "" }}>{data.data.Name ? data.data.Name : "not given"}</p>
                            <h4 style={{ textAlign: "" }}>Date of Birth </h4>
                            <p style={{ textAlign: "" }}>{data.data.DOB ? data.data.DOB : "not given"}</p>
                           
                            <h4 style={{ textAlign: "" }}>Stay period </h4>
                            <p style={{ textAlign: "" }}>{data.data.stayperiod ? data.data.stayperiod : "not given"}</p>
                            
                            <h4 style={{ textAlign: "" }}>Family Name </h4>
                            <p style={{ textAlign: "" }}>{data.data.familyname ? data.data.familyname : "not given"}</p>
                            <h4 style={{ textAlign: "" }}>Email </h4>
                            <p style={{ textAlign: "" }}>{data.data.Email ? data.data.Email : "not given"}</p>
                            <h4 style={{ textAlign: "" }}>Country </h4>
                            <p style={{ textAlign: "" }}>{data.data.country ? data.data.country : "not given"}</p>
                            <h4 style={{ textAlign: "" }}>Phone </h4>
                            <p style={{ textAlign: "" }}>{data.data.Phone ? data.data.Phone : "not given"}</p>
                            </div>
                        <div className="col-sm-6">
                        <h4 style={{ textAlign: "" }}>Service Type </h4>
                            <p style={{ textAlign: "" }} >{data.data.Servicetype ? data.data.Servicetype : "not given"}</p>
                            <h4 style={{ textAlign: "" }}>Relative Contact</h4>
                            <p style={{ textAlign: "" }}>{data.data.relativecontact ? data.data.relativecontact : "not given"}</p>
                            <h4 style={{ textAlign: "" }}>Reason to Visit </h4>
                            <p style={{ textAlign: "" }}>{data.data.Reasontovisitksa ? data.data.Reasontovisitksa : "not given"}</p>
                            <h4 style={{ textAlign: "" }}>Religion </h4>
                            <p style={{ textAlign: "" }}>{data.data.Religion ? data.data.Religion : "not given"}</p>
                            <h4 style={{ textAlign: "" }}>Passport # </h4>
                            <p style={{ textAlign: "" }}>{data.data.passportno ? data.data.passportno : "not given"}</p>
                            <h4 style={{ textAlign: "" }}>Natioanl ID </h4>
                            <p style={{ textAlign: "" }}>{data.data.nationalid ? data.data.nationalid : "not given"}</p>
                            <h4 style={{ textAlign: "" }}>Visited Before </h4>
                            <p style={{ textAlign: "" }}>{data.data.Visitedbefore ? "yes" : "not given"}</p>
                            
                        </div>
                       
                        
                    </div>

                </div>
            </div>
        </>
    );
};

export default PopupBooking;