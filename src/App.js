import React from 'react'
import './App.css';
import logo from './images/logo.png';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Reservation from './pages/Reservation'
import OrderOnline from './pages/OrderOnline'
import Login from './pages/Login'
import BookingForm from './components/BookingForm'
import BookingPage from './components/BookingPage'
import { useState } from "react";
import ConfirmedBooking from './components/ConfirmedBooking'

function Info() {
  const [info, setInfo] = useState(
    {
      date: "",
      time: "",
      occasion: "",
    }
  );
  function putInfo() {
    setInfo(prevState => {
      return {
        ...prevState,
      }
    })
  }
}


function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/OrderOnline" element={<OrderOnline />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/BookingPage" element={<BookingPage />}></Route>
        <Route path="./ConfirmedBooking" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Main />
      <BookingForm />
      <BookingPage />
      <Footer />
    </React.Fragment>
  );
  };

export default App;
