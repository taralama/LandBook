import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [profileData, setprofileData] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
       
        const [response, data] = await Promise.all([
          axios.get("http://localhost:8000/"),
          axios.get("http://localhost:8000/profile"),
        ]);

        // const [response, data] = await Promise.all([
        //   axios.get("http://localhost:8000/"),
        //   axios.get("http://localhost:8000/profile"),
        // ]);
        if (response.data.Status === "Success" && data.data && data.data.data.length > 0) {
          console.log(response.data.name);
          console.log("correct");
          setprofileData(response);
          console.log(data.data.data)
          setData(data.data.data)
          
        } else {
          console.log(response.data);
          console.log("wrong");
        }
      } catch (error) {
        console.log("error in fetching data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {" "}
      <Box
        height={"6vh"}
        w={{ base: "100%", sm: "100%", md: "100%" }}
        bgColor={"#3C466B"}
        textAlign={"left"}
        p={"5px"}
        border={"none"}
      >
        <Link to={"/dashboard"}>
          <Heading
            ml={"1rem"}
            size={"lg"}
            color={"white"}
            fontFamily={"manrope"}
          >
            LandBook
          </Heading>
        </Link>
      </Box>{" "}
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

                  <ModalFooter>
                    <Button
                      onSubmit={"#"}
                      mr={"1rem"}
                      bgColor={"green"}
                      color="white"
                    >
                      Save
                    </Button>
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
        p={"2rem"}
        display={"grid"}
        gridTemplateColumns={"40vw 40vw"}
        columnGap={"10vw"}
      >
        {" "}
        {/*div */}
        <Box borderRadius={"50%"} h={"80vh"} bgColor={"red"}>
          <Image src=""></Image>
        </Box>
        <Box h={"80vh"} p={"1rem"} bgColor={"wheat"}>
          <Heading
            size={"md"}
            fontFamily={"manrope"}
            mt={"5vh"}
            display={"flex"}
          >
            Name : {data.length > 0? (<Text>{data[0].Userfullname}</Text>):(<Text>Loading</Text>)}  <Text fontWeight={"light"}> {}</Text>
          </Heading>
          <Heading
            size={"md"}
            fontFamily={"manrope"}
            mt={"5vh"}
            display={"flex"}
          >
            Address : {data.length > 0? (<Text>{data[0].Userfullname}</Text>):(<Text>Loading</Text>)}<Text fontWeight={"light"}> {}</Text>
          </Heading>
          <Heading
            size={"md"}
            fontFamily={"manrope"}
            mt={"5vh"}
            display={"flex"}
          >
            Contact : {data.length > 0? (<Text>{data[0].Userfullname}</Text>):(<Text>Loading</Text>)}<Text fontWeight={"light"}> {}</Text>
          </Heading>
          <Heading
            size={"md"}
            fontFamily={"manrope"}
            mt={"5vh"}
            display={"flex"}
          >
            Email : {data.length > 0? (<Text>{data[0].Useremail}</Text>):(<Text>Loading</Text>)}<Text fontWeight={"light"}> {}</Text>
          </Heading>
          <Heading
            size={"md"}
            fontFamily={"manrope"}
            mt={"5vh"}
            display={"flex"}
          >
            verify Status : <Text fontWeight={"light"}> {}</Text>
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
