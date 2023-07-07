import React, { Component } from 'react';
import DriverService from '../../services/drivers/DriverService';

class ListDrivers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drivers: [],
    };

    this.addDriver = this.addDriver.bind(this);
    this.editDriver = this.editDriver.bind(this);
    this.deleteVehicle = this.deleteDriver.bind(this);
  }

  deleteDriver(id) {
    DriverService.deleteDriver(id)
      .then((res) => {
        this.setState({
          drivers: this.state.drivers.filter((driver) => driver.id !== id),
        });
        console.log('Deleted');
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
    this.props.history.push('/drivers');
  }

  editDriver(id) {
    this.props.history.push(`/updateDriver/${id}`);
  }

  componentDidMount() {
    DriverService.getDrivers().then((res) => {
      this.setState({ drivers: res.data });
    });
  }

  addDriver() {
    this.props.history.push('/addDriver');
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Driver List</h2>
        <div className='row'>
          <button className='btn btn-primary' onClick={this.addDriver}>
            Add Driver
          </button>
        </div>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th> ID </th>
                <th> First Name </th>
                <th> Last Name </th>
                <th> Phone </th>
                <th> Gender </th>
                <th> Age </th>
                <th> Experience </th>
                <th> PayId </th>
                <th> Rating </th>
                <th> Driving License </th>
                <th> Vehicle </th>
              </tr>
            </thead>
            <tbody>
              {this.state.drivers.map((driver) => (
                <tr key={driver.id}>
                  <td>{driver.id}</td>
                  <td>{driver.firstName}</td>
                  <td>{driver.lastName}</td>
                  <td>{driver.phone}</td>
                  <td>{driver.gender}</td>
                  <td>{driver.age}</td>
                  <td>{driver.experience}</td>
                  <td>{driver.payId}</td>
                  <td>{driver.rating}</td>
                  <td>{driver.drivingLicense}</td>
                  <td>{driver.vehicle.id}</td>
                  <td>
                    <button
                      onClick={() => this.editDriver(driver.id)}
                      className='btn btn-primary mx-2'>
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteDriver(driver.id)}
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

export default ListDrivers;
