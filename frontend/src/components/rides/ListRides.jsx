import React, { Component } from 'react';
import RideService from '../../services/rides/RideService';

class ListRides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rides: [],
    };

    this.addRide = this.addRide.bind(this);
    this.editRide = this.editRide.bind(this);
    this.deleteRide = this.deleteRide.bind(this);
  }

  deleteRide(id) {
    RideService.deleteRide(id)
      .then((res) => {
        this.setState({
          rides: this.state.rides.filter((ride) => ride.id !== id),
        });
        console.log('Deleted');
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
    this.props.history.push('/rides');
  }

  editRide(id) {
    this.props.history.push(`/updateRide/${id}`);
  }

  componentDidMount() {
    RideService.getRides().then((res) => {
      this.setState({ rides: res.data });
    });
  }

  addRide() {
    this.props.history.push('/addRide');
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Rides List</h2>
        <div className='row'>
          <button className='btn btn-primary' onClick={this.addRide}>
            Add Ride
          </button>
        </div>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th> ID </th>
                <th> Pickup </th>
                <th> Destination </th>
                <th> Duration</th>
                <th> Fare </th>
                <th> Distance </th>
              </tr>
            </thead>
            <tbody>
              {this.state.rides.map((ride) => (
                <tr key={ride.id}>
                  <td>{ride.id}</td>
                  <td>{ride.pickup}</td>
                  <td>{ride.destination}</td>
                  <td>{ride.duration / 60} hours</td>
                  <td>₹{ride.fare}</td>
                  <td>{ride.distance}kms</td>
                  <td>
                    <button
                      onClick={() => this.editRide(ride.id)}
                      className='btn btn-primary mx-2'>
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteRide(ride.id)}
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

export default ListRides;
