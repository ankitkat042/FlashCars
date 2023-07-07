import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListVehicles from './components/vehicles/ListVehicles';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddVehicle from './components/vehicles/AddVehicle';
import Homepage from './components/Homepage';
import UpdateVehicle from './components/vehicles/UpdateVehicle';
import AddBooking from './components/bookings/AddBooking';
import ListBookings from './components/bookings/ListBookings';
import UpdateBooking from './components/bookings/UpdateBooking';
import AddDriver from './components/drivers/AddDriver';
import ListDrivers from './components/drivers/ListDrivers';
import UpdateDriver from './components/drivers/UpdateDriver';
import AddPayment from './components/payments/AddPayment';
import ListPayments from './components/payments/ListPayments';
import UpdatePayment from './components/payments/UpdatePayment';
import AddRide from './components/rides/AddRide';
import ListRides from './components/rides/ListRides';
import UpdateRide from './components/rides/UpdateRide';
import AddUser from './components/users/AddUser';
import ListUsers from './components/users/ListUsers';
import UpdateUser from './components/users/UpdateUser';
import Login from './components/Login'

function App() {
  return (
    <div>
      <HeaderComponent />
      <Router>
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/bookings' component={ListBookings} />
            <Route path='/addBooking' component={AddBooking} />
            <Route path='/updateBooking/:id' component={UpdateBooking} />
            <Route path='/drivers' component={ListDrivers} />
            <Route path='/addDriver' component={AddDriver} />
            <Route path='/updateDriver/:id' component={UpdateDriver} />
            <Route path='/payments' component={ListPayments} />
            <Route path='/updatePayment/:id' component={UpdatePayment} />
            <Route path='/rides' component={ListRides} />
            <Route path='/addRide' component={AddRide} />
            <Route path='/updateRide/:id' component={UpdateRide} />
            <Route path='/users' component={ListUsers} />
            <Route path='/addUser' component={AddUser} />
            <Route path='/updateUser/:id' component={UpdateUser} />
            <Route path='/vehicles' exact component={ListVehicles} />
            <Route path='/addVehicle' exact component={AddVehicle} />
            <Route path='/updateVehicle/:id' exact component={UpdateVehicle} />
            <Route path='/homepage' component={Login} />
            <FooterComponent />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
