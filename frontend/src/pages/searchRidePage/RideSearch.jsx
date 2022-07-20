import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {searchRide } from '../../data/Data';
import Swal from 'sweetalert2';
import { Divider, Grid, TextField, Typography, Button } from '@mui/material';

export default function ViewRides() {
  const history = useHistory();
  const [search, setSearch] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  // get verification status data
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    (async () => {
      try {
        const data = await searchRide();

        setSearch(
          data.map((item) => ({
            ...item,
            id: item.userID,
            City:item.cityName,
          
          })),
        );

        setShowLoading(false);
      } catch (e) {
        console.log(e);
        Swal.fire('Error!', 'There was some issue fetching the data', 'error');
      }
    })();
  }, []);
console.log("Data is",searchRide)
  const handleDelete = (id) => {
    setSearch(search.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: 'name',
      headerName: 'Name',
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
    // { field: 'destinationName', headerName: 'Ride Destination', width: 150 },
    // {
    //   field: 'offeredFare',
    //   headerName: 'Fare',
    //   width: 120,
    // },
    // {
    //   field: 'rideRequestTime',
    //   headerName: 'Time',
    //   width: 150,
    // },
    // {
    //   field: 'customerName',
    //   headerName: 'Customer',
    //   width: 200,
    // },

    // { field: 'rideStatus', headerName: 'Status', width: 200 },
    // { field: 'city', headerName: 'City', width: 200 },
    // { field: 'serviceType', headerName: 'Ride Type', width: 200 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button
              disabled={false}
              style={{
                width: '100%',
              }}
              className="productListEdit"
              onClick={() => {
                // window.localStorage.setItem('prevRoute', '/verification');
                history.push(`/viewRides/${params.row.rideID}`);
              }}
            >
              View
            </button>

            {/* <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: '#ffba02', marginTop: '15px' }}
      >
        Search Rides
      </Typography>
      <Divider style={{ marginBottom: '15px' }} />
      <Grid container spacing={1} direction="row" justifyContent="center">

      <Grid item xs={4}>
            <TextField
              style={{ width: '500px' }}
              label="Search Ride"
              // type="number"
              // value={formValues.perMin}
              // onChange={(event) => {
              //   setFormValues({ ...formValues, perMin: event.target.value });
              // }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button
              style={{
                backgroundColor: '#ffba02',
                color: 'black',
                height: '55px',
                borderRadius: '5px',
              }}
              variant="contained"
            
            >
              Search
            </Button>
          </Grid>
          </Grid>
         
          <Divider style={{ marginBottom: '30px' , marginTop: '15px' }} />
      <DataGrid
        style={{ height: '500px' }}
        rows={search}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
         rowsPerPageOptions={[15]}
        loading={showLoading}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
