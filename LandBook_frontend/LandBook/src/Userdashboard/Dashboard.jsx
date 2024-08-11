import React from "react";

import Navbar from "../Components/Navbar";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Dashboard = () => {



  return (
    <>
    <Navbar/>
      <Box
       
        height={"40vh"}
        padding={'1rem'}
        display={"flex"}
        justifyContent={"center"}
      >
        <Image width={'90%'} src={'https://lh3.googleusercontent.com/NzYtCnVs5zlwtabAYmclakWflzz_r2cTS0b36zFd4zroKLv4M283iUHS9xeMeRWdaY7MO_CogjxrCGeHTvf2ItrXlC5vKlPLhPUNf-UeGSsV0ubXGRGRMjROm6R1pkjE35VRguz2vRJRmCYHEMCxq1ny3wnC83_iSjkHUKE8JnfqDQHXiyI0XDpjpj8kGw'} h={"40vh"}></Image>
      </Box>

      <Box
        // border={"1px solid "}
        h={"22vw"}
        display={"grid"}
        gridTemplateColumns={{
          base: "25vw ",
          sm: "25vw 25vw",
          lg: "30vw 30vw 30vw ",
        }}
        justifyContent={"center"}
        columnGap={"2.5vw"}
        p={"1rem"}
      >
        <Box
          borderRadius={"1rem"}
          bgColor={"#F4F5F4"}
          boxShadow={"1px 2px 8px"}
          height={"40vh"}
          p={"1rem"}
        >
          <Heading fontFamily={"manrope"} fontSize={"lg"}>
            Why To Choose
          </Heading>
          <Text mt={"1rem"} fontSize={"sm"} fontFamily={"manrope"}>
            Expert Market Knowledge: "Our agents are well-versed in local market
            trends." Dedicated Customer Support: "We offer 24/7 support to our
            clients." Exclusive Listings: "Access to properties you won't find
            elsewhere." Transparent Processes: "Clear and honest communication
            throughout the process."
          </Text>
        </Box>
        <Box
          borderRadius={"1rem"}
          bgColor={"#F4F5F4"}
          boxShadow={"1px 2px 8px"}
          height={"40vh"}
          p={"1rem"}
        >
          {" "}
          <Heading fontFamily={"manrope"} fontSize={"lg"}>
            How It Works
          </Heading>
          <Text mt={"1rem"} fontSize={"sm"} fontFamily={"manrope"}>
            Search for Properties: "Use our advanced search to find the perfect
            property." Schedule a Visit: "Book a viewing with one of our
            agents." Make an Offer: "Submit your offer through our platform."
            Close the Deal: "Complete the transaction with our assistance."{" "}
          </Text>
        </Box>
        <Box
          borderRadius={"1rem"}
          bgColor={"#F4F5F4"}
          boxShadow={"1px 2px 8px"}
          height={"40vh"}
          p={"1rem"}
        >
          <Heading fontFamily={"manrope"} fontSize={"lg"}>
            How It Works
          </Heading>
          <Text mt={"1rem"} fontSize={"sm"} fontFamily={"manrope"}>
            Search for Properties: "Use our advanced search to find the perfect
            property." Schedule a Visit: "Book a viewing with one of our
            agents." Make an Offer: "Submit your offer through our platform."
            Close the Deal: "Complete the transaction with our assistance."{" "}
          </Text>
        </Box>
      </Box>
    </>
  );
  X;
};

export default Dashboard;
