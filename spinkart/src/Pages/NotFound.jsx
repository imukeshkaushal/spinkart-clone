import { ArrowBackIcon } from '@chakra-ui/icons'
import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function NotFound() {
  return (
    <div>
        <Navbar/>
        <img style = {{width:"100%"}} src='https://ideakart.com/assets/youridea-23d18c0fab7feb4d66e4c1dbc419428c71b2014ff742fc52b4006f6b65af6b67.jpg' alt='img'/>
        
        <div style={{textAlign : "center", marginTop : "12%", position:"absolute", top:"10px", left:"32%"}}>
        <Heading size='lg' fontSize='50px'>
          Sorry ! Page Not Found
        </Heading>
          <Text mt={8} mb={8}>404 Error Occured! Please Go to HomePage</Text>
          <ArrowBackIcon mr={4} color = "blue"/>
          <NavLink to='/' className="Link">Go To Home Page</NavLink>
        </div>
    </div>
  )
}

export default NotFound