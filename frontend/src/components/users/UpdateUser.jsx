import React, { Component } from 'react';
import UserService from '../../services/users/UserService';

class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      firstName: null,
      lastName: null,
      addrStreet: null,
      addrLocality: null,
      addrCity: null,
      addrState: null,
      addrPin: null,
      phone: null,
      email: null,
      password: null,
      age: 0,
      emerContact: null,
      subscription: 0,
      gender: null,
      aadhar: null,
      payId: null,
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeAddrStreetHandler = this.changeAddrStreetHandler.bind(this);
    this.changeAddrLocalityHandler = this.changeAddrLocalityHandler.bind(this);
    this.changeAddrCityHandler = this.changeAddrCityHandler.bind(this);
    this.changeAddrStateHandler = this.changeAddrStateHandler.bind(this);
    this.changeAddrPinHandler = this.changeAddrPinHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.changeAgeHandler = this.changeAgeHandler.bind(this);
    this.changeEmerContactHandler = this.changeEmerContactHandler.bind(this);
    this.changeSubscriptionHandler = this.changeSubscriptionHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeAadharHandler = this.changeAadharHandler.bind(this);
    this.changePayIdHandler = this.changePayIdHandler.bind(this);

    this.saveUser = this.saveUser.bind(this);
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      let user = res.data;
      console.log(JSON.stringify(user));
      this.setState({
        firstName: user.firstName,
        lastName: user.lastName,
        addrStreet: user.addrStreet,
        addrLocality: user.addrLocality,
        addrCity: user.addrCity,
        addrState: user.addrState,
        addrPin: user.addrPin,
        phone: user.phone,
        email: user.email,
        password: user.password,
        age: user.age,
        emerContact: user.emerContact,
        subscription: user.subscription,
        gender: user.gender,
        aadhar: user.aadhar,
        payId: user.payId,
      });
    });
  }

  saveUser = (e) => {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      addrStreet: this.state.addrStreet,
      addrLocality: this.state.addrLocality,
      addrCity: this.state.addrCity,
      addrState: this.state.addrState,
      addrPin: this.state.addrPin,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      age: this.state.age,
      emerContact: this.state.emerContact,
      subscription: this.state.subscription,
      gender: this.state.gender,
      aadhar: this.state.aadhar,
      payId: this.state.payId,
    };

    console.log('user => ' + JSON.stringify(user));
    UserService.updateUser(user, this.state.id).then((res) => {
      this.props.history.push('/users');
    });
  };

  cancel() {
    this.props.history.push('/users');
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

  changeEmerContactHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      emerContact: event.target.value,
    }));
  };

  changePayIdHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      payId: event.target.value,
    }));
  };

  changePasswordHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };

  changeEmailHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  };

  changeSubscriptionHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      subscription: event.target.value,
    }));
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
                    <label>Email: </label>
                    <input
                      placeholder='Email'
                      name='email'
                      type='email'
                      className='form-control'
                      value={this.state.email || ''}
                      onChange={this.changeEmailHandler}
                      autoComplete='off'
                    />
                  </div>

                  <div className='form-group'>
                    <label>Password: </label>
                    <input
                      placeholder='Password'
                      name='password'
                      type='password'
                      className='form-control'
                      value={this.state.password || ''}
                      onChange={this.changePasswordHandler}
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
                    <label>Emergency Contact: </label>
                    <input
                      placeholder='Emergency Contact'
                      name='emerContact'
                      type='number'
                      className='form-control'
                      value={this.state.emerContact || ''}
                      onChange={this.changeEmerContactHandler}
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
                    <label>Subscription: </label>
                    <select
                      placeholder='Subscription'
                      name='subscription'
                      className='form-control'
                      value={this.state.subscription}
                      onChange={this.changeSubscriptionHandler}>
                      <option value='' defaultValue>
                        --Please select an option--
                      </option>
                      <option value='1'>1</option>
                      <option value='0'>0</option>
                    </select>
                  </div>

                  <div className='p-2'></div>
                  <button className='btn btn-success' onClick={this.saveUser}>
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

export default UpdateUser;
