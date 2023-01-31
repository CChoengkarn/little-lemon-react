import React from "react";
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import loginpage from '../images/loginpage.png';

const Login = () => {
    return (
        <div className="login">
            <Header />
            <Nav />
            <div className="logintitle">
             <h1>Login Here</h1>
             <img src={loginpage} alt="loginpage" className="loginpage" />
        </div>
    <Footer />
        </div>
    );
};


export default Login;