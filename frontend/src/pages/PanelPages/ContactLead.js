// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Poppup from "./PopupContact";
import Swal from "sweetalert2";

import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
export default function Contactlead() {
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
    const EditService = async id => {

        const { data } = await axios.get('/api/v1/ContactLead');
        console.log(data.data[0]._id)
        for (let i = 0; i < data.data.length; i++) {
            console.log(data.data[i])
            if (id == data.data[i]._id) {
                console.log(data.data[i])
                await window.localStorage.setItem("Ambulance", JSON.stringify(data.data[i]))

                history.push("/editairambulanceservices")

            }



        }
    }
    const [data, setData] = useState([]);
    const getdata = async () => {
        const { data } = await axios.get('/api/v1/ContactLead');
        setData(data.data);
        console.log(data)

    };
    useEffect(() => {

        getdata();
    }, []);
    const handleDelete = async _id => {


        const { data } = await axios.delete(`/api/v1/ContactLead/${_id}`, {
            params: { id: _id },
        });
        Swal.fire("Deleted!", '', 'error');
        getdata();
        console.log(data);
    };

    const columns = [
        {
            field: 'Name',
            headerName: 'Name',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Name}</div>;
            },
        },

        {
            field: 'Email',
            headerName: 'Email',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Email}</div>;
            },
        }, {
            field: 'Message',
            headerName: 'Message',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Message}</div>;
            },
        },
        //  {
        //     field: 'flag',
        //     headerName: 'flag',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.flag ? "YES" : "NO"}</div>;
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
        //         {/* < Link to="/addairambulanceservices" style={Stylings}>Add</Link> */}
        //     </button  >,
        //     width: 200,
        //     //  < Link to="/servicesAdddition" >Add</Link>
        // }
    ];

    return (
        <div className="productList">
             <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
           <h2> Contact Leads</h2>
        </Modal.Header>
        <Poppup data={modaldata} />
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
