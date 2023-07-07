import React, { Component } from 'react';
import DriverService from '../../services/drivers/DriverService';
import UserService from '../../services/users/UserService';

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  deleteUser(id) {
    UserService.deleteUser(id)
      .then((res) => {
        this.setState({
          users: this.state.users.filter((user) => user.id !== id),
        });
        console.log('Deleted');
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
    this.props.history.push('/users');
  }

  editUser(id) {
    this.props.history.push(`/updateUser/${id}`);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  addUser() {
    this.props.history.push('/addUser');
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>User List</h2>
        <div className='row'>
          <button className='btn btn-primary' onClick={this.addUser}>
            Add User
          </button>
        </div>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th> ID </th>
                <th> First Name </th>
                <th> Last Name </th>
                <th> Phone </th>
                <th> Email </th>
                <th> Gender </th>
                <th> Age </th>
                <th> Emergency Contact </th>
                <th> PayId </th>
                <th> Subscription </th>
                <th> Aadhar </th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.age}</td>
                  <td>{user.emerContact}</td>
                  <td>{user.payId}</td>
                  <td>{user.subscription}</td>
                  <td>{user.aadhar}</td>
                  <td>
                    <button
                      onClick={() => this.editUser(user.id)}
                      className='btn btn-primary mx-2'>
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteUser(user.id)}
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

export default ListUsers;
