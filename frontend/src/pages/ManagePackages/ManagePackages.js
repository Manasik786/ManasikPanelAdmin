import "./managepackages.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Popup from '../../components/Modal/Popup'
import PopupPackage from "../PanelPages/PopupPackage";
import AddIcon from '@mui/icons-material/Add';

export default function PackagesManagement() {
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
    const { data } = await axios.get("/api/v1/PackageView");
    console.log(data.data[0]._id);
    for (let i = 0; i < data.data.length; i++) {
      console.log(data.data[i]);
      if (id == data.data[i]._id) {
        console.log(data.data[i]);
        await window.localStorage.setItem(
          "Package",
          JSON.stringify(data.data[i])
        );

        history.push("/editpackages");
      }
    }
  };
  const [data, setData] = useState([]);
  const getdata = async () => {
    const { data } = await axios.get("/api/v1/PackageView");
    setData(data.data);
    console.log(data);
  };
  useEffect(() => {
    getdata();
  }, []);
  const handleDelete = async (_id) => {
    const { data } = await axios.delete(`/api/v1/PackageView/${_id}`, {
      params: { id: _id },
    });
    getdata();
    console.log(data);
  };

  const columns = [
    {
      field: "Name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.Name}</div>;
      },
    },
    {
      field: "EmailAddress",
      headerName: "Email Address",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.EmailAddress}</div>;
      },
    },
    {
      field: "PkgName",
      headerName: "Package Name",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.PkgName}</div>;
      },
    },
    // {
    //   field: 'images',
    //   headerName: 'image',
    //   width: 200,
    //   renderCell: params => {
    //     return <div className="productListItem ">
    //       <img src={params.row.images[0].url} className="admin-img"  ></img>
    //     </div>;
    //   },
    // },
    // {
    //   field: "DaysOfstay",
    //   headerName: "DaysOfstay",
    //   width: 200,
    //   renderCell: (params) => {
    //     return <div className="productListItem">{params.row.DaysOfstay}</div>;
    //   },
    // },
    // {
    //   field: "PkgDetail",
    //   headerName: "PkgDetail",
    //   width: 200,
    //   renderCell: (params) => {
    //     return <div className="productListItem">{params.row.PkgDetail}</div>;
    //   },
    // },
    // {
    //   field: "ValidTill",
    //   headerName: "ValidTill",
    //   width: 200,
    //   renderCell: (params) => {
    //     return <div className="productListItem">{params.row.ValidTill}</div>;
    //   },
    // },
    // {
    //   field: "Namear",
    //   headerName: "Name(Arabic)",
    //   width: 200,
    //   renderCell: (params) => {
    //     return <div className="productListItem">{params.row.Namear}</div>;
    //   },
    // },
    // {
    //   field: "EmailAddressar",
    //   headerName: "EmailAddress(Arabic)",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="productListItem">{params.row.EmailAddressar}</div>
    //     );
    //   },
    // },
    // {
    //   field: "PkgNamear",
    //   headerName: "PkgName(Arabic)",
    //   width: 200,
    //   renderCell: (params) => {
    //     return <div className="productListItem">{params.row.PkgNamear}</div>;
    //   },
    // },
    // {
    //   field: "PkgDetailar",
    //   headerName: "PkgDetail(Arabic)",
    //   width: 200,
    //   renderCell: (params) => {
    //     return <div className="productListItem">{params.row.PkgDetailar}</div>;
    //   },
    // },
    // {
    //   field: "ValidTillar",
    //   headerName: "ValidTill(Arabic)",
    //   width: 200,
    //   renderCell: (params) => {
    //     return <div className="productListItem">{params.row.ValidTillar}</div>;
    //   },
    // },

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
        <Modal.Header closeButton>Manage Packages</Modal.Header>
        <PopupPackage data={modaldata} />
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
      <Link to="/addPackages" style={Stylings} className="float">
        <i class="fa fa-plus my-float"></i>
      </Link>
    </div>
  );
}
