import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Product from './Product';
import Signin from './Signin';
import NotFound from './NotFound';
import PrivacyPolicy from './PrivacyPolicy';
import Dashboard from './Dashboard';
import DashboardAbout from './DashboardAbout';
import PrivateRoute from "../Context/PrivateRoute"
import DashboardProduct from './DashboardProduct';
// import Signup from './Signup';

function AllRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='*' element = {<NotFound/>}></Route>
        <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
        <Route path='/products/:id' element={<PrivateRoute><DashboardProduct/></PrivateRoute>}></Route>
        <Route path='/dashboard/about' element = {<PrivateRoute><DashboardAbout/></PrivateRoute>}></Route>
       
    </Routes>
  )
}

export default AllRouter;