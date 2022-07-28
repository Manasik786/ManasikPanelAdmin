import "./managepackages.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function PackagesManagement() {
  let history = useHistory();
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
      headerName: "EmailAddress",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.EmailAddress}</div>;
      },
    },
    {
      field: "PkgName",
      headerName: "PkgName",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.PkgName}</div>;
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
      field: "DaysOfstay",
      headerName: "DaysOfstay",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.DaysOfstay}</div>;
      },
    },
    {
      field: "PkgDetail",
      headerName: "PkgDetail",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.PkgDetail}</div>;
      },
    },
    {
      field: "ValidTill",
      headerName: "ValidTill",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.ValidTill}</div>;
      },
    },
    {
      field: "Namear",
      headerName: "Name(Arabic)",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.Namear}</div>;
      },
    },
    {
      field: "EmailAddressar",
      headerName: "EmailAddress(Arabic)",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">{params.row.EmailAddressar}</div>
        );
      },
    },
    {
      field: "PkgNamear",
      headerName: "PkgName(Arabic)",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.PkgNamear}</div>;
      },
    },
    {
      field: "PkgDetailar",
      headerName: "PkgDetail(Arabic)",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.PkgDetailar}</div>;
      },
    },
    {
      field: "ValidTillar",
      headerName: "ValidTill(Arabic)",
      width: 200,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.ValidTillar}</div>;
      },
    },

    {
      field: "Action",
      headerName: "Action",
      width: 190,
      renderCell: (params) => {
        return (
          <>
            <button
              className="productListEdit"
              onClick={() => EditService(params.row._id)}
            >
              edit
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
      headerName: (
        <button
          disabled={false}
          className="productListEdit"
          onClick={() => {
            window.localStorage.setItem("id", "/riders");
          }}
        >
          <Link to="/addPackages" style={Stylings}>
            Add
          </Link>
        </button>
      ),
      width: 200,
      //  < Link to="/servicesAdddition" >Add</Link>
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        rowsPerPageOptions={[15]}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={15}
        checkboxSelection
      />
    </div>
  );
}
