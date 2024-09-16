import {
  Box,
  Button,
  Heading,
  Image,
  SkeletonText,
  Text,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../reduxstore/userSlice";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Singleprop = () => {

  const dispatch = useDispatch();

  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/bdashboard`);
        console.log(response);
        setData(response.data.mainData[id]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const saveProp = () => {
    dispatch(addItem(data));
    toast({position:'top', colorScheme:'blue',status:'success',description:'Property saved successfully'})
  };
  // toaster
  const toast = useToast();
    const center = {
      lat: 48.8554,
      lng: 2.2945,
    };




  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  console.log(isLoaded);

  if (!isLoaded) {
    return <SkeletonText />;
  }

  return (
    <>
      <Box
        height={"8vh"}
        w={{ base: "100%", sm: "100%", md: "100%" }}
        bgColor={"#3C466B"}
        textAlign={"left"}
        p={"5px"}
        border={"none"}
      >
        <Heading ml={"1rem"} size={"lg"} color={"white"} fontFamily={"manrope"}>
          <Link to={"/dashboard"}>LandBook</Link>
        </Heading>
      </Box>

      <Box
        // boxShadow={"1px 5px 10px "}
        width={"100%"}
        p={"1rem"}
        h={"88vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Link to={"/Bdashboard"}>
          <Box
            position={"absolute"}
            top={"5rem"}
            left={"1rem"}
            border={"none"}
            boxShadow={"1px 2px 8px"}
            h="50px"
            w={"50px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"50%"}
            _hover={{
              bg: "gray",
              transition: ".25s",
            }}
          >
            <i class="fa-solid fa-arrow-left"></i>
          </Box>
        </Link>

        <Box
          // border={"1px solid"}
          minHeight={"60vh"}
          display={"grid"}
          gridTemplateColumns={"600px 500px"}
          columnGap={"1rem"}
        >
          <Box >
            <Box
              position={"relative"}
              boxShadow={"1px 5px 10px "}
              width={"100%"}
              p={"1rem"}
              h={"60vh"}
              display={"grid"}
              gridTemplateColumns={"50% 50%"}
            >
              <Box>
                <Heading bgColor={""} fontFamily={"manrope"}>
                  {" "}
                  {data.Location}
                </Heading>
                <Box border={"1px solid"} width={"15rem"}></Box>
                <Text fontFamily={"manrope"} mt={"3rem"}>
                  <strong>Description: </strong> <br />
                  {data.Description}
                </Text>
                <Text fontFamily={"manrope"} mt={"3rem"}>
                  Area is not Available right now
                </Text>
                <Text
                  fontFamily={"manrope"}
                  position={"absolute"}
                  bottom={"1rem"}
                >
                  <strong>Owner Name:</strong> {data.Ownername}
                </Text>
              </Box>
              <Box overflow={"scroll"}>
                <Image src={`http://localhost:8000/${data.Gallery}`}></Image>
                <Button
                  mt={"2rem"}
                  bgColor={"#3C466B"}
                  color={"white"}
                  onClick={saveProp}
                  
                  
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Box>
          <Box minH={"20rem"}>
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: "100%", height: "100%" }}
            >
              <Marker position={center}></Marker>
            </GoogleMap>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Singleprop;
