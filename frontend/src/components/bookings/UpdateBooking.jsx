import React, { Component } from 'react';
import RideService from '../../services/rides/RideService';
import DriverService from '../../services/drivers/DriverService';
import BookingService from '../../services/bookings/BookingService';
import PaymentService from '../../services/payments/PaymentService';

class UpdateBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      rides: [],
      user: {
        id: 1,
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
      },
      bookings: [],
      status: '',
      bookingTime: '',
      startTime: '',
      endTime: '',
      rideId: null,
      ride: null,
      paymentMethod: null,
      payment: null,
    };

    this.changeStartTimeHandler = this.changeStartTimeHandler.bind(this);
    this.changeRideHandler = this.changeRideHandler.bind(this);
    this.changePaymentMethodHandler =
      this.changePaymentMethodHandler.bind(this);

    this.saveBooking = this.saveBooking.bind(this);
  }

  componentDidMount() {
    this.getRides();
    BookingService.getBookingById(this.state.id).then((res) => {
      let booking = res.data;
      console.log(booking);
      this.setState({
        status: booking.status,
        bookingTime: booking.bookingTime,
        startTime: booking.startTime,
        endTime: booking.endTime,
        rideId: booking.ride.id,
        ride: booking.ride,
      });
    });
    PaymentService.getPaymentByBookingId(this.state.id).then((res) => {
      let payment = res.data;
      console.log(payment.id);
      this.setState((prevState) => ({
        ...prevState,
        payment,
        paymentMethod: payment.method,
      }));
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

  saveBooking = async (e) => {
    e.preventDefault();
    let booking = {
      status: this.state.status,
      bookingTime: Math.floor(Date.now() / 1000),
      startTime: this.state.startTime,
      ride: this.state.ride,
      endTime: this.state.startTime + this.state.ride.duration * 60,
    };
    let updatedPayment = this.state.payment;
    updatedPayment.method = this.state.paymentMethod;
    updatedPayment.driver = booking.ride.driver;
    console.log('booking => ' + JSON.stringify(booking));
    console.log('updatedPayment => ' + JSON.stringify(updatedPayment));

    Promise.all([
      BookingService.updateBooking(booking, this.state.id),
      PaymentService.updatePayment(updatedPayment, updatedPayment.id),
    ])
      .then((results) => {
        console.log(results);
        this.props.history.push('/bookings');
        window.open('/payments', '_blank');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  cancel() {
    this.props.history.push('/bookings');
  }

  changeStatusHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      status: event.target.value,
    }));
  };

  changePaymentMethodHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      paymentMethod: event.target.value,
    }));
  };

  // changeBookingTimeHandler = (event) => {
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     bookingTime: event.target.value;
  //   }));
  // };

  changeStartTimeHandler = (event) => {
    this.setState(
      (prevState) => ({
        ...prevState,
        startTime: new Date(event.target.value).getTime() / 1000,
      }),
      () => {
        console.log('startTime: ', this.state.startTime);
      }
    );
  };

  formatDateTime = (unixTimestamp) => {
    if (!unixTimestamp) {
      return '';
    }

    const date = new Date(unixTimestamp * 1000);
    const formattedDateTime = date.toISOString().slice(0, 16);
    return formattedDateTime;
  };

  // changeEndTimeHandler = (event) => {
  //   this.setState({ endTime: new Date(event.target.value).getTime() / 1000 });
  //   console.log('endTime: ', this.state.endTime);
  // };

  changeRideHandler = (event) => {
    const rideId = event.target.value;
    this.setState(
      (prevState) => ({ ...prevState, rideId }),
      () => {
        console.log('rideId: ', this.state.rideId);
        // Fetch ride details
        RideService.getRideById(this.state.rideId)
          .then((response) => {
            const ride = response.data;
            this.setState(
              (prevState) => ({ ...prevState, ride }),
              () => {
                console.log('ride: ', this.state.ride);
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
              <h3 className='text-center'>Book a Ride</h3>
              <div className='card-body'>
                <form>
                  {/* <div className='form-group'>
                    <label>Status: </label>
                    <select
                      placeholder='Status'
                      name='status'
                      className='form-control'
                      value={this.state.status}
                      onChange={this.changeStatusHandler}>
                      <option value='' selected>
                        --Please select an option--
                      </option>
                      <option value='0'>Inactive</option>
                      <option value='1'>Active</option>
                    </select>
                  </div> */}
                  <div className='form-group'>
                    <label>Start Time: </label>
                    <input
                      placeholder='Start Time:'
                      name='startTime'
                      className='form-control'
                      type='datetime-local'
                      value={this.formatDateTime(this.state.startTime)}
                      onChange={this.changeStartTimeHandler}></input>
                  </div>
                  <div className='form-group'>
                    <label>Status: </label>
                    <select
                      placeholder='Status:'
                      name='status'
                      className='form-control'
                      value={this.state.status}
                      onChange={this.changeStatusHandler}>
                      <option value='' defaultValue>
                        --Please select an option--
                      </option>
                      <option value='0'>0</option>
                      <option value='1'>1</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Payment Method: </label>
                    <select
                      placeholder='Payment Method:'
                      name='paymentMethod'
                      className='form-control'
                      value={this.state.paymentMethod || ''}
                      onChange={this.changePaymentMethodHandler}>
                      <option value='' defaultValue>
                        --Please select an option--
                      </option>
                      <option value='cash'>cash</option>
                      <option value='upi'>upi</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Ride: </label>
                    <select
                      placeholder='Ride'
                      name='ride'
                      className='form-control'
                      value={this.state.rideId || ''}
                      onChange={this.changeRideHandler}>
                      <option value='' defaultValue>
                        --Please select an option--
                      </option>
                      {this.state.rides.map((ride) => (
                        <option key={ride.id} value={ride.id}>
                          {`${ride.id} - ${ride.pickup} - ${ride.destination}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className='p-2'></div>
                  <button
                    className='btn btn-success'
                    onClick={this.saveBooking}>
                    Save
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: '10px' }}>
                    Cancel
                  </button>
                </form>
                {this.state.ride && (
                  <div className='form-group'>
                    This ride will take {this.state.ride.duration / 60} hours
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateBooking;
