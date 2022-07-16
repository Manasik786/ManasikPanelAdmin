import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
    const [data, setData] = useState([]);
    const [remove, setRemove] = useState([]);
 
  useEffect(() => {
    const getdata = async () => {
      const { data } = await axios.get(`/api/v1/slider`);
      setData(data.items);
      console.log("Response",data)
      console.log("Data is",data.items)
    };
    getdata();
  }, []);

//   useEffect(() => {
//     const getdata = async () => {
//       const { data } = await axios.get(`/api/v1/slider/`+id);
//       setData(data.items);
//       console.log("Response",data)
//       console.log("Data is",data.items)
//     };
//     getdata();
//   }, []);
  const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
    console.log(data);
  };

  const columns = [
    {
      field: "titleEnglish",
      headerName: "titleEnglish",
      width: 120,
      rendercell: (params) => {
        return <div className="productListItem">{params.row.titleEnglish}</div>;
      },
    },

    {
      field: "titleArabic",
      headerName: "titleArabic",
      width: 160,
      rendercell: (params) => {
        return (
          <div className="productListItem">
            {params.row.titleArabic}
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
            <Link to={"/editSlider/" + params.row._id}>
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
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}