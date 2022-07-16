import './updateStatus.css';
import { Grid, Button, TextField } from '@mui/material';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { useEffect, useState } from 'react';
import {
  fetchAllVehicles,
  fetchVehiclesStatus,
  updateVehicle,
  rideServiceType
} from '../../data/Data';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ComboBox from '../../components/ComboBox/ComboBox';
import Swal from 'sweetalert2';

export default function UpdateStatus() {
  const [vehicle, setVehicle] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');
  const [disableDropdown, setDisableDropdown] = useState(true);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [newStatus, setNewStatus] = useState('');
  const [vehicleList, setVehicleList] = useState([1,2,3,4]);
  const [serviceType, setserviceType] = useState([]);

  // get verification status data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //   (async () => {
  //     const allVehicles = await fetchAllVehicles(); // get all vehicles

  //     if (allVehicles != undefined) {
  //       const temp = allVehicles.map((vehicle) => {
  //         return {
  //           key: vehicle.vehicleID,
  //           label: vehicle.vehicleName
  //             ? vehicle.registrationNumber + ', ' + vehicle.driverName
  //             : 'N/A',
  //           verificationStatus: vehicle.vehicleStatus,
  //         };
  //       });
  //       setVehicleList(temp);
  //     }
  //   })();
  // }, []);

  //new code added rideServiceType


  // useEffect(() => {
  //   (async () => {
  //     const allService = await rideServiceType(); // get all rideServiceType

  //     if(allService  != undefined){
  //       const temp = allService.rideServiceType.map((vehicle) => {
  //         return {
  //           key: vehicle.id,
           
  //           displayName: vehicle.displayName,
  //         };
  //       });
  //       setserviceType(temp);
  //     }

  //   })();
  // }, []);
  useEffect(() => {
    console.log('vehicle', vehicle);
    if (vehicle) {
      setCurrentStatus(vehicle.verificationStatus);
      (async () => {
        const data = await fetchVehiclesStatus();
        const x = data.filter((status) => status.status != 'ALL');
        const temp = x.map((status) => {
          return {
            key: status.vehicleStatusID,
            value: status.status,
          };
        });
        console.log('Vehicle Statuses: ', temp);
        setDropdownOptions(temp);
      })();
      setDisableDropdown(false);
    }
  }, [vehicle]);

  useEffect(() => {
    console.log(newStatus);
  }, [newStatus]);

  const handleSubmit = async () => {
    const response = await updateVehicle(
      vehicle.key,
      newStatus,
      '',
      window.localStorage.getItem('userID'),
    );
    Swal.fire('Success!', 'Vehicle status updated successfully!', 'success');
    setCurrentStatus(
      dropdownOptions.find((option) => option.key === newStatus).value,
    );
  };

  return (
    <div className="productList">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: '#ffba02', marginTop: '15px' }}
      >
        Update Status
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
              setValue={setVehicle}
              label="Ride Service Type ID"
            />
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={4}>
            <ComboBox
              items={serviceType}
              setValue={setserviceType}
              label="Enter Vehicle"
            />
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={4}>
            <TextField
              disabled
              fullWidth={true}
              label="Vehicle Status"
              style={{ fontSize: '10px' }}
              value={currentStatus}
            />
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={4}>
            <Dropdown
              label="Verification Status"
              items={dropdownOptions}
              setOption={setNewStatus}
              isDisabled={disableDropdown}
            />
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={4}>
            <Button
              style={{
                backgroundColor: '#ffba02',
                color: 'black',
                height: '55px',
                borderRadius: '5px',
              }}
              fullWidth={true}
              variant="contained"
              onClick={handleSubmit}
              disabled={newStatus === '' ? true : false}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
