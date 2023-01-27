import React from "react"
import Footer from "./Footer";
import Header from "./Header";
import BookTable from "./BookTable";

const BookingPage = ({ availableTimes, setAvailableTimes, submitForm }) => {
    return (
        <div>
        <Header />
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