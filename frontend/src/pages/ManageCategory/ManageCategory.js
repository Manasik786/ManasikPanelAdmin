import "./managecategory.css";
import { DataGrid } from "@material-ui/data-grid";
import { useEffect, useState } from "react";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios"

export default function UserList() {
  const [data, setData] = useState([]);
  const getdata = async () => {
    const { data } = await axios.get('/api/v1/PackageView');
    setData(data.data);
    console.log(data.data);
  };
  useEffect(() => {

    getdata();
  }, []);
  const handleDelete = async _id => {
    // const config = { headers: { "Content-Type": "multipart/form-data"} };

    const { data } = await axios.delete(`/api/v1/PackageView/${_id}`, {
      params: { id: _id },
    });
    getdata();
    console.log(data);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'id',
      width: 190,
      renderCell: params => {
        return <div className="productListItem">{params.row._id}</div>;
      },
    },

    {
      field: 'Name',
      headerName: 'Name',
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.Name}</div>;
      },
    },


    {
      field: 'EmailAddress',
      headerName: 'EmailAddress',
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.EmailAddress}</div>;
      },
    },
    {
      field: 'DaysOfstay',
      headerName: 'DaysOfstay',
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.DaysOfstay}</div>;
      },
    },
    {
      field: 'EmailAddress',
      headerName: 'EmailAddress',
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.EmailAddress}</div>;
      },
    },
    {
      field: 'PkgDetail',
      headerName: 'PkgDetail',
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.PkgDetail}</div>;
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
              disabled={false}
              className="productListEdit"
              onClick={() => {
                window.localStorage.setItem('id', '/riders');
              }}
            >
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
      <DataGrid
        rows={data}
        rowsPerPageOptions={[8]}
        disableSelectionOnClick
        columns={columns}
        getRowId={row => row._id}
        pageSize={8}
        checkboxSelection
      />

    </div>

  );
}
