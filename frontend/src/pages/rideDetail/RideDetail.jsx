import React, { useEffect, useState } from 'react';
import './featuredInfo.css';
import { Typography, Divider } from '@material-ui/core';
import Rating from '@mui/material/Rating';
import { fetchRideDetails } from '../../data/Data';

const RideDetail = () => {
  const id =
    window.location.href.split('/')[window.location.href.split('/').length - 1];
  const [data, setData] = useState({});
  useEffect(() => {
    (async () => {
      const response = await fetchRideDetails(id);
      setData(response);
    })();
  }, []);
  const styles = {
    cardStyle: {
      display: 'flex',
      maxWidth: '75%',
      maxHeight: '22%',
      cursor: 'default',
      fontSize: '1.2rem',
      marginBottom: '1rem',
      flexDirection: 'column',
      borderLeft: '10px solid #FFBA02',
    },
    cardStyleAlternate: {
      display: 'flex',
      maxWidth: '75%',
      maxHeight: '22%',
      cursor: 'default',
      fontSize: '1.2rem',
      marginBottom: '1rem',
      flexDirection: 'column',
      placeContent: 'flex-end',
      borderLeft: '10px solid #FFBA02',
    },
    cardContent: {
      color: 'rgba(0,0,0, 0.5)',
    },
  };
  return (
    <>
      <div style={{ width: '100%' }} className="featured">
        {/* HEADING */}
        <div>
          <Typography
            variant="h5"
            className="productListTitle"
            style={{ color: '#ffba02', marginTop: '15px' }}
          >
            Ride Details
            <Divider style={{ marginBottom: '15px' }} />
          </Typography>
        </div>
        {/* RIDER ID */}
        <div
          style={{
            width: '30%',
            padding: '0',
            display: 'flex',
            maxHeight: '4%',
            textAlign: 'center',
            marginBottom: '10px',
            flexDirection: 'column',
            justifyContent: 'center',
            border: '2px solid #ffba02',
          }}
          className="featuredItem"
        >
          <div className="featuredTitle">
            <strong>RideID : </strong> {data?.rideSummary?.rideID || 'N/A'}
          </div>
        </div>
        {/* DRIVER DETAILS */}
        <div style={styles.cardStyle} className="featuredItem">
          <strong style={{ marginBottom: '5px' }}>
            <span className="featuredTitle">Driver Details</span>
            <hr />
          </strong>
          <div style={styles.cardContent}>
            <div style={{ marginBottom: '5px' }}>
              Name : {data?.driverDetails?.name || 'N/A'}
            </div>
            <div style={{ marginBottom: '5px' }}>
              Contact : {data?.driverDetails?.contact || 'N/A'}
            </div>
            <div style={{ marginBottom: '5px' }}>
              Accepted Date & Time :{' '}
              {data?.driverDetails?.acceptedDateTime || 'N/A'}
            </div>
          </div>
        </div>
        {/* CUSTOMER DETAILS */}
        <div style={styles.cardStyle} className="featuredItem">
          <strong style={{ marginBottom: '5px' }}>
            <span className="featuredTitle">Customer Details</span>
            <hr />
          </strong>
          <div style={styles.cardContent}>
            <div style={{ marginBottom: '5px' }}>
              Name : {data?.customerDetails?.name || 'N/A'}
            </div>
            <div style={{ marginBottom: '5px' }}>
              Contact : {data?.customerDetails?.contact || 'N/A'}
            </div>
          </div>
        </div>
        {/* OFFERED FARE */}
        <div style={styles.cardStyle} className="featuredItem">
          <strong style={{ marginBottom: '5px' }}>
            <span className="featuredTitle">Offered Fare</span>
            <hr />
          </strong>
          <div style={styles.cardContent}>
            <div style={{ marginBottom: '5px' }}>
              Offered Fare : {data?.rideSummary?.offeredFare || 'N/A'}
            </div>
            <div style={{ marginBottom: '5px' }}>
              Ride Requested Time :{' '}
              {data?.rideSummary?.rideRequestTime || 'N/A'}
            </div>
            <div style={{ marginBottom: '5px' }}>
              Ride Status : {data?.rideSummary?.rideStatus || 'N/A'}
            </div>
            <div style={{ marginBottom: '5px' }}>
              City : {data?.rideSummary?.city || 'N/A'}
            </div>
            <div style={{ marginBottom: '5px' }}>
              Service Type : {data?.rideSummary?.serviceType || 'N/A'}
            </div>
          </div>
        </div>
      </div>

      <div className="featured">
        {/* HEADING */}
        <div>
          <Typography
            variant="h5"
            className="productListTitle"
            style={{ color: '#ffba02', marginTop: '47px', color: 'white' }}
          >
            {' '}
            <Divider style={{ marginBottom: '15px' }} />
          </Typography>
        </div>
        {/* RIDER ID */}
        <div
          style={{
            width: '30%',
            padding: '0',
            minHeight: '4%',
            maxHeight: '4%',
            cursor: 'default',
            boxShadow: 'none',
            marginBottom: '10px',
          }}
          className="featuredItem"
        >
          <div className="featuredTitle"></div>
        </div>
        {/* MAP */}
        {/* <div style={styles.cardStyleAlternate} className="featuredItem">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14473.199485265204!2d67.1298786!3d24.9218524!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1639379993326!5m2!1sen!2s"
            width="450"
            height="250"
            style={{ border: 0 }}
            allowFullScreen="false"
            loading="lazy"
          />
        </div> */}
        {/* RIDE SUMMARY */}
        <div style={styles.cardStyle} className="featuredItem">
          <strong style={{ marginBottom: '5px' }}>
            <span className="featuredTitle">Ride Summary</span>
            <hr />
          </strong>
          <div style={styles.cardContent}>
            <div style={{ marginBottom: '5px' }}>
              Source : {data?.rideSummary?.sourcePoints?.name || 'N/A'}
            </div>
            <div style={{ marginBottom: '5px' }}>
              Destination :{' '}
              {data?.rideSummary?.destinationPoints?.name || 'N/A'}
            </div>
          </div>
        </div>
        {/* RIDE ACTION */}
        <div style={styles.cardStyle} className="featuredItem">
          <strong style={{ marginBottom: '5px' }}>
            <span className="featuredTitle">Ride Action</span>
            <hr />
          </strong>
          <div style={styles.cardContent}>
            <div style={{ marginBottom: '5px' }}>
              Ride Action Type :{' '}
              {data?.rideActions?.rideActions[0].rideActionType || 'N/A'}
            </div>
            <div style={{ marginBottom: '5px' }}>
              Ride Action Time :{' '}
              {new Date(
                data?.rideActions?.rideActions[0].rideActionTime,
              ).toLocaleString() || 'N/A'}
            </div>
            <div style={{ marginBottom: '5px' }}>
              Latitude : {data?.rideActions?.rideActions[0].latitude || 'N/A'}
            </div>
            <div style={{ marginBottom: '5px' }}>
              Longitude : {data?.rideActions?.rideActions[0].longitude || 'N/A'}
            </div>
          </div>
        </div>
        {/* RATINGS */}
        <div style={styles.cardStyle} className="featuredItem">
          <strong style={{ marginBottom: '5px' }}>
            <span className="featuredTitle">Ratings</span>
            <hr />
          </strong>
          <div style={styles.cardContent}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '100%' }}>Customer Rating :</div>
              <div style={{ width: '100%' }}>Rider Rating :</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '100%' }}>
                <Rating
                  style={{ paddingTop: '5px' }}
                  value={data?.rating?.customerRating || 0}
                  readOnly
                />
              </div>
              <div style={{ width: '100%' }}>
                <Rating
                  style={{ paddingTop: '5px' }}
                  value={data?.rating?.customerRating || 0}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RideDetail;
