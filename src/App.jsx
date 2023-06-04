import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/aboutus/About'
import BloodBank from './components/bloodbank/BloodBank'
import Cause from './components/cause/Cause'
import ContactUs from './components/contactus/ContactUs'
import DonateUs from './components/donateus/DonateUs'
import Footer from './components/footer/Footer'
import ForgotPassword from './components/forgotpassword/ForgotPassword'
import Navbar from './components/header/Navbar'
import Home from './components/Home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/home' element={<Home/> } />
        <Route path='/aboutus' element={<About/> } />
        <Route path='/bloodbank' element={<BloodBank/> } />
        <Route path='/cause' element={<Cause/> } />
        <Route path='/contactus' element={<ContactUs/> } />
        <Route path='/donateus' element={<DonateUs/> } />
        <Route path='/fotgotpassword' element={<ForgotPassword/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/register' element={<Register/> } />
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App