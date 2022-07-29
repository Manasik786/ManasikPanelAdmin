// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from '../../components/Modal/Popup'


export default function UserList() {
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
    textDecoration: "none"
  }
  const EditService = async id => {

    const { data } = await axios.get('/api/v1/CardItems');
    console.log(data.data[0]._id)
    for (let i = 0; i < data.data.length; i++) {
      console.log(data.data[i])
      if (id == data.data[i]._id) {
        console.log(data.data[i])
        await window.localStorage.setItem("D", JSON.stringify(data.data[i]))

        history.push("/editservice")

      }



    }
  }


  const ViewService = async id => {

    const { data } = await axios.get('/api/v1/CardItems');
    console.log(data.data[0]._id)
    for (let i = 0; i < data.data.length; i++) {
      console.log(data.data[i])
      if (id == data.data[i]._id) {
        console.log(data.data[i])
        await window.localStorage.setItem("D", JSON.stringify(data.data[i]))



      }



    }
  }
  const [data, setData] = useState([]);
  const getdata = async () => {
    const { data } = await axios.get('/api/v1/CardItems');
    let abcd = [];
    for (let i = 0; i < data.data.length; i++) {

      if ((data.data[i].CardType) == 'service') {
        abcd.unshift(data.data[i])

      }
    }

    setData(abcd);
    console.log(data)

  };
  useEffect(() => {

    getdata();
  }, []);
  const handleDelete = async _id => {


    const { data } = await axios.delete(`/api/v1/CardItems/${_id}`, {
      params: { id: _id },
    });
    getdata();
    console.log(data);
  };

  const columns = [
    // {
    //   field: 'id',
    //   headerName: 'id',
    //   width: 120,
    //   renderCell: params => {
    //     return <div className="productListItem">{params.row._id}</div>;
    //   },
    // },

    {
      field: 'title ar',
      headerName: 'title',
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.CardTitle}</div>;
      },
    },
    {
      field: 'title',
      headerName: 'title arabic',
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.CardTitlear}</div>;
      },
    },

    {
      field: 'Description',
      headerName: 'Description',
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.CardDescriptions}</div>;
      },
    },
    {
      field: 'Description ar',
      headerName: 'Description arabic',
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.CardDescriptionsar}</div>;
      },
    },
    {
      field: 'images',
      headerName: 'image',
      width: 200,
      renderCell: params => {
        return <div className="productListItem ">
          <img src={params.row.images[0].url} className="admin-img"  ></img>
        </div>;
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
    {
      field: "ADD Panel",
      headerName: <button
        disabled={false}
        className="productListEdit"
        onClick={() => {
          window.localStorage.setItem('id', '/riders');
        }
        }
      >
        < Link to="/servicesAdddition" style={Stylings}>Add</Link>
      </button  >,
      width: 200,
      //  < Link to="/servicesAdddition" >Add</Link>
    }
  ];

  return (
    <div className="productList">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Popup data={modaldata} />
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