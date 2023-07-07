import React, { Component } from 'react';
import VehicleService from '../../services/vehicles/VehicleService';

class ListVehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
    };

    this.addVehicle = this.addVehicle.bind(this);
    this.editVehicle = this.editVehicle.bind(this);
    this.deleteVehicle = this.deleteVehicle.bind(this);
  }

  deleteVehicle(id) {
    VehicleService.deleteVehicle(id)
      .then((res) => {
        this.setState({
          vehicles: this.state.vehicles.filter((vehicle) => vehicle.id !== id),
        });
        console.log('Deleted');
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
    this.props.history.push(`/deleteVehicle/${id}`);
    this.props.history.push('/vehicles');
  }

  editVehicle(id) {
    this.props.history.push(`/updateVehicle/${id}`);
  }

  componentDidMount() {
    VehicleService.getVehicles().then((res) => {
      this.setState({ vehicles: res.data });
    });
  }

  addVehicle() {
    this.props.history.push('/addVehicle');
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Vehicles List</h2>
        <div className='row'>
          <button className='btn btn-primary' onClick={this.addVehicle}>
            Add Vehicle
          </button>
        </div>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th> ID </th>
                <th> Color </th>
                <th> Fuel Type </th>
                <th> Ride Type </th>
                <th> Wifi </th>
                <th> AC </th>
                <th> Company </th>
                <th> Model </th>
                <th> VIN </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {this.state.vehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td>{vehicle.id}</td>
                  <td>{vehicle.color}</td>
                  <td>{vehicle.typeFuel}</td>
                  <td>{vehicle.typeRide}</td>
                  <td>{vehicle.wifi === 1 ? 'Yes' : 'No'}</td>
                  <td>{vehicle.ac === 1 ? 'Yes' : 'No'}</td>
                  <td>{vehicle.company}</td>
                  <td>{vehicle.model}</td>
                  <td>{vehicle.vin}</td>
                  <td>
                    <button
                      onClick={() => this.editVehicle(vehicle.id)}
                      className='btn btn-primary mx-2'>
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteVehicle(vehicle.id)}
                      className='btn btn-danger'>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListVehicles;
