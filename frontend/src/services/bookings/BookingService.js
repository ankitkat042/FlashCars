import axios from 'axios';

const BOOKING_API_BASE_URL = 'http://localhost:8080/api/v1/bookings';

class BookingService {
  getBookings() {
    const response = axios.get(BOOKING_API_BASE_URL);
    return response;
  }

  postBooking(booking) {
    return axios.post(BOOKING_API_BASE_URL, booking);
  }

  postBookingPayment(booking, payment) {
    return axios.post(BOOKING_API_BASE_URL + '/bookings&payments', {
      booking: booking,
      payment: payment,
    });
  }

  getBookingById(bookingId) {
    return axios.get(BOOKING_API_BASE_URL + '/' + bookingId);
  }

  updateBooking(booking, bookingId) {
    return axios.put(BOOKING_API_BASE_URL + '/' + bookingId, booking);
  }

  deleteBooking(bookingId) {
    return axios.delete(BOOKING_API_BASE_URL + '/' + bookingId);
  }
}
export default new BookingService();
