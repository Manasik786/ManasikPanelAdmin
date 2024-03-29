// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { Link, useHistory } from 'react-router-dom';
export default function Slider() {
    let history = useHistory();
    const Stylings = {
        color: "white",
        textDecoration: "none"
    }
    const EditService = async id => {

        const { data } = await axios.get('/api/v1/slider');
     
        for (let i = 0; i < data.items.length; i++) {
            console.log(data.items[i])
            if (id == data.items[i]._id) {
                console.log(data.items[i])
                await window.localStorage.setItem("D", JSON.stringify(data.items[i]))

                history.push("/editslider")

            }



        }
    }
    const [data, setData] = useState([]);
    const getdata = async () => {
        const { data } = await axios.get('/api/v1/slider');

        console.log(data.items)
        setData(data.items);

    };
    useEffect(() => {

        getdata();
    }, []);
    const handleDelete = async _id => {


        const { data } = await axios.delete(`/api/v1/slider/${_id}`, {
            params: { id: _id },
        });
        Swal.fire("Deleted!", '', 'error');
        getdata();
        console.log(data);
    };

    const columns = [
      

        {
            field: 'title ',
            headerName: 'Title',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.title}</div>;
            },
        },
        {
            field: 'titlear',
            headerName: 'Title Arabic',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.titlear}</div>;
            },
        },

        {
            field: 'Description',
            headerName: 'Description',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Description}</div>;
            },
        },
        {
            field: 'Description ar',
            headerName: 'Description arabic',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Descriptionar}</div>;
            },
        },
        {
            field: 'images',
            headerName: 'Image',
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
                < Link to="/sliderAdddition" style={Stylings}>Add</Link>
            </button  >,
            width: 200,

        }
    ];

    return (
        <div className="productList">
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
