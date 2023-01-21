import React from 'react';
import './App.css';
import logo from './images/logo.png';
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Nav />
      <Main />
    </React.Fragment>
  );
  };

export default App;
