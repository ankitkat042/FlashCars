import React, { Component } from 'react';
import VehicleService from '../../services/vehicles/VehicleService';

class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [],
      color: '',
      typeFuel: '',
      typeRide: '',
      wifi: 0,
      ac: 0,
      company: '',
      model: '',
      vin: '',
    };

    this.changeColorHandler = this.changeColorHandler.bind(this);
    this.changeFuelHandler = this.changeFuelHandler.bind(this);
    this.changeRideHandler = this.changeRideHandler.bind(this);
    this.changeWifiHandler = this.changeWifiHandler.bind(this);
    this.changeAcHandler = this.changeAcHandler.bind(this);
    this.changeCompanyHandler = this.changeCompanyHandler.bind(this);
    this.changeModelHandler = this.changeModelHandler.bind(this);
    this.changeVinHandler = this.changeVinHandler.bind(this);

    this.saveVehicle = this.saveVehicle.bind(this);
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

  saveVehicle = (e) => {
    e.preventDefault();
    let vehicle = {
      color: this.state.color,
      typeFuel: this.state.typeFuel,
      typeRide: this.state.typeRide,
      wifi: this.state.wifi,
      ac: this.state.ac,
      company: this.state.company,
      model: this.state.model,
      vin: this.state.vin,
    };
    console.log('vehicle => ' + JSON.stringify(vehicle));
    VehicleService.postVehicle(vehicle).then((res) => {
      this.props.history.push('/vehicles');
    });
  };

  cancel() {
    this.props.history.push('/vehicles');
  }

  changeColorHandler = (event) => {
    this.setState((prevState) => ({ ...prevState, color: event.target.value }));
  };

  changeFuelHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      typeFuel: event.target.value,
    }));
  };

  changeRideHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      typeRide: event.target.value,
    }));
  };

  changeWifiHandler = (event) => {
    this.setState((prevState) => ({ ...prevState, wifi: event.target.value }));
  };

  changeAcHandler = (event) => {
    this.setState((prevState) => ({ ...prevState, ac: event.target.value }));
  };

  changeCompanyHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      company: event.target.value,
    }));
  };

  changeModelHandler = (event) => {
    this.setState((prevState) => ({ ...prevState, model: event.target.value }));
  };

  changeVinHandler = (event) => {
    this.setState((prevState) => ({ ...prevState, vin: event.target.value }));
  };

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Add Vehicle</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>Color: </label>
                    <input
                      placeholder='Color'
                      name='color'
                      className='form-control'
                      value={this.state.color}
                      onChange={this.changeColorHandler}
                      list='color-options'
                      autoComplete='off'
                    />
                    <datalist id='color-options'>
                      <option value=''>--Please select an option--</option>
                      {this.state.vehicles.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.color}>
                          {vehicle.color}
                        </option>
                      ))}
                    </datalist>
                  </div>

                  <div className='form-group'>
                    <label>Fuel Type: </label>
                    <select
                      placeholder='Fuel Type'
                      name='typeFuel'
                      className='form-control'
                      value={this.state.typeFuel}
                      onChange={this.changeFuelHandler}>
                      <option value='' defaultValue>
                        --Please select an option--
                      </option>
                      <option value='diesel'>diesel</option>
                      <option value='petrol'>petrol</option>
                      <option value='electric'>electric</option>
                    </select>
                  </div>

                  <div className='form-group'>
                    <label>Ride Type: </label>
                    <select
                      placeholder='Ride Type'
                      name='typeRide'
                      className='form-control'
                      value={this.state.typeRide}
                      onChange={this.changeRideHandler}>
                      <option value='' defaultValue>
                        --Please select an option--
                      </option>
                      <option value='sedan'>sedan</option>
                      <option value='hatchback'>hatchback</option>
                      <option value='bike'>bike</option>
                      <option value='suv'>suv</option>
                      <option value='auto'>auto</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Wifi: </label>
                    <select
                      placeholder='Wifi'
                      name='wifi'
                      className='form-control'
                      value={this.state.wifi}
                      onChange={this.changeWifiHandler}>
                      <option value='' defaultValue>
                        --Please select an option--
                      </option>
                      <option value='1'>Yes</option>
                      <option value='0'>No</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Ac: </label>
                    <select
                      placeholder='Ac'
                      name='ac'
                      className='form-control'
                      value={this.state.ac}
                      onChange={this.changeAcHandler}>
                      <option value='' defaultValue>
                        --Please select an option--
                      </option>
                      <option value='1'>Yes</option>
                      <option value='0'>No</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Company: </label>
                    <input
                      placeholder='Company'
                      name='company'
                      className='form-control'
                      value={this.state.company}
                      onChange={this.changeCompanyHandler}
                      list='company-options'
                      autoComplete='off'
                    />
                    <datalist id='company-options'>
                      <option value=''>--Please select an option--</option>
                      {this.state.vehicles.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.company}>
                          {vehicle.company}
                        </option>
                      ))}
                    </datalist>
                  </div>
                  <div className='form-group'>
                    <label>Model: </label>
                    <input
                      placeholder='Model'
                      name='model'
                      className='form-control'
                      value={this.state.model}
                      onChange={this.changeModelHandler}
                      list='model-options'
                    />
                    <datalist id='model-options'>
                      <option value=''>--Please select an option--</option>
                      {this.state.vehicles.map((vehicle) => (
                        <option key={vehicle.id} value={vehicle.model}>
                          {vehicle.model}
                        </option>
                      ))}
                    </datalist>
                  </div>
                  <div className='form-group'>
                    <label>VIN: </label>
                    <input
                      placeholder='VIN'
                      name='vin'
                      className='form-control'
                      value={this.state.vin}
                      onChange={this.changeVinHandler}
                      autoComplete='off'
                    />
                  </div>
                  <div className='p-2'></div>
                  <button
                    className='btn btn-success'
                    onClick={this.saveVehicle}>
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

export default AddVehicle;
