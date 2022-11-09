import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';

function AllRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default AllRouter;