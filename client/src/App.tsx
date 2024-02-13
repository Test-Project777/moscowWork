import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './page/Main/Main';
import About from './page/About/About';
import Contact from './page/Contact/Contact';
import Login from './page/Login/Login';
import Registr from './page/Registr/Registr';
import Footer from './ui/Footer/Footer';
import Navbar from './ui/Navbar/Navbar';
import Account from './page/Account/Account';

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registr />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
