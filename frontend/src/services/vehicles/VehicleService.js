import axios from 'axios';

const VEHICLE_API_BASE_URL = 'http://localhost:8080/api/v1/vehicles';

class VehicleService {
  getVehicles() {
    const response = axios.get(VEHICLE_API_BASE_URL);
    return response;
  }

  postVehicle(vehicle) {
    return axios.post(VEHICLE_API_BASE_URL, vehicle);
  }

  getVehiclesById(vehicleId) {
    return axios.get(VEHICLE_API_BASE_URL + '/' + vehicleId);
  }

  updateVehicle(vehicle, vehicleId) {
    return axios.put(VEHICLE_API_BASE_URL + '/' + vehicleId, vehicle);
  }

  deleteVehicle(vehicleId) {
    return axios.delete(VEHICLE_API_BASE_URL + '/' + vehicleId);
  }
}
export default new VehicleService();
