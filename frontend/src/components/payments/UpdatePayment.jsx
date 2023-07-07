import React, { Component } from 'react';
import PaymentService from '../../services/payments/PaymentService';

class UpdatePayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      status: 0,
      method: 'cash',
      payment: null,
    };

    this.changeStatusHandler = this.changeStatusHandler.bind(this);
    this.changeMethodHandler = this.changeMethodHandler.bind(this);

    this.updatePayment = this.updatePayment.bind(this);
  }

  componentDidMount() {
    PaymentService.getPaymentById(this.state.id).then((res) => {
      console.log(res.data);
      let p = res.data;
      this.setState((prevState) => ({
        ...prevState,
        payment: res.data,
        status: p.status,
        method: p.method,
      }));
    });
  }

  updatePayment = (e) => {
    e.preventDefault();
    let updatedPayment = this.state.payment;
    updatedPayment.status = this.state.status;
    updatedPayment.method = this.state.method;
    PaymentService.updatePayment(updatedPayment, this.state.id).then((res) => {
      this.props.history.push('/payments');
    });
    console.log('updatedPayment => ' + JSON.stringify(updatedPayment));
  };

  cancel() {
    this.props.history.push('/payments');
  }

  changeStatusHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      status: event.target.value,
    }));
  };

  changeMethodHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      method: event.target.value,
    }));
  };

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Update Payments</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>Method: </label>
                    <select
                      placeholder='Method'
                      name='method'
                      className='form-control'
                      value={this.state.method}
                      onChange={this.changeMethodHandler}>
                      <option value='' defaultValue>
                        --Please select an option--
                      </option>
                      <option value='upi'>upi</option>
                      <option value='cash'>cash</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label>Status: </label>
                    <select
                      placeholder='Status'
                      name='status'
                      className='form-control'
                      value={this.state.status}
                      onChange={this.changeStatusHandler}>
                      <option value='' defaultValue>
                        --Please select an option--
                      </option>
                      <option value='1'>1</option>
                      <option value='0'>0</option>
                    </select>
                  </div>
                  <div className='p-2'></div>
                  <button
                    className='btn btn-success'
                    onClick={this.updatePayment}>
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

export default UpdatePayment;
