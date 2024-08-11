import React from 'react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
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
  

const Navbar = () => {
    const { isOpen,onOpen,onClose} = useDisclosure()
  return (
    <>      <Box
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
</>
  )
}

export default Navbar