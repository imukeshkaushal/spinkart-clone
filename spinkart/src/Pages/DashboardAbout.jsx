import React from 'react'
import { Link } from 'react-router-dom'
import DashboardNavbar from '../Components/DashboardNavbar'
// import Navbar from '../Components/Navbar'

function DashboardAbout() {
  return (
    <div>
        <DashboardNavbar/>
        <div style={{width:"80%", margin:"auto", marginTop : "20px", fontSize:"20px"}}>
          <p>Ideakart is a site that gives u an idea about the book you want to buy. We offer a huge collection of books in diverse categories.
          <br/>
          <br/>
          We have a user friendly search engine and a quick delivery system. With this we even provide best discounts on our books. You can write to us for any idea or any help you need.
          <br/>
          <br/>
          
          Ideakart is a site that gives u an idea and a platform for the book you want. We offer a huge collection of books in diverse categories.
          
          We have a user friendly search engine and a quick delivery system. With this we even provide best discounts on our books. You can write to us for any idea or any help you need.</p>

          <div style={{marginTop : "50px"}}>
            <ul> Get to Know Us
              <br/>
              <br/>
              
              <div style={{marginLeft:"70px", color : "blue"}}>
                <li ><Link path = "/dashboard" to = "/dashboard">Home</Link></li>
                <li ><Link path = "/dashboard" to = "/dashboard">Contact</Link></li>
                <li ><Link path = "/dashboard" to = "/dashboard">Privacy Policy</Link></li>
                <li ><Link path = "/dashboard" to = "/dashboard">Refund Policy</Link></li>
              </div>
              
            </ul>
          </div>
        
          </div>

        
    </div>
  )
}

export default DashboardAbout