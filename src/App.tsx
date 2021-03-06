import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';
import Routpage from './components/routpage';
import Login from './components/login';
import Register from './components/register';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routpage/>
    <Footer/>     
    </BrowserRouter>
       
    </>
  );
}

export default App;
