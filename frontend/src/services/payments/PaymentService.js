import axios from 'axios';

const PAYMENTS_API_BASE_URL = 'http://localhost:8080/api/v1/payments';

class PaymentService {
  getPayments() {
    const response = axios.get(PAYMENTS_API_BASE_URL);
    return response;
  }

  postPayment(payment) {
    return axios.post(PAYMENTS_API_BASE_URL, payment);
  }

  getPaymentById(paymentId) {
    return axios.get(PAYMENTS_API_BASE_URL + '/' + paymentId);
  }

  getPaymentByBookingId(bookingId) {
    return axios.get(PAYMENTS_API_BASE_URL + '/bookingId' + bookingId);
  }

  updatePayment(payment, paymentId) {
    return axios.put(PAYMENTS_API_BASE_URL + '/' + paymentId, payment);
  }

  deletePayment(paymentId) {
    return axios.delete(PAYMENTS_API_BASE_URL + '/' + paymentId);
  }
}
export default new PaymentService();
