import './fareHistory.css';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchFareHistory } from '../../data/Data';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Swal from 'sweetalert2';

export default function FareHistory() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  // get verification status data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFareHistory();
        let temp = 0;
        setData(
          data.map((item) => {
            temp += 1;
            return {
              ...item,
              id: temp,
              effectiveFrom: new Date(item.effectiveFrom).toLocaleDateString(),
              effectiveEnd: new Date(item.effectiveEnd).toLocaleDateString(),
            };
          }),
        );
        setShowLoading(false);
      } catch (e) {
        console.log(e);
        Swal.fire('Error!', 'There was some issue fetching the data', 'error');
      }
    })();
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: 'isActive',
      headerName: 'Active',
      width: 150,
      // renderCell: (params) => {
      //   console.log(params);
      //   return <div>{params.row.name}</div>;
      // },
    },
    { field: 'perKMs', headerName: 'PerKMs', width: 150 },
    {
      field: 'perMin',
      headerName: 'PerMin',
      width: 120,
    },
    { field: 'baseFare', headerName: 'Base Fare', width: 200 },
    { field: 'effectiveFrom', headerName: 'Effective From', width: 200 },
    { field: 'effectiveEnd', headerName: 'Effective End', width: 200 },
  ];

  return (
    <div className="productList">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: '#ffba02', marginTop: '15px' }}
      >
        Manage Packages
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
