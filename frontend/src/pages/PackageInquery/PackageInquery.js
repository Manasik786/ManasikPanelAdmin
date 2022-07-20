import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
    const [data, setData] = useState([]);
    // const [remove, setRemove] = useState([]);
 
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/PackageView`);
      setData(data.data);
      console.log("Response",data)
      console.log("Data is",data)
    };
    getdata();
  }, []);

  const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
    console.log(data);
  };

  const columns = [
    {
      field: "Name",
      headerName: "Name",
      width: 120,
      rendercell: (params) => {
        return <div className="productListItem">{params.row.Name}</div>;
      },
    },

    {
      field: "EmailAddress",
      headerName: "EmailAddress",
      width: 160,
      rendercell: (params) => {
        return (
          <div className="productListItem">
            {params.row.EmailAddress}
          </div>
        );
      },
    },
    {
        field: "PkgName",
        headerName: "PkgName",
        width: 160,
        rendercell: (params) => {
          return (
            <div className="productListItem">
              {params.row.PkgName}
            </div>
          );
        },
      },
      {
        field: "DaysOfstay",
        headerName: "DaysOfstay",
        width: 160,
        rendercell: (params) => {
          return (
            <div className="productListItem">
              {params.row.DaysOfstay}
            </div>
          );
        },
      },
      {
        field: "PkgDetail",
        headerName: "PkgDetail",
        width: 160,
        rendercell: (params) => {
          return (
            <div className="productListItem">
              {params.row.PkgDetail}
            </div>
          );
        },
      },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/editPackage/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
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
        <h2>Packages Inqueries</h2>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8} 
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}