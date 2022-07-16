import './riderVerificationList.css';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchAllRiders } from '../../data/Data';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Swal from 'sweetalert2';

export default function RiderVerificationList() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  // get verification status data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchAllRiders(1);
        setData(
          data.map((item) => ({
            ...item,
            id: item.userID,
            createdDateTime: new Date(item.createdDateTime).toDateString(),
          })),
        );
        setShowLoading(false);
      } catch (e) {
        setShowLoading(false);
        Swal.fire('Error!', 'There was some issue fetching the data', 'error');
      }
    })();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: 'name',
      headerName: 'Driver Name',
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
    { field: 'contactNo', headerName: 'Contact #', width: 150 },
    {
      field: 'cityName',
      headerName: 'City',
      width: 120,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 150,
    },
    {
      field: 'dob',
      headerName: 'Date of Birth',
      width: 200,
    },

    { field: 'driverStatus', headerName: 'Driver Status', width: 200 },
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
              style={{
                width: '100%',
              }}
              className="productListEdit"
              onClick={() => {
                window.localStorage.setItem(
                  'prevRoute',
                  window.location.pathname,
                );
                history.push(`/riders/${params.row.userID}`);
              }}
            >
              Edit/View
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
        Pending Verification
      </Typography>
      <Divider style={{ marginBottom: '15px' }} />
      <DataGrid
        style={{ height: '500px' }}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        loading={showLoading}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
