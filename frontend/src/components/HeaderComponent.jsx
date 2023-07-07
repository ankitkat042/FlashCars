import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div>
              <Link to='/' className='navbar-brand'>
                FlashCars
              </Link>
            </div>
            <div>
              <Link to='/bookings' className='navbar-brand'>
                Book a Ride
              </Link>
            </div>
            <div>
              <Link to='/payments' className='navbar-brand'>
                Payments
              </Link>
            </div>
            <div>
              <Link to='/rides' className='navbar-brand'>
                Rides
              </Link>
            </div>
            <div>
              <Link to='/users' className='navbar-brand'>
                Users
              </Link>
            </div>
            <div>
              <Link to='/vehicles' className='navbar-brand'>
                Vehicles
              </Link>
            </div>
            <div>
              <Link to='/drivers' className='navbar-brand'>
                Drivers
              </Link>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
