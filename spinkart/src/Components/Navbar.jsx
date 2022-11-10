import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/spin.png"

function Navbar() {
  const [text,setText] = useState("")
  const [value,setValue] = useState("");

  const searchData = (e) => {
    setText(e.target.value);
    
  }
  const handleClick = () => {
    setValue(text);
  }
 
  return (
    <div style={{border:"1px solid blue", backgroundColor : "#2874F0", paddingTop:"5px", paddingBottom:"5px", display:"flex"}}>
       <div style={{width : "70%",display:"flex", alignItems:"center", marginLeft:"150px"}}>
        <Link path = "/" to ="/">
            <img style={{width:"150px"}} src={logo} alt='logo'/>
        </Link>
        <Input style={{backgroundColor : "white", height:"35px",width:"340px", borderTopRightRadius : "0px", borderBottomRightRadius:"0px", marginLeft:"50px"}} 
        type="text" placeholder = "Search Here" value={text} onChange = {searchData}/>

        <button style={{backgroundColor :"white",width:"80px" , lineHeight:"35px", padding:"0px", borderBottomRightRadius : "10px",borderTopRightRadius : "10px",paddingLeft:"10px", paddingRight:"10px"}} onClick={handleClick}>Search</button>
       </div>
       <div style={{width:"32%", color:"white",display:"flex", gap:"20px",alignItems:"center"}} >
        <Link path = "/about" to = "/about">About</Link>
        <Link path = "/contact" to = "/contact">Contact</Link>
        <Link path = "/signin" to = "/signin">Sign In</Link>
        <Link path = "/sinup" to = "/signup">Sign Up</Link>
       </div>
    </div>
  )
}

export default Navbar



// <Link path='/' to='/'>Home</Link>
// <Link path='/about' to='/about'>About</Link>
// <Link path = '/contact' to='/contact'>Contact</Link>
// <Link path = '/signin' to='/signin'>Sign In</Link>
// <Link path = '/signup' to='/signup'>Sign Up</Link>