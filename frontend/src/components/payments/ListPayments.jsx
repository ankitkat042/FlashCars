import React, { Component } from 'react';
import PaymentService from '../../services/payments/PaymentService';

class ListPayments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: [],
      payment: null,
    };

    this.editPayment = this.editPayment.bind(this);
    this.deletePayment = this.deletePayment.bind(this);
  }

  cancelPayment(id) {
    let updatedPayment = null;
    PaymentService.getPaymentById(id).then((res) => {
      console.log(res);
      this.setState(
        (prevState) => ({
          ...prevState,
          payment: res.data,
        }),
        () => {
          console.log(this.state.payment);
          updatedPayment = this.state.payment;
          console.log('updatedPayment =>' + JSON.stringify(updatedPayment));
          updatedPayment.status = 0;
          console.log(
            '53. updatedPayment => ' + JSON.stringify(updatedPayment)
          );

          PaymentService.updatePayment(updatedPayment, id)
            .then((response) => {
              console.log(response, id);
              console.log('Payment updated successfully');
              this.props.history.push('/payments');
            })
            .catch((error) => {
              console.log('Error updating Payment\n', id, '\n', error);
            });
        }
      );
    });
  }

  deletePayment(id) {
    PaymentService.deletePayment(id).then((res) => {
      this.setState({
        payments: this.state.payments.filter((payment) => payment.id !== id),
      });
      console.log('Deleted');
    });
    this.props.history.push('/payments');
  }

  editPayment(id) {
    this.props.history.push(`/updatePayment/${id}`);
  }

  componentDidMount() {
    PaymentService.getPayments().then((res) => {
      this.setState({ payments: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className='text-center'>Payments List</h2>
        <div className='row'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th> ID </th>
                <th> Status </th>
                <th> Method </th>
                <th> User - id - firstName - lastName - payId </th>
                <th> Booking </th>
                <th> Driver - id - firstName - lastName - payId </th>
              </tr>
            </thead>
            <tbody>
              {this.state.payments.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.id}</td>
                  <td>{payment.status}</td>
                  <td>{payment.method || 'N/A'}</td>
                  <td>
                    {`${payment.user?.id || 'N/A'} - ${
                      payment.user?.firstName || 'N/A'
                    } - ${payment.user?.lastName || 'N/A'} - ${
                      payment.user?.payId || 'N/A'
                    }`}
                  </td>
                  <td> {`${payment.booking?.id || 'N/A'}`} </td>
                  <td>
                    {`${payment.driver?.id || 'N/A'} - ${
                      payment.driver?.firstName || 'N/A'
                    } - ${payment.driver?.lastName || 'N/A'} - ${
                      payment.driver?.payId || 'N/A'
                    }`}
                  </td>
                  <td>
                    <button
                      onClick={() => this.editPayment(payment.id)}
                      className='btn btn-primary mx-2'>
                      Update
                    </button>
                    <button
                      onClick={() => this.cancelPayment(payment.id)}
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

export default ListPayments;
