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
import { useAppSelector } from './redux/hooks';
import PrivateRouter from './components/HOC/PrivateRouter';

function App(): JSX.Element {
  const user = useAppSelector((store) => store.authSlice.user);
  console.log(user);

  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<PrivateRouter isAllowed={!!user} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registr />} />
        </Route>
        <Route path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
