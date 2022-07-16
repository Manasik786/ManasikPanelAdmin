import './userList.css';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductList() {
  const [data, setData] = useState([]);
  const getdata = async () => {
    const { data } = await axios.get('/api/v1/applicants');

    setData(data.data);
    console.log(data.data, 'aB');
  };
  useEffect(() => {
    getdata();
  }, []);
  const handleDelete = async _id => {
    // const config = { headers: { "Content-Type": "multipart/form-data"} };

    const { data } = await axios.delete(`/api/v1/applicants/${_id}`, {
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
      field: 'Position',
      headerName: 'Position',
      width: 180,
      renderCell: params => {
        return <div className="productListItem">{params.row.Position}</div>;
      },
    },
    {
      field: 'Photo',
      headerName: 'Photo',
      width: 150,
      renderCell: params => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.images[0].url}
              alt=""
            />
          </div>
        );
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
      field: 'Phone',
      headerName: 'Phone',
      width: 200,
      renderCell: params => {
        return <div className="productListItem">{params.row.Phone}</div>;
      },
    },
    {
      field: 'Email',
      headerName: 'Email',
      width: 150,
      renderCell: params => {
        return <div className="productListItem">{params.row.Email}</div>;
      },
    },
    {
      field: 'Gender',
      headerName: 'Gender',
      width: 150,
      renderCell: params => {
        return <div className="productListItem">{params.row.Gender}</div>;
      },
    },
    {
      field: 'Nationality',
      headerName: 'Nationality',
      width: 160,
      renderCell: params => {
        return <div className="productListItem">{params.row.Nationality}</div>;
      },
    },
    {
      field: 'Cv',
      headerName: 'CV',
      width: 100,
      renderCell: params => {
        return (
          <div className="productListItem">{params.row.Cv[0].public_id}</div>
        );
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
        checkboxSelection
      />
    </div>
  );
}
/***const columns = [
    {
      field: 'id',
      headerName: '#',
      width: 120,
    },
    {
      field: 'name',
      headerName: 'Position',
      width: 200,
      // renderCell: (params) => {
      //   return (
      //     <div className="productListItem">
      //       <img className="productListImg" src={params.row.img} alt="" />
      //       {params.row.name}
      //     </div>
      //   );
      // },
    },
    { field: 'contactNo', headerName: 'Photo', width: 200 },
    {
      field: 'cityName',
      headerName: 'Name',
      width: 100,
    },
    {
      field: 'gender',
      headerName: 'Phone',
      width: 100,
    },
    {
      field: 'driverStatus',
      headerName: 'Email',
      width: 120,
    },
    { field: 'gender', headerName: 'Gender', width: 120 },
    { field: 'nationality', headerName: 'Nationality', width: 150 },
    { field: 'cv', headerName: 'CV', width: 100 },
    { field: 'applied', headerName: 'Applied', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <button
              disabled={false}
              className="productListEdit"
              onClick={() => {
                window.localStorage.setItem('prevRoute', '/riders');
                history.push(`/riders/${params.row.userID}`);
              }}
            >
              View
            </button>
          </>
        );
      },
    },
  ]; */
