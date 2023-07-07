import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className='homepage-container'>
      <div className='homepage-content'>
      <h2 className='homepage-title'>
          Welcome to <span className='yellow-text'>Flash</span>
          <span className='red-text'>Cars</span>
        </h2>
        <p className='homepage-subtitle'>
          Please choose from the options below:
        </p>
        <div className='homepage-row'>
          <div className='homepage-column'>
            <Link to='/addBooking' className='homepage-link'>
              Add Booking
            </Link>
          </div>
          <div className='homepage-column'>
            <Link to='/vehicles' className='homepage-link'>
              View Vehicles
            </Link>
          </div>
          <div className='homepage-column'>
            <Link to='/addVehicle' className='homepage-link'>
              Add Vehicle
            </Link>
          </div>
        </div>
        <div className='homepage-row'>
          <div className='homepage-column'>
            <Link to='/users' className='homepage-link'>
              View Users
            </Link>
          </div>
          <div className='homepage-column'>
            <Link to='/addUser' className='homepage-link'>
              Add User
            </Link>
          </div>
          <div className='homepage-column'>
            <Link to='/bookings' className='homepage-link'>
              View Bookings
            </Link>
          </div>
        </div>
        <div className='homepage-row'>
          <div className='homepage-column'>
            <Link to='/payments' className='homepage-link'>
              View Payments
            </Link>
          </div>
          <div className='homepage-column'>
            <Link to='/rides' className='homepage-link'>
              View Rides
            </Link>
          </div>
          <div className='homepage-column'>
            <Link to='/drivers' className='homepage-link'>
              View Drivers
            </Link>
          </div>
        </div>
        <div className='homepage-contact'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <p>
          <span className='white-text'>Made By: Ankit Kumar and Aryan Rohilla</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
