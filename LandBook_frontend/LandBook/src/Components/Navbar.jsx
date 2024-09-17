import React from "react";
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
  Input,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {" "}
      <Box
        height={"7vh"}
        w={{ base: "100%", sm: "100%", md: "100%" }}
        bgColor={"#3C466B"}
        textAlign={"left"}
        p={"5px"}
        border={"none"}
        display={"flex"}
        alignItems={"center"}
      >
        {" "}
        <Heading ml={"1rem"} size={"lg"} color={"white"} fontFamily={"manrope"}>
          LandBook
        </Heading>
        <marquee class="text-white" behavior="" direction="">
          Latest House are listed{" "}
        </marquee>
      </Box>
      <Box
        h={"6vh"}
        w={"100vw"}
        boxShadow={"1px 2px 10px rgb(162, 162, 69)"}
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
        >
          <ListItem
            display={"flex"}
            alignItems={"center"}
            gap={".5rem"}
            _hover={{ cursor: "pointer" }}
          >
            <i class="fa-solid fa-house"></i>

            <Link to={"/dashboard"}>
              <Text fontWeight={"bold"}>Home</Text>
            </Link>
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
                _hover={{ cursor: "pointer" }}
              >
                <Text textDecoration={"none"}>Properties</Text>
              </MenuButton>
              <MenuList>
                <Link to={"/bdashboard"}>
                  <MenuItem>
                    <Text color={"green"}>Buyer</Text>
                  </MenuItem>
                </Link>
                <Link to={"/sdashboard"}>
                  <MenuItem>
                    <Text color={"red"}>Seller</Text>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </ListItem>
          <ListItem
            display={"flex"}
            alignItems={"center"}
            gap={".5rem"}
            _hover={{ cursor: "pointer" }}
          >
            <i class="fa-solid fa-person "></i>
            <Text fontWeight={"bold"}>Agent</Text>
          </ListItem>
          <ListItem
            display={"flex"}
            alignItems={"center"}
            gap={".5rem"}
            _hover={{ cursor: "pointer" }}
          >
            <i class="fa-solid fa-blog"></i>
            <Text fontWeight={"bold"}>Blogs</Text>
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"} gap={".5rem"}>
            <i class="fa-solid fa-address-book"></i>
            <Text fontWeight={"bold"} _hover={{ cursor: "pointer" }}>
              Contacts
            </Text>
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
          <MenuList
            display={"flex"}
            border={"none"}
            flexDirection={"column"}
            alignItems={"center"}
            fontFamily={"manrope"}
            boxShadow={"1px 2px 8px"}
          >
            <Heading p={"1px"} size={"1em"} fontFamily={"manrope"}>
              Account Section
            </Heading>
            <Box
              border={"1px solid "}
              w={"7rem"}
              position={"absolute"}
              mt={"1.5rem"}
            ></Box>
            <Link to={"/profile"}>
              <Text _hover={{ backgroundColor: "gray", cursor: "pointer" }}>
                Profile
              </Text>
            </Link>
            <Link to={"/setting"}>
              <Text _hover={{ backgroundColor: "white" }}>Setting</Text>
            </Link>
            <Link to={'/notification'}><Text _hover={{ backgroundColor: "white" }}>Notification</Text></Link>
            <Text _hover={{ backgroundColor: "white" }}>Logout</Text>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default Navbar;
