import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'



const Saved = () => {
    const property = useSelector(state=>state.savedProp.savedProps)
    console.log(property)
  return (
    <> <Box
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
  {property.map((item, index) => (
            <Link to={`/bdashboard/${index}`} key={index}>
              <Box
                w={"10rem"}
                h={"10rem"}
                p={"5px"}
                _hover={{ cursor: "pointer" }}
                boxShadow={"1px 1px 8px "}
                borderRadius={"5px"}
                overflow={'hidden'}
              >
                <Image
                  src={`http://localhost:8000/${item.Gallery}`}
                  border={"1px solid "}
                  h={"5rem"}
                />
                <Text
                  fontWeight={"bold"}
                  fontSize={"14px"}
                  fontFamily={"manrope"}
                  textAlign={"center"}
                >
                  Beautiful roof house
                </Text>
                <Text mt={"5px"} fontSize={"11px"} fontFamily={"manrope"}>
                  {item.Location}
                </Text>
                <Text mt={"5px"} fontSize={"11px"} fontFamily={"manrope"}>
                  {item.Description}
                </Text>
              </Box>
            </Link>
          ))}

    </>
  )
}

export default Saved