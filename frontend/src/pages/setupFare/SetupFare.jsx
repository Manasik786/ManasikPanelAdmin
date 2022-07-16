import React, { useState, useEffect } from 'react';
import './setupFare.css';
import { Divider, Grid, TextField, Typography, Button } from '@mui/material';
import Swal from 'sweetalert2';
import { fetchFare, updateFare } from '../../data/Data';
import ComboBox from '../../components/ComboBox/ComboBox';

const SetupFare = () => {
  const [vehicleList, setVehicleList] = useState([1,2,3,4]);

  const [formValues, setFormValues] = useState({
    perKMs: '',
    perMin: '',
    comissionPercentage: '',
    baseFare: '',
  });

  useEffect(() => {
    (async () => {
      const data = await fetchFare();
      setFormValues(data);
    })();
  }, []);

  return (
    <div className="productList">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: '#ffba02', marginTop: '15px' }}
      >
        Setup Fare
      </Typography>
      <Divider style={{ marginBottom: '15px' }} />
      <div
        style={{
          display: 'flex',
          height: '57px',
          marginBottom: '15px',
          marginTop: '15px',
        }}
      >
        <Grid container spacing={1} direction="row" justifyContent="center">
        <Grid item xs={4}>
            <ComboBox
              items={vehicleList}
              // setValue={setVehicle}
              label="Ride Service Type ID"
            />
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={4}>
            <TextField
              style={{ width: '300px' }}
              label="Per Kilo Meter"
              value={formValues.perKMs}
              onChange={(event) => {
                setFormValues({ ...formValues, perKMs: event.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={4}>
            <TextField
              style={{ width: '300px' }}
              label="Per Minute"
              value={formValues.perMin}
              onChange={(event) => {
                setFormValues({ ...formValues, perMin: event.target.value });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={4}>
            <TextField
              style={{ width: '300px' }}
              label="Commission Percentage"
              value={formValues.comissionPercentage}
              onChange={(event) => {
                setFormValues({
                  ...formValues,
                  comissionPercentage: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={4}>
            <TextField
              style={{ width: '300px' }}
              label="Base Fare"
              value={formValues.baseFare}
              onChange={(event) => {
                setFormValues({
                  ...formValues,
                  baseFare: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={4}>
            <Button
              style={{
                backgroundColor: '#ffba02',
                color: 'black',
                height: '55px',
                width: '300px',
                borderRadius: '5px',
              }}
              variant="contained"
              onClick={async () =>
                Swal.fire({
                  title: 'Do you want to save the changes?',
                  showCancelButton: true,
                  confirmButtonText: 'Save',
                  denyButtonText: `Don't save`,
                }).then(async (result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                    try {
                      const response = await updateFare(
                        formValues.perKMs,
                        formValues.perMin,
                        formValues.comissionPercentage,
                        formValues.baseFare,
                        window.localStorage.getItem('userID'),
                      );
                      Swal.fire('Saved!', '', 'success');
                    } catch (error) {
                      Swal.fire('Error!', '', 'error');
                    }
                  }
                })
              }
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SetupFare;
