import React from 'react';
import Footer from './Footer';
import Header from './Header';
import BookTable from './BookTable';
import Nav from './Nav';

const BookingPage = ({ availableTimes, setAvailableTimes, submitForm }) => {
    return (
        <div>
        <Header />
        <Nav />
        <BookTable
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        submitForm={submitForm}
            />
            <Footer />
        </div>

    )
}

export default BookingPage;