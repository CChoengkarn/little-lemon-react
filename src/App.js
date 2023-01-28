import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import HomePage from './components/HomePage';
import BookingPage from "./components/BookingPage";
import { fetchAPI, submitAPI } from "./server/api";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Home from './components/Home';
import Menu from './components/Menu';
import OrderOnline from './components/OrderOnline';
import About from './components/About';
import Login from './components/Login';

function App() {
  function initializeTimes() {
    const times = {
      times: [...fetchAPI(new Date())],
    };
    return times;
  }

  function reducer(state, action) {
    const newBookingDate = action.setBookingDate;
    const newTimes = fetchAPI(newBookingDate);
    return { times: [...newTimes] };
  }

  function submitForm(formData) {
    const success = submitAPI(formData);
    if (success) {
      window.location.href = "/confirmedbooking";
    }
  }

  const initialState = initializeTimes();
  const [availableTimes, setAvailableTimes] = useReducer(reducer, initialState);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmedbooking" element={<ConfirmedBooking />} />
      <Route path="/home" element={<Home />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/order online" element={<OrderOnline />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}


export default App;
