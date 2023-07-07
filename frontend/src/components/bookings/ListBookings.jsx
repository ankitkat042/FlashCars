import React, { Component } from 'react';
import BookingService from '../../services/bookings/BookingService';

class ListBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      booking: null,
    };

    this.addBooking = this.addBooking.bind(this);
    this.editBooking = this.editBooking.bind(this);
    this.deleteBooking = this.deleteBooking.bind(this);
  }

  deleteBooking(id) {
    BookingService.deleteBooking(id)
      .then((res) => {
        this.setState({
          bookings: this.state.bookings.filter((booking) => booking.id !== id),
        });
        console.log('Deleted');
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
    this.props.history.push(`/deleteBooking/${id}`);
  }

  cancelBooking(id) {
    let updatedBooking = null;
    BookingService.getBookingById(id).then((res) => {
      console.log(res);
      this.setState(
        (prevState) => ({
          ...prevState,
          booking: res.data,
        }),
        () => {
          console.log(this.state.booking);
          updatedBooking = this.state.booking;
          console.log('updateBooking =>' + JSON.stringify(updatedBooking));
          updatedBooking.status = 0;
          console.log(
            '53. updatedBooking => ' + JSON.stringify(updatedBooking)
          );

          BookingService.updateBooking(updatedBooking, id)
            .then((response) => {
              console.log(response, id);
              console.log('Booking updated successfully');
              this.props.history.push('/bookings');
            })
            .catch((error) => {
              console.log('Error updating Booking\n', id, '\n', error);
            });
        }
      );
    });
  }

  editBooking(id) {
    this.props.history.push(`/updateBooking/${id}`);
  }

  componentDidMount() {
    BookingService.getBookings().then((res) => {
      this.setState({ bookings: res.data });
    });
  }

  addBooking() {
    this.props.history.push('/addBooking');
  }

  formatDateTime = (unixTimestamp) => {
    if (!unixTimestamp) {
      return '';
    }

    const date = new Date(unixTimestamp * 1000);
    const formattedDateTime = date.toISOString().slice(0, 16);
    return formattedDateTime;
  };

  render() {
    return (
      <div>
        <h2 className='text-center'>Bookings List</h2>
        <div className='row'>
          <button className='btn btn-primary' onClick={this.addBooking}>
            Add Booking
          </button>
        </div>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th> ID </th>
                <th> Status </th>
                <th> Booking Time </th>
                <th> Start Time </th>
                <th> End Time </th>
                <th> Ride </th>
                <th> Driver - FirstName - LastName</th>
                <th> Vehicle - Company - VIN </th>
              </tr>
            </thead>
            <tbody>
              {this.state.bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>
                  <td>{booking.status}</td>
                  <td>
                    {new Date(booking.bookingTime * 1000).toLocaleString()}
                  </td>
                  <td>{new Date(booking.startTime * 1000).toLocaleString()}</td>
                  <td>{new Date(booking.endTime * 1000).toLocaleString()}</td>
                  <td>
                    {booking.ride
                      ? `${booking.ride.id || 'N/A'} - ${
                          booking.ride.pickup || 'N/A'
                        } - ${booking.ride.destination || 'N/A'}`
                      : 'N/A'}
                  </td>
                  <td>
                    {booking.ride && booking.ride.driver
                      ? `${booking.ride.driver.id || 'N/A'} - ${
                          booking.ride.driver.firstName || 'N/A'
                        } - ${booking.ride.driver.lastName || 'N/A'}`
                      : 'N/A'}
                  </td>
                  <td>
                    {booking.ride && booking.ride.vehicle
                      ? `${booking.ride.vehicle.id || 'N/A'} - ${
                          booking.ride.vehicle.company || 'N/A'
                        } - ${booking.ride.vehicle.vin || 'N/A'}`
                      : 'N/A'}
                  </td>
                  <td>
                    <button
                      onClick={() => this.editBooking(booking.id)}
                      className='btn btn-primary mx-2'>
                      Update
                    </button>
                    <button
                      onClick={() => {
                        console.log(booking.id);
                        this.cancelBooking(booking.id);
                      }}
                      className='btn btn-danger'>
                      Cancel
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

export default ListBookings;
