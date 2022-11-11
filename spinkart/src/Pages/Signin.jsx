import { Box, Button, Container, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function Signin() {
  return (
    <div>
        <Navbar/>
        <div style={{width:"80%", margin: "auto"}}>
        <Box>
          <Heading mt={8}>Login Now</Heading>
        </Box>

        <FormControl style={{width:"100%"}}>
          
          <FormLabel mt={8}>Email address</FormLabel>
          <Input type='email' placeholder='Enter Email Address'/>

          <FormLabel mt={8}>Password</FormLabel>
          <Input type='password' placeholder = "Enter Password"/>

          
          <Box mb={12} style={{display : "flex", alignItem:"center", gap:"50px"}}>
          
          <Button mb={2} mt={8} colorScheme="green" >LOGIN NOW</Button>
         
          <NavLink style={{marginTop : "37px", color:"blue"}} to="/signup">Not Have Any Account ! Register Now</NavLink>

          </Box>
          </FormControl>

        </div>
    </div>
  )
}

export default Signin