import React from 'react';
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';


function App() {
  return (
    <React.Fragment>
     <Header/>
     <Nav/>
     <Main/>
     <Footer/>
    </React.Fragment>
  );
  }

export default App;
