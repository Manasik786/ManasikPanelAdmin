import './productList.css';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { useEffect, useState } from 'react';
import { fetchAllVehicles, fetchVehiclesStatus } from '../../data/Data';
import { Button } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Swal from 'sweetalert2';

export default function ProductList() {
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);
  const [dropdownData, setDropdownData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  const noRowsOverlay = () => {
    return (
      <div style={{ textAlign: 'center', marginTop: '10rem' }}>
        <Typography style={{ color: '	#A9A9A9' }} variant="h6">
          Please select Verification Status
        </Typography>
      </div>
    );
  };

  // get verification status data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const response = await fetchVehiclesStatus();
      const temp = response.map((item) => ({
        value: item.status,
        key: item.vehicleStatusID,
      }));
      setDropdownData(temp);
    } catch (e) {
      Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    }
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    if (data) {
      setShowLoading(true);
    }
  }, [data]);

  const getAllVehicleData = async () => {

    if(selectedOption === '')
    {
      Swal.fire('Error!', 'Please select vehicle status', 'error');
      return;
    }

    setShowLoading(true);
    try {
      const data = await fetchAllVehicles(selectedOption);
      setData(
        data.map((item) => ({
          ...item,
          id: item.vehicleID,
          createdDateTime: new Date(item.createdDateTime).toDateString(),
        })),
      );
      setShowLoading(true);
    } catch (e) {
      setData([]);
      Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    }
  };

  const columns = [
    {
      field: 'vehicleName',
      headerName: 'Vehicle Name',
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
    { field: 'registrationNumber', headerName: 'Registration', width: 150 },
    {
      field: 'horsePower',
      headerName: 'Engine',
      width: 120,
    },
    {
      field: 'modelYear',
      headerName: 'Model',
      width: 150,
    },
    {
      field: 'vehicleStatus',
      headerName: 'Status',
      width: 200,
    },

    { field: 'driverName', headerName: 'Driver Name', width: 200 },
    { field: 'driverContact', headerName: 'Driver Contact', width: 200 },
    { field: 'createdDateTime', headerName: 'Created On', width: 200 },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button
              disabled={false}
              className="productListEdit"
              onClick={() => {
                window.localStorage.setItem('prevRoute', '/vehicles');
                history.push(`/vehicles/${params.row.userID}`);
              }}
            >
              View
            </button>
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
        style={{ color: '#ffba02' }}
      >
        View All Vehicles
      </Typography>
      <Divider />

      <div
        style={{
          display: 'flex',
          height: '57px',
          marginBottom: '15px',
          marginTop: '15px',
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            <Dropdown
              label="Verification Status"
              items={dropdownData}
              setOption={setSelectedOption}
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
              onClick={getAllVehicleData}
            >
              Fetch
            </Button>
          </Grid>
        </Grid>
      </div>
      <DataGrid
        style={{ height: '440px' }}
        rows={data}
        columns={columns}
        pageSize={8}
        loading={showLoading}
        components={{
          NoRowsOverlay: noRowsOverlay,
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
