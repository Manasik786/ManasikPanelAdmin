// import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
export default function Contact() {
    let history = useHistory();
    const Stylings = {
        color: "white",
        textDecoration: "none"
    }
    const EditService = async id => {

        const { data } = await axios.get('/api/v1/Contact');
        console.log(data.data[0]._id)
        for (let i = 0; i < data.data.length; i++) {
            console.log(data.data[i])
            if (id == data.data[i]._id) {
                console.log(data.data[i])
                await window.localStorage.setItem("contact", JSON.stringify(data.data[i]))

                history.push("/editcontact")

            }



        }
    }
    const [data, setData] = useState([]);
    const getdata = async () => {
        const { data } = await axios.get('/api/v1/Contact');
        setData(data.data);
        console.log(data)

    };
    useEffect(() => {

        getdata();
    }, []);
    const handleDelete = async _id => {


        const { data } = await axios.delete(`/api/v1/Contact/${_id}`, {
            params: { id: _id },
        });
        getdata();
        console.log(data);
    };

    const columns = [
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.email}</div>;
            },
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.phone}</div>;
            },
        },
        {
            field: 'location',
            headerName: 'Location',
            width: 200,
            renderCell: params => {
                return <div className="productListItem">{params.row.location}</div>;
            },
        },
         //  {
        //     field: 'flag',
        //     headerName: 'flag',
        //     width: 200,
        //     renderCell: params => {
        //         return <div className="productListItem">{params.row.flag ? "YES" : "NO"}</div>;
        //     },
        // },

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
        // {
        //     field: "ADD Panel",
        //     headerName: <button
        //         disabled={false}
        //         className="productListEdit"
        //         onClick={() => {

        //             window.localStorage.setItem('id', '/riders');
        //         }
        //         }
        //     >
        //         < Link to="/addairambulanceservices" style={Stylings}>Add</Link>
        //     </button  >,
        //     width: 200,
        //     //  < Link to="/servicesAdddition" >Add</Link>
        // }
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
