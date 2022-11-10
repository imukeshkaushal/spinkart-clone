import { Button, Container, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'

function Contact() {
  return (
    <div className='contact'>
        <Navbar/>
        <div>
          <img style = {{width:"100%"}} src='https://ideakart.com/assets/youridea-23d18c0fab7feb4d66e4c1dbc419428c71b2014ff742fc52b4006f6b65af6b67.jpg' alt='img'/>
          <div style={{position:"absolute", top : "120px",left : "25%", width:"50%"}}>
            <FormControl isRequired>
              <FormLabel >Full Name</FormLabel>
              <Input style={{backgroundColor:"white"}} placeholder='Full Name' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel mt={4}>Phone Number</FormLabel>
              <Input style={{backgroundColor:"white"}} placeholder='Phone Number' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel mt={4}>Email Id</FormLabel>
              <Input style={{backgroundColor:"white"}} placeholder='Email' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel mt={4}>Description</FormLabel>
              <textarea style={{width:"100%",padding:"10px", height:"150px",borderRadius:"10px"}}></textarea>
            </FormControl>
            <Button mt={4}>Submit</Button>
          </div>

        </div>


    </div>
  )
}

export default Contact