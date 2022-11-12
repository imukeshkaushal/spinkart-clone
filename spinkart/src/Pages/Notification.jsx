import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import DashboardNavbar from "../Components/DashboardNavbar";

function Notification() {
  return (
    <div>
      <DashboardNavbar/>
      <div style={{ width: "80%", margin: "auto" }}>
        <Box>
          <Heading mt={8} mb={4}>Notication</Heading>
          <Text>Earn Money from Home just by adding the Products Reviews.</Text>
        </Box>
      </div>
    </div>
  );
}

export default Notification;
