import axios from 'axios';

const RIDE_API_BASE_URL = 'http://localhost:8080/api/v1/rides';

class RideService {
  getRides() {
    const response = axios.get(RIDE_API_BASE_URL);
    return response;
  }

  postRide(ride) {
    return axios.post(RIDE_API_BASE_URL, ride);
  }

  getRideById(rideId) {
    return axios.get(RIDE_API_BASE_URL + '/' + rideId);
  }

  updateRide(ride, rideId) {
    return axios.put(RIDE_API_BASE_URL + '/' + rideId, ride);
  }

  deleteRide(rideId) {
    return axios.delete(RIDE_API_BASE_URL + '/' + rideId);
  }
}
export default new RideService();
