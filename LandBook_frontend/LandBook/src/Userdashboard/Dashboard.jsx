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
  useDisclosure,
  Input
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { isOpen,onOpen,onClose} = useDisclosure()


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
        alignItems={"center"}
        pl={"3rem"}
        display={"flex"}
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
                  <MenuItem ><Text color={'green'}>Buyer</Text></MenuItem>
                </Link>
                <Link to={"/sdashboard"}>
                  <MenuItem><Text color={'red'}>Seller</Text></MenuItem>
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

        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            bgColor={"white"}
            fontFamily={"manrope"}
            border={"none"}
            height={""}
            position={"absolute"}
            right={"0px"}
          >
            <i class="fa-regular fa-user"></i>
          </MenuButton>
          <MenuList>
            <Link to={"/profile"}>
              <MenuItem>Profile</MenuItem>
            </Link>
            
              <MenuItem>
               
                <Text onClick={onOpen}>Setting</Text>
                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Setting</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Text>Current Password</Text>
                      <Input></Input>
                      <Text>New Password</Text>
                      <Input></Input>
                      <Text>Confirm Password</Text>
                      <Input></Input>

                    </ModalBody>
                   
                    <ModalFooter >
                      <Button onSubmit={'#'} mr={'1rem'} bgColor={'green'} color='white' >Save</Button>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                     
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </MenuItem>
           
            <Link to={"#"}>
              <MenuItem>Notification</MenuItem>
            </Link>
            <Link to={"/login"}>
              <MenuItem>Logout</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
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
