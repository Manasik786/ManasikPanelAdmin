// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { Link, useHistory } from 'react-router-dom';
export default function Gallery() {
    let history = useHistory();
    const Stylings = {
        color: "white",
        textDecoration: "none"
    }
    const EditService = async id => {

        const { data } = await axios.get('/api/v1/GalleryItems');
        console.log(data.data[0]._id)
        for (let i = 0; i < data.data.length; i++) {
            console.log(data.data[i])
            if (id == data.data[i]._id) {
                console.log(data.data[i])
                await window.localStorage.setItem("Gallery", JSON.stringify(data.data[i]))

                history.push("/editgalleryservices")

            }



        }
    }
    const [data, setData] = useState([]);
    const getdata = async () => {
        const { data } = await axios.get('/api/v1/GalleryItems');

        setData(data.data);

    };
    useEffect(() => {

        getdata();
    }, []);
    const handleDelete = async _id => {


        const { data } = await axios.delete(`/api/v1/GalleryItems/${_id}`, {
            params: { id: _id },
        });
        Swal.fire("Deleted!", '', 'error');
        getdata();
        console.log(data);
    };

    const columns = [

        {
            field: 'Title',
            headerName: 'Title',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.CardType}</div>;
            },
        },
        {
            field: 'Titlear',
            headerName: 'Title(Araabic)',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.CardTypear}</div>;
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
            field: 'Descriptionar',
            headerName: 'Description(Arabic)',
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
                < Link to="/addgalleryservices" style={Stylings}>Add</Link>
            </button  >,
            width: 200,
            //  < Link to="/servicesAdddition" >Add</Link>
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
