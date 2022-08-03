// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import AirCraftPopup from "./AirCraftPopup";
export default function AirCraft() {
    let history = useHistory();
    const Stylings = {
        color: "white",
        textDecoration: "none"
    }
    const [modaldata, setmodaldata] = useState()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async (data) => {
        setmodaldata(data)
        await setShow(true)
    };
    const EditService = async id => {

        const { data } = await axios.get('/api/v1/AirCraftServicee');
        console.log(data.data[0]._id)
        for (let i = 0; i < data.data.length; i++) {
            console.log(data.data[i])
            if (id == data.data[i]._id) {
                console.log(data.data[i])
                await window.localStorage.setItem("AirCraft", JSON.stringify(data.data[i]))

                history.push("/editAirCraftService")

            }



        }
    }
    const [data, setData] = useState([]);
    const getdata = async () => {
        const { data } = await axios.get('/api/v1/AirCraftService');
        setData(data.data);
        console.log(data)

    };
    useEffect(() => {

        getdata();
    }, []);
    const handleDelete = async _id => {



        const { data } = await axios.delete(`/api/v1/AirCraftService/${_id}`, {
            params: { id: _id },
        });
        getdata();
        console.log(data);
    };

    const columns = [
        {
            field: 'Name',
            headerName: 'Name',
            width: 120,
            renderCell: params => {
                return <div className="productListItem">{params.row.Name}</div>;
            },
        },

        {
            field: 'familyname',
            headerName: 'Family Name',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.familyname ? params.row.familyname : "no given the family name"}</div>;
            },
        },


        // {
        //     field: 'DestinationTo',
        //     headerName: 'DestinationTo',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.DestinationTo}</div>;
        //     },
        // },
        // {
        //     field: 'DestinationFrom',
        //     headerName: 'DestinationFrom',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.DestinationFrom}</div>;
        //     },
        // }, {
        //     field: 'NumberOfPasseneger',
        //     headerName: 'Number Of Passeneger',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.NumberOfPasseneger}</div>;
        //     },
        // }, {
        //     field: 'HotelService',
        //     headerName: 'HotelService',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.HotelService ? "yes" : "no"}</div>;
        //     },
        // }, {
        //     field: 'VisaService',
        //     headerName: 'VisaService',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.VisaService ? "yes" : "no"}</div>;
        //     },
        // }, {
        //     field: 'TransportationService',
        //     headerName: 'TransportationService',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.TransportationService ? "yes" : "no"}</div>;
        //     },
        // }, {
        //     field: 'CateringService',
        //     headerName: 'CateringService',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.CateringService ? "yes" : "no"}</div>;
        //     },
        // }, {
        //     field: 'Notes',
        //     headerName: 'Notes',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.Notes}</div>;
        //     },
        // },
        {
            field: 'Date',
            headerName: 'Date',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Date}</div>;
            },
        },


        {
            field: 'Action',
            headerName: 'Action',
            width: 190,
            renderCell: params => {
                return (
                    <>

                        <button
                            variant="primary"
                            className="productListEdit"
                            onClick={() => handleShow(params.row)}
                        >
                            {/* <Button
               
              >
                View
              </Button> */}
                            View
                        </button>
                        

                        <DeleteOutline
                            className="productListDelete"
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
        // {
        //     field: "ADD Panel",
        //     headerName: <button
        //         disabled={false}
        //         className="productListEdit"
        //         onClick={() => {

        //             window.localStorage.setItem('id', '/riders');
        //         }
        //         }
        //     >
        //         < Link to="/addairambulanceservices" style={Stylings}>Add</Link>
        //     </button  >,
        //     width: 200,
        //     //  < Link to="/servicesAdddition" >Add</Link>
        // }
    ];

    return (
        <div className="productList">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h2>Charter Flight</h2>
                </Modal.Header>
                <AirCraftPopup data={modaldata} />
            </Modal>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                rowsPerPageOptions={[15]}
                columns={columns}
                getRowId={row => row._id}
                pageSize={15}
                checkboxSelection
            />
        </div>
    );
}
