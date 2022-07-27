// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
export default function CarrerInquiry() {
    let history = useHistory();
    const Stylings = {
        color: "white",
        textDecoration: "none"
    }
    const EditService = async id => {

        const { data } = await axios.get('/api/v1/CareerInquiry');
        console.log(data.data[0]._id)
        for (let i = 0; i < data.data.length; i++) {
            console.log(data.data[i])
            if (id == data.data[i]._id) {
                console.log(data.data[i])
                await window.localStorage.setItem("CareerInquiry", JSON.stringify(data.data[i]))

                history.push("/editCareerInquiry")

            }



        }
    }
    const [data, setData] = useState([]);
    const getdata = async () => {
        const { data } = await axios.get('/api/v1/CareerInquiry');
        setData(data.data);
        console.log(data)

    };
    useEffect(() => {

        getdata();
    }, []);
    const handleDelete = async _id => {


        const { data } = await axios.delete(`/api/v1/CareerInquiry/${_id}`, {
            params: { id: _id },
        });
        getdata();
        console.log(data);
    };

    const columns = [
        {
            field: 'Designation',
            headerName: 'Designation',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Designation}</div>;
            },
        },
        {
            field: 'Designation ar',
            headerName: 'Designation (Arabic)',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Designationar}</div>;
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
            headerName: 'Description (Arabic)',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Descriptionar}</div>;
            },
        },
        {
            field: 'Dept',
            headerName: 'Dept',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Dept}</div>;
            },
        },
        {
            field: 'Dept ar',
            headerName: 'Dept (Arabic)',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Deptar}</div>;
            },
        },
        {
            field: 'Valid',
            headerName: 'Valid',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Valid}</div>;
            },
        },
        {
            field: 'Location',
            headerName: 'Location',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Location}</div>;
            },
        },
        {
            field: 'Location ar',
            headerName: 'Location (Arabic)',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Locationar}</div>;
            },
        },

        {
            field: 'flag',
            headerName: 'flag',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.flag ? "YES" : "NO"}</div>;
            },
        },
        {
            field: 'Type',
            headerName: 'Type',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Type}</div>;
            },
        },
        {
            field: 'Type ar',
            headerName: 'Type (Arabic)',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Typear}</div>;
            },
        },
        {
            field: 'Type',
            headerName: 'Type',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.Type}</div>;
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
                < Link to="/addCareerInquiry" style={Stylings}>Add</Link>
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
