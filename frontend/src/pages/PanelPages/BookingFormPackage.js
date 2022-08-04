// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import PopupBooking from "./PopupBooking";
import Swal from 'sweetalert2';

export default function BookingFormPackage() {
    let history = useHistory();
    const Stylings = {
        color: "white",
        textDecoration: "none"
    }
    const [show, setShow] = useState(false);
    const [modaldata, setmodaldata] = useState()
    const handleClose = () => setShow(false);
    const handleShow = async (data) => {
        setmodaldata(data)
        await setShow(true)
    };
    const [data, setData] = useState([]);
    const getdata = async () => {
        const { data } = await axios.get('/api/v1/BookingForm');
        let abcd = [];
        for (let i = 0; i < data.data.length; i++) {

            if ((data.data[i].CardType) == 'packages') {
                abcd.unshift(data.data[i])

            }
        }

        setData(abcd);
    };
    useEffect(() => {

        getdata();
    }, []);
    const handleDelete = async _id => {


        const { data } = await axios.delete(`/api/v1/BookingForm/${_id}`, {
            params: { id: _id },
        });
        Swal.fire("Deleted!", '', 'error');
        getdata();
        console.log(data);
    };

    const columns = [
           // {
        //     field: 'stayperiod',
        //     headerName: 'stayperiod',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.stayperiod ? params.row.stayperiod : "not given"}</div>;
        //     },
        // },
        // {
        //     field: 'Servicetype',
        //     headerName: 'Servicetype',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.Servicetype ? params.row.Servicetype : "not given"}</div>;
        //     },
        // },
        {
            field: 'upload',
            headerName: 'image',
            width: 200,
            renderCell: params => {
                return <div className="productListItem ">
                    <img src={params.row.upload[0].url} className="admin-img"  ></img>
                </div>;
            },
        },
        {
            field: 'Name',
            headerName: 'Name',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Name ? params.row.Name : "not given"}</div>;
            },
        },
          // {
        //     field: ' familyname',
        //     headerName: ' familyname',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.familyname ? params.row.familyname : "not given"}</div>;
        //     },
        // },
        {
            field: 'Email',
            headerName: 'Email',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Email ? params.row.Email : "not given"}</div>;
            },
        },
        {
            field: 'country',
            headerName: 'Country',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.country ? params.row.country : "not given"}</div>;
            },
        },
        {
            field: 'Phone',
            headerName: 'Phone',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Phone ? params.row.Phone : "not given"}</div>;
            },
        },
          //   {
        //     field: 'passportno',
        //     headerName: 'passportno',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.passportno ? params.row.passportno : "not given"}</div>;
        //     },
        // },
        // {
        //     field: 'nationalid',
        //     headerName: 'nationalid',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.nationalid ? params.row.nationalid : "not given"}</div>;
        //     },
        // },
        // {
        //     field: 'Visitedbefore',
        //     headerName: 'Visitedbefore',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.Visitedbefore ? "yes" : "not given"}</div>;
        //     },
        // },
            // {
        //     field: 'relativecontact',
        //     headerName: 'relativecontact',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.relativecontact ? params.row.relativecontact : "not given"}</div>;
        //     },
        // },
        // {
        //     field: 'Reasontovisitksa',
        //     headerName: 'Reasontovisitksa',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.Reasontovisitksa ? params.row.Reasontovisitksa : "not given"}</div>;
        //     },
        // },
        // {
        //     field: 'Religion',
        //     headerName: 'Religion',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.Religion ? params.row.Religion : "not given"}</div>;
        //     },
        // },


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
        //         < Link to="/addBookingFormservices" style={Stylings}>Add</Link>
        //     </button  >,
        //     width: 200,
        //     //  < Link to="/servicesAdddition" >Add</Link>
        // }
    ];

    return (
        <div className="productList">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <h2>Package Inquery</h2>
                </Modal.Header>
                <PopupBooking data={modaldata} />
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
