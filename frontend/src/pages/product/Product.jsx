import {
  BrandingWatermark,
  CalendarToday,
  HourglassEmpty,
  PhoneAndroid,
} from '@material-ui/icons';
import { Grid, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import bikeIcon from '../../assets/bike.svg';
import './product.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { fetchAllVehicles, fetchVehicle, updateVehicle, FetchServiceType } from '../../data/Data';
import CircularProgress from '@mui/material/CircularProgress';
import ModalImgViewer from '../../components/ModalImgViewer/ModalImgViewer';
import { Typography, Divider } from '@material-ui/core';
import userIcon from '../../assets/user-icon.svg';
import { Dropdown } from '../../components/Dropdown/Dropdown';

export default function Product() {
  const history = useHistory();
  const userID = history.location.pathname.split('/')[2];
  const [open, setOpen] = useState(false);
  const [vehicle, setVehicle] = useState({});
  const [didLoad, setDidLoad] = useState(false);
  const [vehicleImages, setVehicleImages] = useState([]);
  const [modalImgSet, setModalImgSet] = useState([]);
  const [comment, setComment] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [serviceTypeList, setserviceTypeList] = useState([]);


  const style = didLoad ? {} : { visibility: 'hidden' };

  console.log(history);


  useEffect(async () => {

    const data = await FetchServiceType();

    setserviceTypeList(data.rideServiceType.map((item) => ({
      value: item.displayName,
      key: item.id
    }
    ))
    );
  }, []);


  useEffect( async () => {
      let result = {};
      const response = await fetchVehicle(userID);
      setVehicleImages(response.vehicleImages);

      const response2 = await fetchAllVehicles(
        response.vehicles.vehicleRegistrationStateID,
      );

      const data = response2.find(
        (vehicle) => vehicle.vehicleID === parseInt(userID),
      );

      result = { ...result, ...data };

      delete result.vehicles;

      setVehicle(result);
  }, [userID]);

  useEffect(() => {
    if (vehicleImages.length > 0) {
      setDidLoad(true);
      const temp = [];
      vehicleImages.forEach((obj) => {
        obj.imageURLs.forEach((imgSrc) => {
          temp.push({ src: imgSrc });
        });
      });
      console.log(temp);
      setModalImgSet(temp);
    }
  }, [vehicleImages]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="user">
      <Typography
        variant="h5"
        className="productListTitle"
        style={{ color: '#ffba02', marginTop: '15px' }}
      >
        Vehicle Details
      </Typography>
      <Divider style={{ marginBottom: '15px' }} />
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={userIcon} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{vehicle.driverName}</span>
              <span className="userShowUserTitle">serviceType</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Vehicle Details</span>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">
                {vehicle.createdDateTime}
              </span>
            </div>
            <div className="userShowInfo">
              <HourglassEmpty className="userShowIcon" />
              <span className="userShowInfoTitle">
                {vehicle.horsePower} Horse Power
              </span>
            </div>
            <div className="userShowInfo">
              <img
                src={bikeIcon}
                height="18px"
                width="18px"
                alt=""
                className="userShowIcon"
              />
              <span className="userShowInfoTitle">
                {vehicle.vehicleName}, {vehicle.modelYear}
              </span>
            </div>
            <div className="userShowInfo">
              <BrandingWatermark className="userShowIcon" />
              <span className="userShowInfoTitle">
                {vehicle.registrationNumber}
              </span>
            </div>
            <span className="userShowTitle">serviceType Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{vehicle.driverContact}</span>
            </div>
            {/* <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">alikhan99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">
                Block 2, Gulshan-e-Iqbal, Karachi | Sindh
              </span>
            </div> */}
          </div>
        </div>
        {/* ##################### IMAGE VIEWER ##################### */}
        {vehicleImages.length > 0 ? (
          <ModalImgViewer
            modalImgSet={modalImgSet}
            open={open}
            handleClose={handleClose}
          />
        ) : null}
        {/* ######################################################### */}
        <div className="userUpdate">
          <span className="userUpdateTitle">Vehicle Images</span>

          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              {didLoad ? (
                <img
                  className="userUpdateImg"
                  style={{ cursor: 'pointer', ...style }}
                  src={vehicleImages[1].imageURLs[0]}
                  alt=""
                  onLoad={() => {
                    setDidLoad(true);
                  }}
                  onClick={() => {
                    handleOpen();
                  }}
                />
              ) : (
                <div style={{ margin: '10px' }}>
                  <CircularProgress />
                </div>
              )}
            </div>
            <div style={{ margin: '10px 0px' }} className="userUpdateUpload">
              {didLoad ? (
                <img
                  className="userUpdateImg"
                  style={{ cursor: 'pointer', ...style }}
                  src={vehicleImages[1].imageURLs[1]}
                  alt=""
                  onLoad={() => {
                    setDidLoad(true);
                  }}
                  onClick={() => {
                    handleOpen();
                  }}
                />
              ) : (
                <div style={{ margin: '10px' }}>
                  <CircularProgress />
                </div>
              )}
            </div>
            <div style={{ margin: '10px 0px' }} className="userUpdateUpload">
              {didLoad ? (
                <img
                  className="userUpdateImg"
                  style={{ cursor: 'pointer', ...style }}
                  src={vehicleImages[1].imageURLs[2]}
                  alt=""
                  onLoad={() => {
                    setDidLoad(true);
                  }}
                  onClick={() => {
                    handleOpen();
                  }}
                />
              ) : (
                <div style={{ margin: '10px' }}>
                  <CircularProgress />
                </div>
              )}
            </div>
            <div style={{ margin: '10px 0px' }} className="userUpdateUpload">
              {didLoad ? (
                <img
                  className="userUpdateImg"
                  style={{ cursor: 'pointer', ...style }}
                  src={vehicleImages[1].imageURLs[3]}
                  alt=""
                  onLoad={() => {
                    setDidLoad(true);
                  }}
                  onClick={() => {
                    handleOpen();
                  }}
                />
              ) : (
                <div style={{ margin: '10px' }}>
                  <CircularProgress />
                </div>
              )}
            </div>
            <div style={{ margin: '10px 0px' }} className="userUpdateUpload">
              {didLoad ? (
                <img
                  className="userUpdateImg"
                  style={{ cursor: 'pointer', ...style }}
                  src={vehicleImages[1].imageURLs[4]}
                  alt=""
                  onLoad={() => {
                    setDidLoad(true);
                  }}
                  onClick={() => {
                    handleOpen();
                  }}
                />
              ) : (
                <div style={{ margin: '10px' }}>
                  <CircularProgress />
                </div>
              )}
            </div>
          </div>

          <span className="userUpdateTitle">Vehile Documents</span>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              {didLoad ? (
                <img
                  className="userUpdateImg"
                  style={{ cursor: 'pointer', ...style }}
                  src={vehicleImages[0].imageURLs[0]}
                  alt=""
                  onLoad={() => {
                    setDidLoad(true);
                  }}
                  onClick={() => {
                    handleOpen();
                  }}
                />
              ) : (
                <div style={{ margin: '10px' }}>
                  <CircularProgress />
                </div>
              )}
            </div>
            <div style={{ margin: '10px 0px' }} className="userUpdateUpload">
              {didLoad ? (
                <img
                  className="userUpdateImg"
                  style={{ cursor: 'pointer', ...style }}
                  src={vehicleImages[0].imageURLs[1]}
                  alt=""
                  onLoad={() => {
                    setDidLoad(true);
                  }}
                  onClick={() => {
                    handleOpen();
                  }}
                />
              ) : (
                <div style={{ margin: '10px' }}>
                  <CircularProgress />
                </div>
              )}
            </div>
          </div>

          {/* <span className="userUpdateTitle">serviceType Documents</span>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img
                className="userUpdateImg"
                src={cnicImg}
                alt=""
                onClick={() => {
                  setModalImg(cnicImg);
                  handleOpen();
                }}
              />
            </div>
            <div style={{ margin: '10px 0px' }} className="userUpdateUpload">
              <img
                className="userUpdateImg"
                src={billImg}
                alt=""
                onClick={() => {
                  setModalImg(billImg);
                  handleOpen();
                }}
              />
            </div>
          </div> */}
          <br />
          {window.localStorage.getItem('prevRoute') === '/verification' ? (
            <div className="text-and-buttons">
              <TextField
                style={{
                  width: '60%',
                  padding: '0px 5px',
                  boxShadow: '0',
                }}
                placeholder="Comment"
                multiline
                rows={1}
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              <div className="text-and-buttons" >
                <Grid item xs={7} style={{ margin: '10px 5px 15px 10px' }}>
                  <Dropdown
                    items={serviceTypeList}
                    setOption={setServiceType}
                    label="Ride Service Type test "
                  />
                </Grid>
                <Grid item xs={7} style={{ margin: '10px 5px 15px 10px' }}>
                  {/* <ComboBox
              items={serviceTypeList}
              //setValue={setServiceType}
              label="Vehicles Status "
            /> */}
                </Grid>
                <div style={{ display: 'flex', margin: '20px 0px 10px 10px' }}>
                  <Link to="#" style={{ margin: '0px 5px' }}>
                    <button
                      className="userAddButton Approved"
                      onClick={() =>
                        Swal.fire({
                          title: 'Do you want to save the changes?',
                          showDenyButton: true,
                          showCancelButton: true,
                          confirmButtonText: 'Save',
                          denyButtonText: `Don't save`,
                        }).then(async (result) => {
                          /* Read more about isConfirmed, isDenied below */
                          if (result.isConfirmed) {
                            try {
                              const res = await updateVehicle(
                                vehicle.vehicleID,
                                2,
                                comment,
                                window.localStorage.getItem('userID'),
                              );
                              Swal.fire('Saved!', '', 'success');
                            } catch (error) {
                              Swal.fire('Error!', '', 'error');
                            }
                          } else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info');
                          }
                        })
                      }
                    >
                      Submit
                    </button>
                  </Link>

                  {/* <Link to="#" style={{ marginLeft: 'auto' }}>
                  <button
                    style={{ backgroundColor: 'rebeccapurple' }}
                    className="userAddButton"
                  >
                    Update
                  </button>
                </Link> */}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
