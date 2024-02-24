import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './page/Main/Main';
import About from './page/About/About';
import Contact from './page/Contact/Contact';
import Login from './page/Login/Login';
import Registr from './page/Registr/Registr';
import Footer from './ui/Footer/Footer';
import Navbar from './ui/Navbar/Navbar';
import Account from './page/Account/Account';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import Jobs from './page/Jobs/Jobs';
import { thunkCheckAuth } from './redux/slices/auth/createAsyncThunks';
import { thunkLoadVacansy } from './redux/slices/vacansy/createAsyncThunk';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((store) => store.authSlice);
  console.log(user);
  useEffect(() => {
    void dispatch(thunkCheckAuth());
    void dispatch(thunkLoadVacansy());
  }, []);
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route element={<PrivateRouter isAllowed={!!user} />}> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registr />} />
        {/* </Route> */}
        <Route path="/account" element={<Account />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
