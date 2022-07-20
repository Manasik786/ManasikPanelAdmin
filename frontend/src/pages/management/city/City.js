import './city.css';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchAllCities } from '../../../data/Data';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Swal from 'sweetalert2';

export default function Region() {
  const history = useHistory();
  const [regions, setRegions] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  // get verification status data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    (async () => {
      try {
        const data = await FetchAllCities();

        setRegions(
          data.cities.map((item) => ({
            ...item,
            id: item.id,
            City: item.city_EN,
            Urdu_City: item.city_UR,
            isActive: item.isActive,
            country: item.country
          })),
        );

        setShowLoading(false);
      } catch (e) {
        console.log(e);
        Swal.fire('Error!', 'There was some issue fetching the data', 'error');
      }
    })();
  }, []);

  const handleDelete = (id) => {
    setRegions(regions.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: 'id',
      width: 100,
    },

    {
      field: 'City',
      headerName: 'Cities(EN)',
      width: 220,
    },
    {
      field: 'Urdu_City',
      headerName: 'Cities(UR)',
      width: 220,
    },
    {
      field: 'isActive',
      headerName: 'Is Active',
      width: 220,
    },
    {
      field: 'country',
      headerName: 'Country',
      width: 220,
    },


    // {
    //   field: 'action',
    //   headerName: 'Action',
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <button
    //           disabled={false}
    //           style={{
    //             width: '100%',
    //           }}
    //           className="productListEdit"
    //           onClick={() => {
    //             // window.localStorage.setItem('prevRoute', '/verification');
    //             history.push(`/viewRides/${params.row.rideID}`);
    //           }}
    //         >
    //           Edit/View
    //         </button>

    //         {/* <DeleteOutline
    //           className="productListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         /> */}
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <div className="productList">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: '#ffba02', marginTop: '15px' }}
      >
        Region
      </Typography>
      <Divider style={{ marginBottom: '15px' }} />
      <DataGrid
        style={{ height: '500px' }}
        rows={regions}
        disableSelectionOnClick
        columns={columns}
        pageSize={8} 
        rowsPerPageOptions={[8]}
        loading={showLoading}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
