import { Box, Button, Container, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { AuthContext } from '../Context/AuthContext';
import { useToast } from '@chakra-ui/react'

function Signin() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const {loginUser,authState} = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast()

  const handleSubmit = () => {
    setLoading(true)
    fetch("https://reqres.in/api/login",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({email,password})
    })
    .then((res) => res.json())
    .then((res) => {
      if(res.token){
        loginUser(res.token);
        console.log(res.token)
        toast({
          title: 'Congratulation ! Login Successfully.',
          description: "Now you can manage your products in the dashboard Section",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })

        
        navigate("/dashboard")
      }
      else{
        toast({
          title: 'Something Went Wrong! ',
          description: "You are using Wrong Credentials. Please enter correct infomation",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
       
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false)
      toast({
        title: 'Something Went Wrong! ',
        description: "You are using Wrong Credentials. Please enter correct infomation",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
     
    })
  }

  return (
    <div>
        <Navbar/>
        <div style={{width:"80%", margin: "auto"}}>
        <Box>
          <Heading mt={8}>Login Now</Heading>
        </Box>

        <FormControl style={{width:"100%"}}>
          
          <FormLabel mt={8}>Email address</FormLabel>
          <Input type='email' placeholder='Enter Email Address' value={email} onChange = {(e) => setEmail(e.target.value)}/>

          <FormLabel mt={8}>Password</FormLabel>
          <Input type='password' placeholder = "Enter Password" value = {password}
          onChange = {(e) => setPassword(e.target.value)}/>

          
          <Box mb={12} style={{display : "flex", alignItem:"center", gap:"50px"}}>
          
          <Button mb={2} mt={8} colorScheme="green" onClick={handleSubmit}>LOGIN NOW</Button>
         
          <NavLink style={{marginTop : "37px", color:"blue"}} to="/signup">Not Have Any Account ! Register Now</NavLink>

          </Box>
          </FormControl>

        </div>
    </div>
  )
}

export default Signin