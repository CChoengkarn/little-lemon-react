import React, { useState } from "react";
import ConfirmedBooking from './ConfirmedBooking';
import { Link } from "react-router-dom";


const BookingForm = () => {
  const [name, setName] = useState('');
  const [availableTimes, setAvailableTimes] = useState('17:00');
  const [date, setDate] = useState('');
  const [email, setEmail] = useState('');
  const [guest, setGuest] = useState('');
  const [occasion, setOccasion] = useState('');
  console.log("Date" , date);

  const handleSubmit = (e) => {e.preventDefault()
    const answer=window.confirm("Reservation has been submitted")
  }

  return (
    <div className="formInput">
      <h2>Booking a Reservation</h2>
      <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}

      />
      <label>Time</label>
      <select
        value={availableTimes}
        onChange={(e) => setAvailableTimes(e.target.value)}
      >
      <option value="17:00">17:00</option>
      <option value="18:00">18:00</option>
      <option value="19:00">19:00</option>
      <option value="20:00">20:00</option>
      <option value="21:00">22:00</option>
      <option value="22:00">22:00</option>
      </select>

      <label htmlFor="Date">Date</label>
      <input
        type="date"
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
      <label htmlFor="Number of Guests">Number Of Guests</label>
      <input
        type="number"
        min="1"
        max="10"
        value={guest}
        required
        onChange={(e) => setGuest(e.target.value)}
      />
      <label htmlFor="Occasion">Occasion</label>
      <select
      type="occasion"
      value={occasion}
      onChange={(e) => setOccasion(e.target.value)}
      >
       <option value="birthday">Birthday</option>
       <option value="Anniversary">Anniversary</option>
       <option value="other">Other</option>
       </select>
       <Link to="/confirmedbooking">
      <button type="submit">Submit</button>
      </Link>
      </form>
      </div>
  )
  }

export default BookingForm;



