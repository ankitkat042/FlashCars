import React, { Component } from 'react';
import RideService from '../../services/rides/RideService';
import DriverService from '../../services/drivers/DriverService';

class UpdateRide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      rides: [],
      drivers: [],
      pickup: '',
      destination: '',
      duration: '',
      fare: 0,
      status: 0,
      distance: '',
      vehicle: null,
      vehicleId: null,
      driver: null,
      driverId: null,
    };

    this.handlePickupChange = this.handlePickupChange.bind(this);
    this.handleDestinationChange = this.handleDestinationChange.bind(this);
    this.handleDurationChange = this.handleDurationChange.bind(this);
    this.handleFareChange = this.handleFareChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleDistanceChange = this.handleDistanceChange.bind(this);
    // this.handleVehicleChange = this.handleVehicleChange.bind(this);
    // this.handleVehicleIdChange = this.handleVehicleIdChange.bind(this);
    this.handleDriverChange = this.handleDriverChange.bind(this);
    // this.handleDriverIdChange = this.handleDriverIdChange.bind(this);

    this.saveRide = this.saveRide.bind(this);
  }

  componentDidMount() {
    this.getRides();
    this.getDrivers();
    RideService.getRideById(this.state.id).then((res) => {
      let ride = res.data;
      console.log(ride);
      this.setState({
        pickup: ride.pickup,
        destination: ride.destination,
        duration: ride.duration,
        fare: ride.fare,
        status: ride.status,
        distance: ride.distance,
        vehicle: ride.vehicle,
        vehicleId: ride.vehicle.id,
        driver: ride.driver,
        driverId: ride.driver.id,
      });
    });
  }

  getRides = async () => {
    try {
      const response = await RideService.getRides();
      this.setState({ rides: response.data });
      console.log(this.state.rides);
    } catch (error) {
      console.log(error);
    }
  };

  getDrivers = async () => {
    try {
      const response = await DriverService.getDrivers();
      this.setState({ drivers: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  saveRide = (e) => {
    e.preventDefault();
    let ride = {
      pickup: this.state.pickup,
      destination: this.state.destination,
      duration: this.state.duration,
      fare: this.state.fare,
      status: this.state.status,
      distance: this.state.distance,
      driver: this.state.driver,
      vehicle: this.state.driver.vehicle,
    };
    console.log('ride => ' + JSON.stringify(ride));
    RideService.updateRide(ride, this.state.id).then((res) => {
      console.log(res.data);
      this.props.history.push('/rides');
    });
  };

  cancel() {
    this.props.history.push('/rides');
  }

  handlePickupChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      pickup: event.target.value,
    }));
  };

  handleDestinationChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      destination: event.target.value,
    }));
  };

  handleDurationChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      duration: event.target.value,
    }));
  };

  handleFareChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      fare: event.target.value,
    }));
  };

  handleStatusChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      status: event.target.value,
    }));
  };

  handleDistanceChange = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      distance: event.target.value,
    }));
  };

  handleDriverChange = (event) => {
    const driverId = event.target.value;
    this.setState(
      (prevState) => ({ ...prevState, driverId }),
      () => {
        console.log('driverId: ', this.state.driverId);
        // Fetch driver details
        DriverService.getDriverById(this.state.driverId)
          .then((response) => {
            const driver = response.data;
            this.setState(
              (prevState) => ({ ...prevState, driver }),
              () => {
                console.log('driver: ', this.state.driver);
              }
            );
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  };
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Add Ride</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>Pickup: </label>
                    <input
                      placeholder='Pickup'
                      name='pickup'
                      className='form-control'
                      value={this.state.pickup || ''}
                      onChange={this.handlePickupChange}
                      list='pickup-options'
                      autoComplete='off'
                    />
                    <datalist id='pickup-options'>
                      <option value=''>--Please select an option--</option>
                      {this.state.rides.map((ride) => (
                        <option key={ride.id} value={ride.pickup}>
                          {ride.pickup}
                        </option>
                      ))}
                    </datalist>
                  </div>

                  <div className='form-group'>
                    <label>Destination: </label>
                    <input
                      placeholder='Destination'
                      name='destination'
                      className='form-control'
                      value={this.state.destination || ''}
                      onChange={this.handleDestinationChange}
                      list='destination-options'
                      autoComplete='off'
                    />
                    <datalist id='destination-options'>
                      <option value=''>--Please select an option--</option>
                      {this.state.rides.map((ride) => (
                        <option key={ride.id} value={ride.destination}>
                          {ride.destination}
                        </option>
                      ))}
                    </datalist>
                  </div>

                  <div className='form-group'>
                    <label>Duration: </label>
                    <input
                      placeholder='Duration'
                      name='duration'
                      className='form-control'
                      value={this.state.duration || ''}
                      type='number'
                      // step='1'
                      onChange={this.handleDurationChange}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Fare: </label>
                    <input
                      placeholder='Fare'
                      name='fare'
                      className='form-control'
                      value={this.state.fare || ''}
                      type='number'
                      // step='1'
                      onChange={this.handleFareChange}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Status: </label>
                    <select
                      placeholder='Status'
                      name='status'
                      className='form-control'
                      value={this.state.status || ''}
                      onChange={this.handleStatusChange}>
                      <option value='' defaultValue>
                        --Please select an option--
                      </option>
                      <option value='1'>1</option>
                      <option value='0'>0</option>
                    </select>
                  </div>

                  <div className='form-group'>
                    <label>Distance: </label>
                    <input
                      placeholder='Distance'
                      name='distance'
                      className='form-control'
                      value={this.state.distance || ''}
                      type='number'
                      // step='1'
                      onChange={this.handleDistanceChange}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Driver: </label>
                    <input
                      placeholder='Driver'
                      name='driverId'
                      className='form-control'
                      value={this.state.driverId || ''}
                      onChange={this.handleDriverChange}
                      list='driver-options'
                      autoComplete='off'
                    />
                    <datalist id='driver-options'>
                      <option value=''>--Please select an option--</option>
                      {this.state.drivers.map((driver) => (
                        <option key={driver.id} value={driver.id}>
                          {driver.id} - {driver.firstName || 'N/A'} -{' '}
                          {driver.lastName || 'N/A'}
                        </option>
                      ))}
                    </datalist>
                  </div>
                  <div className='p-2'></div>
                  <button className='btn btn-success' onClick={this.saveRide}>
                    Save
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: '10px' }}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateRide;
