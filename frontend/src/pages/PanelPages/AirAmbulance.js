// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Swal from 'sweetalert2';

import PopupAirAmbulance from "./PopupAirAmbulance";
export default function Ambulance() {
  let history = useHistory();

  const [show, setShow] = useState(false);
  const [modaldata, setmodaldata] = useState()
  const handleClose = () => setShow(false);
  const handleShow = async (data) => {
    setmodaldata(data)
    await setShow(true)
  };
  const Stylings = {
    color: "white",
    textDecoration: "none",
  };
  const EditService = async (id) => {
    const { data } = await axios.get("/api/v1/AirAmbulance");
    console.log(data.data[0]._id);
    for (let i = 0; i < data.data.length; i++) {
      console.log(data.data[i]);
      if (id == data.data[i]._id) {
        console.log(data.data[i]);
        await window.localStorage.setItem("Ambulance", JSON.stringify(data.data[i]));
        history.push("/editairambulanceservices");

      }
    }
  };
  const [data, setData] = useState([]);
  const getdata = async () => {
    const { data } = await axios.get("/api/v1/AirAmbulance");
    setData(data.data);
    console.log(data);
  };
  useEffect(() => {
    getdata();
  }, []);
  const handleDelete = async (_id) => {
    const { data } = await axios.delete(`/api/v1/AirAmbulance/${_id}`, {
      params: { id: _id },
    });
    Swal.fire("Deleted!", '', 'error');
    getdata();
    console.log(data);
  };

  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 120,
      renderCell: (params) => {
        return <div className="productListItem">{params.row._id}</div>;
      },
    },

    {
      field: "title",
      headerName: "title",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.CardDetail}</div>;
      },
    },
    {
      field: "title",
      headerName: "title(Ar)",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.CardDetailar}</div>;
      },
    },

    {
      field: "Description",
      headerName: "Description",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">{params.row.CardDescriptions}</div>
        );
      },
    },
    {
      field: "Description AR",
      headerName: "Description(AR)",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">{params.row.CardDescriptionsar}</div>
        );
      },
    },

    {
      field: "images",
      headerName: "image",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem ">
            <img src={params.row.images[0].url} className="admin-img"></img>
          </div>
        );
      },
    },

    {
      field: "Action",
      headerName: "Action",
      width: 190,
      renderCell: params => {
        return (
          <>
            <button
              className="productListEdit"
              onClick={() => EditService(params.row._id)}
            >

              edit
            </button >

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

  ];

  return (
    <div className="productList">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h2>Air Ambulance</h2>
        </Modal.Header>
        <PopupAirAmbulance data={modaldata} />
      </Modal>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        rowsPerPageOptions={[15]}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={15}
        checkboxSelection
      />
      <Link to="/addairambulanceservices" style={Stylings} className="float">
        <i class="fa fa-plus my-float"></i>
      </Link>
    </div>
  );
}
