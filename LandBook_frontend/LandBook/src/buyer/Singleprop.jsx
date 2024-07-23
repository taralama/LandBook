import { Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Singleprop = () => {
    const [data,setData] = useState({})
    const {id} = useParams();

    useEffect(()=>{
        const fetchData = async() =>{
            try {
                const response = await axios.get(`http://localhost:8000/bdashboard`)
                setData(response.data.mainData[id])
                
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[id])
    console.log(data)
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
        <Link to={'/dashboard'}><Heading ml={"1rem"} size={"lg"} color={"white"} fontFamily={"manrope"}>
          LandBook
        </Heading></Link>
      </Box>
      <Box
        h={"6vh"}
        w={"100vw"}
        boxShadow={"1px 2px 10px"}
        alignContent={"center"}
        alignItems={"center"}
        pl={"3rem"}
        display={"flex"}
      ></Box>

      <Box boxShadow={'1px 5px 10px '}  width={'100%'} p={'1rem'} h={'88vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Box boxShadow={'1px 5px 10px '}  width={'80%'} p={'1rem'} h={'60vh'}>
        <Heading>{data.Location}</Heading>
        <Text mt={'3rem'}>{data.Description}</Text>
        <Text > This Belongs to {data.Ownername}</Text>
      </Box>
        
      </Box>


    </>
  )
}

export default Singleprop