import React, { Component } from 'react';
import DriverService from '../../services/drivers/DriverService';
import VehicleService from '../../services/vehicles/VehicleService';

class AddDriver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      firstName: '',
      lastName: '',
      addrStreet: '',
      addrLocality: '',
      addrCity: '',
      addrState: '',
      addrPin: '',
      phone: '',
      gender: 'M',
      age: 0,
      aadhar: '',
      experience: 0.0,
      payId: '',
      email: '',
      rating: 0,
      drivingLicense: '',
      vehicle: null,
      vehicleId: null,
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeAddrStreetHandler = this.changeAddrStreetHandler.bind(this);
    this.changeAddrLocalityHandler = this.changeAddrLocalityHandler.bind(this);
    this.changeAddrCityHandler = this.changeAddrCityHandler.bind(this);
    this.changeAddrStateHandler = this.changeAddrStateHandler.bind(this);
    this.changeAddrPinHandler = this.changeAddrPinHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changeAadharHandler = this.changeAadharHandler.bind(this);
    this.changeExperienceHandler = this.changeExperienceHandler.bind(this);
    this.changePayIdHandler = this.changePayIdHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeRatingHandler = this.changeRatingHandler.bind(this);
    this.changeDrivingLicenseHandler =
      this.changeDrivingLicenseHandler.bind(this);
    this.changeVehicleHandler = this.changeVehicleHandler.bind(this);
    // this.changeVehicleIdHandler = this.changeVehicleIdHandler.bind(this);

    this.saveDriver = this.saveDriver.bind(this);
  }

  componentDidMount() {
    this.getVehicles();
  }

  getVehicles = async () => {
    try {
      const response = await VehicleService.getVehicles();
      this.setState({ vehicles: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  saveDriver = (e) => {
    e.preventDefault();
    let driver = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      addrStreet: this.state.addrStreet,
      addrLocality: this.state.addrLocality,
      addrCity: this.state.addrCity,
      addrState: this.state.addrState,
      addrPin: this.state.addrPin,
      phone: this.state.phone,
      gender: this.state.gender,
      age: this.state.age,
      aadhar: this.state.aadhar,
      experience: this.state.experience,
      payId: this.state.payId,
      email: this.state.email,
      rating: this.state.rating,
      drivingLicense: this.state.drivingLicense,
      vehicle: this.state.vehicle,
    };

    console.log('driver => ' + JSON.stringify(driver));
    DriverService.postDriver(driver).then((res) => {
      this.props.history.push('/drivers');
    });
  };

  cancel() {
    this.props.history.push('/drivers');
  }

  changeFirstNameHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      firstName: event.target.value,
    }));
  };

  changeLastNameHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      lastName: event.target.value,
    }));
  };

  changeAddrStreetHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      addrStreet: event.target.value,
    }));
  };

  changeAddrLocalityHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      addrLocality: event.target.value,
    }));
  };

  changeAddrCityHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      addrCity: event.target.value,
    }));
  };

  changeAddrStateHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      addrState: event.target.value,
    }));
  };

  changeAddrPinHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      addrPin: event.target.value,
    }));
  };

  changePhoneHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      phone: event.target.value,
    }));
  };

  changeGenderHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      gender: event.target.value,
    }));
  };

  changeAgeHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      age: event.target.value,
    }));
  };

  changeAadharHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      aadhar: event.target.value,
    }));
  };

  changeExperienceHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      experience: event.target.value,
    }));
  };

  changePayIdHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      payId: event.target.value,
    }));
  };

  changeEmailHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  };

  changeRatingHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      rating: event.target.value,
    }));
  };

  changeDrivingLicenseHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      drivingLicense: event.target.value,
    }));
  };

  changeVehicleHandler = (event) => {
    const vehicleId = event.target.value;
    this.setState(
      (prevState) => ({ ...prevState, vehicleId }),
      () => {
        console.log('vehicleId: ', this.state.vehicleId);
        // Fetch vehicle details
        VehicleService.getVehiclesById(this.state.vehicleId)
          .then((response) => {
            const vehicle = response.data;
            this.setState(
              (prevState) => ({ ...prevState, vehicle }),
              () => {
                console.log('vehicle: ', this.state.vehicle);
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
              <h3 className='text-center'>Add Drivers</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>First Name: </label>
                    <input
                      placeholder='FirstName'
                      name='firstName'
                      className='form-control'
                      value={this.state.firstName || ''}
                      onChange={this.changeFirstNameHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Last Name: </label>
                    <input
                      placeholder='Last Name'
                      name='lastName'
                      className='form-control'
                      value={this.state.lastName || ''}
                      onChange={this.changeLastNameHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Address Street: </label>
                    <input
                      placeholder='Address Street'
                      name='addrStreet'
                      className='form-control'
                      value={this.state.addrStreet || ''}
                      onChange={this.changeAddrStreetHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Address Locality: </label>
                    <input
                      placeholder='Address Locality'
                      name='addrLocality'
                      className='form-control'
                      value={this.state.addrLocality || ''}
                      onChange={this.changeAddrLocalityHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Address City: </label>
                    <input
                      placeholder='Address City'
                      name='addrCity'
                      className='form-control'
                      value={this.state.addrCity || ''}
                      onChange={this.changeAddrCityHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Address State: </label>
                    <input
                      placeholder='Address State'
                      name='addrState'
                      className='form-control'
                      value={this.state.addrState || ''}
                      onChange={this.changeAddrStateHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Address Pin: </label>
                    <input
                      placeholder='Address Pin'
                      name='addrPin'
                      className='form-control'
                      value={this.state.addrPin || ''}
                      onChange={this.changeAddrPinHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Phone: </label>
                    <input
                      placeholder='Phone'
                      name='phone'
                      type='tel'
                      className='form-control'
                      value={this.state.phone || ''}
                      onChange={this.changePhoneHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Gender: </label>
                    <select
                      placeholder='Gender'
                      name='gender'
                      className='form-control'
                      value={this.state.gender || ''}
                      onChange={this.changeGenderHandler}>
                      <option value='' defaultValue>
                        --Please select an option--
                      </option>
                      <option value='M'>M</option>
                      <option value='F'>F</option>
                    </select>
                  </div>

                  <div className='form-group'>
                    <label>Age: </label>
                    <input
                      placeholder='Age'
                      name='age'
                      type='number'
                      className='form-control'
                      value={this.state.age || ''}
                      onChange={this.changeAgeHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Aadhar: </label>
                    <input
                      placeholder='Aadhar'
                      name='aadhar'
                      className='form-control'
                      value={this.state.aadhar || ''}
                      onChange={this.changeAadharHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Experience: </label>
                    <input
                      placeholder='Experience'
                      name='experience'
                      type='number'
                      className='form-control'
                      value={this.state.experience || ''}
                      onChange={this.changeExperienceHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>PayId: </label>
                    <input
                      placeholder='PayId'
                      name='payId'
                      className='form-control'
                      value={this.state.payId || ''}
                      onChange={this.changePayIdHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Email: </label>
                    <input
                      placeholder='Email'
                      name='email'
                      className='form-control'
                      value={this.state.email || ''}
                      onChange={this.changeEmailHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Rating: </label>
                    <input
                      placeholder='Rating'
                      name='rating'
                      className='form-control'
                      type='number'
                      value={this.state.rating || ''}
                      onChange={this.changeRatingHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Driving License: </label>
                    <input
                      placeholder='Driving License'
                      name='drivingLicense'
                      className='form-control'
                      value={this.state.drivingLicense || ''}
                      onChange={this.changeDrivingLicenseHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Vehicle: </label>
                    <input
                      placeholder='Vehicle'
                      name='vehicle'
                      className='form-control'
                      value={this.state.vehicleId || ''}
                      onChange={this.changeVehicleHandler}
                      list='vehicle-options'
                      autoComplete='off'
                    />
                    <datalist id='vehicle-options'>
                      <option value=''>--Please select an option--</option>
                      {this.state.vehicles.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.id}>
                          {vehicle.id} - {vehicle.company || 'N/A'} -
                          {vehicle.model || 'N/A'}
                        </option>
                      ))}
                    </datalist>
                  </div>
                  <div className='p-2'></div>
                  <button className='btn btn-success' onClick={this.saveDriver}>
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

export default AddDriver;
