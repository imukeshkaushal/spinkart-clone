import {
  Heading,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import DashboardNavbar from "../Components/DashboardNavbar";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { Link } from "react-router-dom";

const intialState = {
  name: "",
  experience: "",
  file: "",
  type: "",
  platform: "",
};

function AddProducts() {
  const [formState, setFormState] = useState(intialState);
  const [records, setRecords] = useState([]);
 

  

  const handleSubmit = () => {
    
    const newRecords = { ...formState, id: new Date().getTime().toString() };
    setRecords([...records, newRecords]);
    console.log(records);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormState({ ...formState, [name]: val });
  };

 let reviews = records.length;
 console.log(reviews)

  return (
    <div>
      <DashboardNavbar />
      <div style={{ width: "80%", margin: "auto" }}>
        <Heading mt={8}>Your Dashboard</Heading>
        <div>
          <Tabs size="md" variant="enclosed" mt={8}>
            <TabList>
              <Tab>Home</Tab>
              <Tab>Add Product</Tab>
              <Tab>Products</Tab>
              <Tab>Credits</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Heading mt={8}>Welcome</Heading>
                <div style={{ display: "flex", gap: "2%" }}>
                  <div
                    style={{
                      width: "250px",
                      marginTop: "2%",
                      height: "150px",
                      backgroundColor: "green",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "15px",
                      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                    }}
                  >
                    0/{reviews} Products Approved
                  </div>
                  <div
                    style={{
                      width: "250px",
                      marginTop: "2%",
                      height: "150px",
                      backgroundColor: "orange",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "15px",
                      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                    }}
                  >
                    {reviews} Under Review
                  </div>
                  <div
                    style={{
                      width: "250px",
                      marginTop: "2%",
                      height: "150px",
                      backgroundColor: "tomato",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      fontSize: "20px",
                      color: "white",
                      borderRadius: "15px",
                      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
                    }}
                  >
                    0 Could'nt Pass Review
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  <div>
                    <Box>
                      <Heading mt={8}>Add Product or Review</Heading>
                    </Box>

                    <FormControl style={{ width: "100%" }}>
                      <FormLabel mt={8}>Product Name</FormLabel>
                      <Textarea  
                      name="name"
                      value={formState.name}
                      onChange={handleChange}/>

                      <FormLabel mt={8}>Your Experience</FormLabel>
                      <Textarea
                      name="experience"
                      value={formState.experience}
                      onChange={handleChange}/>

                      <FormLabel mt={8}>Upload File</FormLabel>
                      <Input
                        p={1}
                        pb={4}
                        type="file"
                        name="file"
                        value={formState.file}
                        onChange={handleChange}
                      />

                      <FormLabel mt={8}>
                        Did You Bought it Offline or Online?
                      </FormLabel>
                      <Select 
                      name="type"
                      value={formState.type}
                      onChange={handleChange}>
                        <option value="">Select Type</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                      </Select>

                      <FormLabel mt={8}>Platform</FormLabel>
                      <Select 
                      name="platform"
                      value={formState.platform}
                      onChange={handleChange}>
                        <option value="">Select Platform</option>
                        <option value="Amazon">Amazon</option>
                        <option value="Flipkart">Flipkart</option>
                        <option value="Snapdeal">Snapdeal</option>
                        <option value="ShopClues">ShopClues</option>
                        <option value="Reliance Digital">Reliance Digital</option>
                        <option value="Others">Others</option>
                      </Select>

                      <Box
                        mb={12}
                        style={{
                          display: "flex",
                          alignItem: "center",
                          gap: "50px",
                        }}
                      >
                        <Button mb={2} mt={8} colorScheme="green" onClick={handleSubmit}>
                          SUBMIT
                        </Button>
                      </Box>
                    </FormControl>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                        <div>
                            <Box>
                                <Heading>Products</Heading>
                                <div>
                                <TableContainer mt={8}>
                                <Table variant='simple'>
                                  
                                  <Thead>
                                    <Tr>
                                      <Th>Product Name</Th>
                                      <Th>Experience</Th>
                                      <Th>How to Use</Th>
                                      <Th>Approval Status</Th>
                                    </Tr>
                                  </Thead>
                                  { 
                                    records.map((el) => {
                                      return (
                                        <Tbody key={el.id}>
                                        <Tr>
                                          <Td>{el.name}</Td>
                                          <Td>{el.experience}</Td>
                                          <Td>{el.type}</Td>
                                          <Td>Pending for Review</Td>
                                        </Tr>
                                        
                                      </Tbody>
                                      )
                                    })
                                  }
                                  
                                  
                                </Table>
                              </TableContainer>
                                </div>
                            </Box>
                        </div>
              </TabPanel>
              <TabPanel>
                    <div>
                        <Box>
                            <Heading mt={8}>Credits</Heading>
                            <Text mt={4}>The amount credited to your account will be shown here!</Text>
                            <Text mt={4}>You can update your account Info <Link style={{color:"blue"}} path = "/dashboard/account-info" to="/dashboard/account-info">Here</Link></Text>
                        </Box>
                    </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
