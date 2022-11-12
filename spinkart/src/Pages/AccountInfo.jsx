import React from "react";
import DashboardNavbar from "../Components/DashboardNavbar";
import { Box, Button, Container, FormControl, FormHelperText, FormLabel, Heading, Input } from '@chakra-ui/react'
function AccountInfo() {
  return (
    <div>
      <DashboardNavbar />
      <div>
        <div style={{ width: "80%", margin: "auto" }}>
          <Box>
            <Heading mt={8}>Account Information</Heading>
          </Box>

          <FormControl style={{ width: "100%" }}>
            <FormLabel mt={8}>Account Number</FormLabel>
            <Input
              type="number"
              placeholder="Enter Account Number"
             
            />

            <FormLabel mt={8}>IFSC Code</FormLabel>
            <Input
              type="text"
              placeholder="Enter IFSC Code"
              
            />

            <FormLabel mt={8}>Bank Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Bank Name"
              
            />

            <FormLabel mt={8}>UPI ID</FormLabel>
            <Input
              type="text"
              placeholder="Enter UPI ID"
              
            />

            <FormLabel mt={8}>Address 1</FormLabel>
            <Input
              type="text"
              placeholder="Enter Address 1"
              
            />

            <FormLabel mt={8}>Address 2</FormLabel>
            <Input
              type="text"
              placeholder="Enter Address 2"
              
            />

            <FormLabel mt={8}>City</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your City"
              
            />

            <FormLabel mt={8}>State</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your State"
              
            />

            <FormLabel mt={8}>PIN Code</FormLabel>
            <Input
              type="number"
              placeholder="Enter PIN Code"
              
            />

            <Box
              mb={12}
              style={{ display: "flex", alignItem: "center", gap: "50px" }}
            >
              <Button mb={2} mt={8} colorScheme="green">
                CREATE ACCOUNT INFORMATION
              </Button>
            </Box>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
