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
import React from "react";
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

function AddProducts() {
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
                    }}
                  >
                    0/1 Products Approved
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
                    }}
                  >
                    1 Under Review
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
                      <Textarea></Textarea>

                      <FormLabel mt={8}>Your Experience</FormLabel>
                      <Textarea></Textarea>

                      <FormLabel mt={8}>Upload File</FormLabel>
                      <Input
                        p={1}
                        pb={4}
                        type="file"
                        placeholder="Enter Bank Name"
                      />

                      <FormLabel mt={8}>
                        Did You Bought it Offline or Online?
                      </FormLabel>
                      <Select>
                        <option>Online</option>
                        <option>Offline</option>
                      </Select>

                      <FormLabel mt={8}>Platform</FormLabel>
                      <Select>
                        <option>Select Platform</option>
                        <option>Amazon</option>
                        <option>Flipkart</option>
                        <option>Snapdeal</option>
                        <option>ShopClues</option>
                        <option>Reliance Digital</option>
                        <option>Others</option>
                      </Select>

                      <Box
                        mb={12}
                        style={{
                          display: "flex",
                          alignItem: "center",
                          gap: "50px",
                        }}
                      >
                        <Button mb={2} mt={8} colorScheme="green">
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
                                      <Th>Media</Th>
                                      <Th>How to Use</Th>
                                      <Th>Approval Status</Th>
                                    </Tr>
                                  </Thead>
                                  <Tbody>
                                    <Tr>
                                      <Td>Test</Td>
                                      <Td>Test</Td>
                                      <Td>Test</Td>
                                      <Td>Test</Td>
                                    </Tr>
                                    
                                  </Tbody>
                                  
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
