import axios from 'axios';
import { SHA256 } from 'crypto-js';
import Swal from 'sweetalert2';

const baseUrl = 'http://3.1.45.135:8093';
const headers = {
  'Content-Type': 'application/json',
  APIKey: '3fDUdgk+kL5YN6wmPH48AbqJdfz6zuyZTSYnVtn4hgI=',
  'Cross-Origin-Resource-Sharing': '*',
};


const validateLogin = async (username, password) => {
  const passwordHash = await SHA256(password).toString();
  const response = await axios.post(
    `${baseUrl}/Admin/Login`,
    { username, password: passwordHash },
    {
      headers,
    },
  );
  return response.data;
};


const Slider =  async () => {
  try {
    const response = await axios.get(`api/v1/slider`, {
      headers,
    });
    return response.item.item;
  } 
  catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
}
const Service = async () => {

}
const Packages = async () => {
  try {
    const response = await axios.post(
      ``,
      {  },
      {
        headers,
      },
    );
    return response.data.listVehicles;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
}













const fetchVehiclesStatus = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Admin/VehicleStatus`, {
      headers,
    });
    return response.data.listVehicleStatus;
  } 
  catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};
const FetchAllRegion = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Admin/Regions`, {
      headers,
    });
    return response.data;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};
const FetchAllCities = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Admin/Cities`, {
      headers,
    });
    return response.data;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};
const FetchServiceType = async () => {
  try {
    const response = await axios.get(`${baseUrl}/ride/RideServiceType`, {
      headers,
    });
    return response.data;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};

const fetchAllVehicles = async (id = 0) => {
  try {
    const response = await axios.post(
      `${baseUrl}/Admin/GetAllVehicles`,
      { vehicleStatusID: id },
      {
        headers,
      },
    );
    return response.data.listVehicles;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};
// new code added rideServiceType

const rideServiceType = async (id = 0) => {
  try {
    const response = await axios.post(
      `${baseUrl}/ride/RideServiceType`,
      { vehicleStatusID: id },
      {
        headers,
      },
    );
    return response.data.listVehicles;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};
const fetchVehicle = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/Admin/VehicleDetail/${id}`, {
      headers,
    });
    const data = response.data.vehicles[0];
    return data;
  } catch (error) {
    return { error: error.message };
  }
};

const updateVehicle = async (
  vehicleID,
  vehicleStatusID,
  comments = '',
  userID,
) => {
  try {
    const response = await axios.post(
      `${baseUrl}/Admin/VehicleUpdate`,
      {
        vehicleID,
        vehicleStatusID,
        comments,
        userID,
      },
      {
        headers,
      },
    );
    return response.data;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue updating the data', 'error');
    return { error: error.message };
  }
};

// FARE API METHODS
const fetchFareHistory = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Admin/FareHistory`, {
      headers,
    });
    return response.data.fareHistory;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};

const fetchFare = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Admin/CurrentFare`, {
      headers,
    });
    return response.data;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};

const updateFare = async (
  PerKMs,
  PerMin,
  ComissionPercentage,
  BaseFare,
  UserID,
) => {
  try {
    const response = await axios.post(
      `${baseUrl}/Admin/SetupFare`,
      {
        PerKMs,
        PerMin,
        ComissionPercentage,
        BaseFare,
        UserID,
      },
      {
        headers,
      },
    );
    Swal.fire('Success!', 'The data is updated successfully!', 'success');
    return response.data;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue updating the data', 'error');
    return { error: error.message };
  }
};

// RIDER API METHODS
const fetchRiderStatus = async () => {
  try {
    const response = await axios.get(`${baseUrl}/Admin/DriverStatus`, {
      headers,
    });
    return response.data.listDriverStatus;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};

const fetchAllRiders = async (id = 0) => {
  try {
    const response = await axios.post(
      `${baseUrl}/Admin/GetAllDrivers`,
      { DriverStatusID: id },
      {
        headers,
      },
    );
    return response.data.drivers;
  } catch (error) {
    Swal.fire('Error!', 'No Data Found', 'error');
    return { error: error.message };
  }
};

const fetchRider = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/Admin/DriverDetail/${id}`, {
      headers,
    });
    const data = response.data;
    return data;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};
const searchRide = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/admin/SearchRide/{id}`, {
      headers,
    });
    const data = response.data;
    return data;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};
const updateRider = async (
  DriverID,
  DriverStatusID,
  comments = '',
  CSRUserID,
) => {
  try {
    const response = await axios.post(
      `${baseUrl}/Admin/DriverUpdate`,
      {
        DriverID,
        DriverStatusID,
        comments,
        CSRUserID,
      },
      {
        headers,
      },
    );
    return response.data;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue updating the data', 'error');
    return { error: error.message };
  }
};

const getRides = async (
  statusID = null,
  fromDate = null,
  toDate = null,
  city = null,
) => {
  try {
    const params = {};
    if (statusID) {
      params.RideStatusID = statusID;
    }
    if (fromDate) {
      params.fromDate = fromDate;
    }
    if (toDate) {
      params.toDate = toDate;
    }
    if (city) {
      params.city = city;
    }
    const response = await axios.post(`${baseUrl}/Admin/GetRides`, params, {
      headers,
    });
    return response.data.listRides;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};

const fetchRideDetails = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/Admin/GetRideDetail/${id}`, {
      headers,
    });
    const data = response.data;
    return data;
  } catch (error) {
    Swal.fire('Error!', 'There was some issue fetching the data', 'error');
    return { error: error.message };
  }
};

export {
  Slider,
  fetchVehiclesStatus,
  fetchVehicle,
  validateLogin,
  fetchAllVehicles,
  updateVehicle,
  fetchFareHistory,
  fetchFare,
  updateFare,
  fetchRiderStatus,
  fetchAllRiders,
  fetchRider,
  updateRider,
  getRides,
  fetchRideDetails,
  FetchAllRegion,
  FetchAllCities,
  FetchServiceType,
  rideServiceType,
  searchRide,
  Service,
  Packages
};
