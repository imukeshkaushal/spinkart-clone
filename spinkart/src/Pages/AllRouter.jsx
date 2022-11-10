import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Product from './Product';
import Signin from './Signin';
import NotFound from './NotFound';
import Signup from './Signup';

function AllRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='*' element = {<NotFound/>}></Route>
    </Routes>
  )
}

export default AllRouter;