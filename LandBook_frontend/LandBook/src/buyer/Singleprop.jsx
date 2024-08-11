import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {addItem} from '../reduxstore/userSlice'

const Singleprop = () => {
  const dispatch = useDispatch();

 
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/bdashboard`);
        setData(response.data.mainData[id]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const saveProp = () =>{
    dispatch(addItem(data))
  }

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
        <Link to={'/Bdashboard'}><Text fontFamily={'manrope'} fontWeight={'bold'}>Back to list </Text></Link>
      </Box>

      <Box
        boxShadow={"1px 5px 10px "}
        width={"100%"}
        p={"1rem"}
        h={"88vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box position={'relative'} boxShadow={"1px 5px 10px "} width={"60%"} p={"1rem"} h={"60vh"} display={'grid'} gridTemplateColumns={'50% 50%'}>
          <Box>
          <Heading bgColor={''} fontFamily={'manrope'}> {data.Location}</Heading>
          <Text fontFamily={'manrope'} mt={"3rem"}><strong>Description: </strong> <br />{data.Description}</Text>
          <Text fontFamily={'manrope'} mt={"3rem"}>Area is not Available right now</Text>
          <Text fontFamily={'manrope'} position={'absolute'} bottom={'1rem'}><strong>Owner Name:</strong>  {data.Ownername}</Text>
          </Box>
          <Box overflow={'scroll'}><Image  src={`http://localhost:8000/${data.Gallery}`} ></Image>
          <Button mt={'2rem'} bgColor={'#3C466B'} color={'white'} onClick={saveProp}>Save</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Singleprop;
