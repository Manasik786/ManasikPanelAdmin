import './updateStatus.css';
import { Grid, Button, TextField } from '@mui/material';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { useEffect, useState } from 'react';
import { fetchAllRiders, fetchRiderStatus, updateRider } from '../../data/Data';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ComboBox from '../../components/ComboBox/ComboBox';
import Swal from 'sweetalert2';

export default function RiderUpdateStatus() {
  const [rider, setRider] = useState('');
  const [currentStatus, setCurrentStatus] = useState('');
  const [disableDropdown, setDisableDropdown] = useState(true);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [newStatus, setNewStatus] = useState('');
  const [riderList, setRiderList] = useState([]);

  // get verification status data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    (async () => {
      const allRiders = await fetchAllRiders(); // get all riders
      if (allRiders != undefined) {
        const temp = allRiders.map((rider) => {
          return {
            key: rider.userID,
            label: rider.name ? rider.name + ' ' + rider.contactNo : 'N/A',
            verificationStatus: rider.driverStatus,
          };
        });
        setRiderList(temp);
      }
    })();
  }, []);

  useEffect(() => {
    console.log('Rider:', rider);
    if (rider) {
      setCurrentStatus(rider.verificationStatus);
      (async () => {
        const data = await fetchRiderStatus();
        const x = data.filter((status) => status.status != 'ALL');
        const temp = x.map((status) => {
          return {
            key: status.driverStatusID,
            value: status.status,
          };
        });
        console.log('Rider Statuses: ', temp);
        setDropdownOptions(temp);
      })();
      setDisableDropdown(false);
    }
  }, [rider]);

  useEffect(() => {
    console.log(newStatus);
  }, [newStatus]);

  const handleSubmit = async () => {
    console.log('riderkey:', rider.key);

    const response = await updateRider(
      rider.key,
      newStatus,
      '',
      window.localStorage.getItem('userID'),
    );
    Swal.fire('Success!', 'Rider status updated successfully!', 'success');
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
              items={riderList}
              setValue={setRider}
              label="Select Rider"
            />
          </Grid>
          <Grid item xs={12} sm={12}></Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth={true}
              disabled
              label="Rider Status"
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
              fullWidth
              style={{
                backgroundColor: '#ffba02',
                color: 'black',
                height: '55px',
                borderRadius: '5px',
                // width: '336px',
                // marginTop: '150px',
              }}
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
