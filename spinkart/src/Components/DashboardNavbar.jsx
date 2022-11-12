import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Input, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/spin.png"
import { AuthContext } from '../Context/AuthContext';

function DashboardNavbar() {
  const [text,setText] = useState("")
  const [value,setValue] = useState("");
  const {authState,logoutUser} = useContext(AuthContext);
  const searchData = (e) => {
    setText(e.target.value);
    
  }
  const handleClick = () => {
    setValue(text);
  }
 
  return (
    <div style={{border:"1px solid blue", backgroundColor : "#2874F0", paddingTop:"5px", paddingBottom:"5px", display:"flex"}}>
       <div style={{width : "70%",display:"flex", alignItems:"center", marginLeft:"150px"}}>
        <Link path = "/dashboard" to ="/dashboard">
            <img style={{width:"150px"}} src={logo} alt='logo'/>
        </Link>
        <Input style={{backgroundColor : "white", height:"35px",width:"340px", borderTopRightRadius : "0px", borderBottomRightRadius:"0px", marginLeft:"50px"}} 
        type="text" placeholder = "Search Here" value={text} onChange = {searchData}/>

        <button style={{backgroundColor :"white",width:"80px" , lineHeight:"35px", padding:"0px", borderBottomRightRadius : "10px",borderTopRightRadius : "10px",paddingLeft:"10px", paddingRight:"10px"}} onClick={handleClick}>Search</button>
       </div>
       <div style={{width:"20%", color:"white",display:"flex", gap:"20px",alignItems:"center"}} >
       <Link >About</Link>
       <Menu>
            <MenuButton as={Button} colorScheme = "transparent" rightIcon={<ChevronDownIcon />}>
              Mukesh Kaushal
            </MenuButton>
            <MenuList color="black">
              <MenuItem><Link path="/dashboard/addProduct" to = "/dashboard/addProduct">Dashboard</Link></MenuItem>
              <MenuItem><Link path="/dashboard/account-info" to = "/dashboard/account-info">Account Information</Link></MenuItem>
              <MenuItem><Link path="/dashboard/notification" to="/dashboard/notification">Notifications</Link></MenuItem>
              <MenuItem onClick={logoutUser}>Sign Out</MenuItem>
          
            </MenuList>
        </Menu>
       </div>
    </div>
  )
}

export default DashboardNavbar;



// <Link path='/' to='/'>Home</Link>
// <Link path='/about' to='/about'>About</Link>
// <Link path = '/contact' to='/contact'>Contact</Link>
// <Link path = '/signin' to='/signin'>Sign In</Link>
// <Link path = '/signup' to='/signup'>Sign Up</Link>