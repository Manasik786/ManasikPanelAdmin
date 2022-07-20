import "./managepackages.css";
import { DataGrid } from "@material-ui/data-grid";
import { useEffect, useState } from "react";
import { DeleteOutline } from "@material-ui/icons";
import axios from "axios"

export default function UserList() {
  const [data, setData] = useState([]);
  //http://localhost:4000/api/v1/Category/:id
  const getdata = async () => {
    const { data } = await axios.get('/api/v1/Category');
    setData(data.data);
    console.log(data.data);
  };
  useEffect(() => {

    getdata();
  }, []);
  const handleDelete = async _id => {
    // const config = { headers: { "Content-Type": "multipart/form-data"} };

    const { data } = await axios.delete(`/api/v1/Category/${_id}`, {
      params: { id: _id },
    });
    getdata();
    console.log(data);
  };


  const columns = [
    {
      field: 'id',
      headerName: 'id',
      width: 120,
      renderCell: params => {
        return <div className="productListItem">{params.row._id}</div>;
      },
    },

    {
      field: 'title',
      headerName: 'title',
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.title}</div>;
      },
    },


    {
      field: 'Category',
      headerName: 'Category',
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.Category}</div>;
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
        disableSelectionOnClick
        columns={columns}
        getRowId={row => row._id}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}
