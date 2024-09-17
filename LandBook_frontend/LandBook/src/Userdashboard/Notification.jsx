import React from "react";
import Navbar from "../Components/Navbar";
import { Box, Heading, ListItem, MenuList, Text } from "@chakra-ui/react";

const Notification = () => {
  return (
    <>
      <Navbar />
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          mt={"5rem"}
          minH={"18rem"}
          width={"25rem"}
          p={"1.5rem"}
          boxShadow={"1px 2px 8px"}
          borderRadius={"1rem"}
        >
          <Heading>NOTIFICATION</Heading>
          <Box width={"18rem"} border={"2px solid #ffa700"}></Box>
          <Box border={"1px solid "} mt={"1rem"} height={"3rem"}>
            <Text>This is the example</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Notification;
