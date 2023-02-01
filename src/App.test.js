import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

test('renders learn react link', () => {
  render(<BookingForm/>);
  const linkElement = screen.getByText("Booking a Reservation");
  expect(BookingForm).toBeInTheDocument();
});
