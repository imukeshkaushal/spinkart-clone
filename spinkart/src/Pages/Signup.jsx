import { Box, Button, Container, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function Signup() {
  return (
    <div>
        <Navbar/>
        <div style={{width:"80%", margin: "auto"}}>
        <Box>
          <Heading mt={8}>Sign Up</Heading>
        </Box>

        <FormControl style={{width:"100%"}}>
          <FormLabel mt={8}>Name</FormLabel>
          <Input type='text' placeholder='Enter Full Name'/>
          
          <FormLabel mt={8}>Mobile Number</FormLabel>
          <Input type='mobile' placeholder='Enter Your Mobile Number'/>
          

          <FormLabel mt={8}>Email address</FormLabel>
          <Input type='email' placeholder='Enter Email Address'/>

          <FormLabel mt={8}>Password (6 Character Minimum)</FormLabel>
          <Input type='password' placeholder = "Enter Password"/>

          <FormLabel mt={8}>Password Confirmation</FormLabel>
          <Input type='password' placeholder='Confirm Password'/>

          <Box mb={12} style={{display : "flex", alignItem:"center", gap:"50px"}}>
          
          <Button mb={2} mt={8} colorScheme="green" >SIGN UP</Button>
         
          <NavLink style={{marginTop : "37px", color:"blue"}} to="/signin">Already Registered! Login Now</NavLink>

          </Box>
          </FormControl>

        </div>
    </div>
  )
}

export default Signup