import {
  Box,
  Button,
  Heading,
  Image,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const SlideData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
    },
  ];

  return (
    <>
      <Box
        height={"6vh"}
        w={{ base: "100%", sm: "100%", md: "100%" }}
        bgColor={"#3C466B"}
        textAlign={"left"}
        p={"5px"}
        border={"none"}
      >
        {" "}
        <Heading ml={"1rem"} size={"lg"} color={"white"} fontFamily={"manrope"}>
          LandBook
        </Heading>
      </Box>
      <Box
        h={"6vh"}
        w={"100vw"}
        boxShadow={"1px 2px 10px"}
        alignContent={"center"}
        alignItems={'center'}
        pl={"3rem"}
        display={'flex'}
      >
        <UnorderedList
          styleType={"none"}
          display={"flex"}
          gap={"8vw"}
          fontFamily={"manrope"}
          _hover={{ cursor: "pointer" }}
        >
          <ListItem>
            <Text fontWeight={"bold"}>Home</Text>
          </ListItem>
          <ListItem>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bgColor={"white"}
                fontFamily={"manrope"}
                border={"none"}
                height={""}
              >
                <Text textDecoration={"none"}>Properties</Text>
              </MenuButton>
              <MenuList>
                <Link to={"/bdashboard"}>
                  <MenuItem>Buyer</MenuItem>
                </Link>
                <Link to={"/sdashboard"}>
                  <MenuItem>Seller</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </ListItem>
          <ListItem>
            <Text fontWeight={"bold"}>Agent</Text>
          </ListItem>
          <ListItem>
            <Text fontWeight={"bold"}>Blogs</Text>
          </ListItem>
          <ListItem>
            <Text fontWeight={"bold"}>Contacts</Text>
          </ListItem>
        </UnorderedList>
        <Text position={'absolute'} right={'0'} textAlign={'right'} alignContent={'center'}>My Account</Text>
      </Box>
      <Box border={"1px solid "} height={"40vh"} bgColor={"blanchedalmond"} display={'flex'} justifyContent={'center'}>
        <Image src={SlideData[1].image} h={"40vh"}></Image>
      </Box>

      <Box
        border={"1px solid "}
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
          bgColor={'#F4F5F4'}
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
            bgColor={'#F4F5F4'}
          boxShadow={"1px 2px 8px"}
          height={"40vh"}
          p={'1rem'}
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
          bgColor={'#F4F5F4'}
          boxShadow={"1px 2px 8px"}
          height={"40vh"}
          p={'1rem'}
        ><Heading fontFamily={"manrope"} fontSize={"lg"}>
        How It Works
      </Heading>
      <Text mt={"1rem"} fontSize={"sm"} fontFamily={"manrope"}>
        Search for Properties: "Use our advanced search to find the perfect
        property." Schedule a Visit: "Book a viewing with one of our
        agents." Make an Offer: "Submit your offer through our platform."
        Close the Deal: "Complete the transaction with our assistance."{" "}
      </Text></Box>
      </Box>
    </>
  );
  X;
};

export default Dashboard;
