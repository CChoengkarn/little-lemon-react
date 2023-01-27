import React from 'react';
import Footer from "./Footer";
import Header from "./Header";


function ConfirmedBooking() {
    return (
     <>
     <Header />
     <div className="confirmedbooking">
        <div className="container">
            <h1>Your table has been booked! See you then!</h1>
        </div>
     </div>
     <Footer />
     </>

    );
};

export default ConfirmedBooking;