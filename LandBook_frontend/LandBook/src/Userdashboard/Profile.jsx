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
import Navbar from "../Components/Navbar";

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
        if (
          response.data.Status === "Success" &&
          data.data &&
          data.data.data.length > 0
        ) {
          console.log(response.data.name);
          console.log("correct");
          setprofileData(response);
          console.log(data.data.data);
          setData(data.data.data);
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
      <Navbar />

      <Box
        p={"2rem"}
        display={"grid"}
        gridTemplateColumns={"20rem 40vw"}
        columnGap={"10vw"}
      >
        {" "}
        {/*div */}
        <Box
          // border={'1px solid'}
          borderRadius={"50%"}
          h={"15rem"}
          w={"15rem"}
          backgroundImage={
            "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd8lye-hBFwZ8kJ0fNBvVYWkE4UQtU5fF8Bw&s)"
          }
          backgroundPosition={"center"}
          backgroundSize={"cover"}
        ></Box>
        <Box  h={"70vh"} p={"1rem"} bgColor={""}>
          <Heading>PROFILE </Heading>
          <Box
            display={"flex"}
            justifyContent={"center"}
            border={"1px solid yellow"}
            w={"10rem"}
          ></Box>
          <Heading
            size={"sm"}
            fontFamily={"manrope"}
            fontWeight={"bold"}
            mt={"5vh"}
            display={"flex"}
          >
            Name :
            {data.length > 0 ? (
              <Text fontWeight={"light"}>{data[0].Userfullname}</Text>
            ) : (
              <Text>Loading</Text>
            )}{" "}
            <Text fontWeight={"light"}> {}</Text>
          </Heading>
          <Heading
            size={"sm"}
            fontFamily={"manrope"}
            mt={"5vh"}
            display={"flex"}
          >
            Address :{" "}
            {data.length > 0 ? (
              <Text>{data[0].Useraddress}</Text>
            ) : (
              <Text>Loading</Text>
            )}
            <Text fontWeight={"light"}> {}</Text>
          </Heading>
          <Heading
            size={"sm"}
            fontFamily={"manrope"}
            mt={"5vh"}
            display={"flex"}
          >
            Contact :{" "}
            {data.length > 0 ? (
              <Text fontWeight={"light"}>{data[0].Userfullname}</Text>
            ) : (
              <Text>Loading</Text>
            )}
            <Text fontWeight={"light"}> {}</Text>
          </Heading>
          <Heading
            size={"sm"}
            fontFamily={"manrope"}
            mt={"5vh"}
            display={"flex"}
          >
            Email :{" "}
            {data.length > 0 ? (
              <Text fontWeight={"light"}>{data[0].Useremail}</Text>
            ) : (
              <Text>Loading</Text>
            )}
            <Text fontWeight={"light"}> {}</Text>
          </Heading>
          <Heading
            size={"sm"}
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
