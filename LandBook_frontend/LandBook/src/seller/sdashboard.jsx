import { Box, Heading, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {configureStore} from '@reduxjs/toolkit'




const Sdashboard = () => {

  const [auth, setAuth] = useState(true);
  const [data, setData] = useState({
    Location: "",
    Kitta: "",
    Price: "",
    Roadaccess: "",
    Ownername: "",
    Description: "",
    Photo: "",
  });
  axios.defaults.withCredentials = true;
  try {
    const fetchData = async () => {
      const [verifyResponse, dataResponse] = await Promise.all([
        axios.get("http://localhost:8000"),
        axios.get("http://localhost:8000/sdashboard"),
      ]);

      console.log(verifyResponse.data.Status);
      if (verifyResponse.data.Status === "Success") {
        setAuth(true);
      } else {
        setAuth(false);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);
  } catch (error) {
    console.log(error + "fail to fetchdata");
  }

  return (
    <>
      {auth ? (
        <>
        <Box
        height={"6vh"}
        w={{ base: "100%", sm: "100%", md: "100%" }}
        bgColor={"#3C466B"}
        textAlign={"left"}
        p={"5px"}
        border={"none"}
      >
        <Link to={'/dashboard'}>
          <Heading ml={"1rem"} size={"lg"} color={"white"} fontFamily={"manrope"}>
            LandBook
          </Heading>
        </Link>
      </Box>
          <h1> this is verified</h1>
          <Box display={'flex'} justifyContent={'center'}>
          <Box  width={'40vw'} p={'1rem'} boxShadow={'1px 2px 8px '} >
            <Heading ><Text textAlign={'center'} alignContent={'center'} color={'blue'} >Add Property</Text></Heading>

          <form
            action="http://localhost:8000/sdashboard"
            method="post"
            encType="multipart/form-data"
          >
          <Heading size={"5x1"} >Location</Heading>
          <Input
            type="text"
            name="Location"
            onChange={(e) => {
              setData({
                ...data,
                Location: e.target.value,
              });
            }}
          ></Input>
          <Heading size={"5x1"}>Kitta</Heading>
          <Input
            type="text"
            name="Kitta"
            onChange={(e) => {
              setData({
                ...data,
                Kitta: e.target.value,
              });
            }}
          ></Input>
          <Heading size={"5x1"}>Price</Heading>
          <Input
            type="text"
            name="Price"
            onChange={(e) => {
              setData({
                ...data,
                Price: e.target.value,
              });
            }}
          ></Input>
          <Heading size={"5x1"}>Road Access</Heading>
          <Input
            type="text"
            name="Roadaccess"
            onChange={(e) => {
              setData({
                ...data,
                Roadaccess: e.target.value,
              });
            }}
          ></Input>
          <Heading size={"5x1"}>Owner name</Heading>
          <Input
            type="text"
            name="Ownername"
            onChange={(e) => {
              setData({
                ...data,
                Ownername: e.target.value,
              });
            }}
          ></Input>
          <Heading size={"5x1"}>Description</Heading>
          <Input
            type="text"
            name="Description"
            onChange={(e) => {
              setData({
                ...data,
                Description: e.target.value,
              });
            }}
          ></Input>
          <Heading size={"5x1"}>Photo Gallery</Heading>
  
         
            <input type="file" name="profileImage" />
            <button type="submit">Upload</button>
          </form></Box></Box>
        </>
      ) : (
        <h1>this is not verified</h1>
      )}
    </>
  );
};
export default Sdashboard;
