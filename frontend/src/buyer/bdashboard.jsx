import {
  Box,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "../Components/Navbar";




const Bdashboard = () => {



 


  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [searchParams, setSearchParams] = useState({ Location: '', Price: '' });
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState([]);

  axios.defaults.withCredentials = true;

  const onSubmit = async (values) => {
    setSearchParams(values);
  };

  useEffect(() => {

   
    const fetchData = async () => {
      try {
        const [verifyResponse, dataResponse,] = await Promise.all([
          axios.get("http://localhost:8000/"),
          axios.get("http://localhost:8000/bdashboard"),
        ]);

        if (verifyResponse.data.Status === "Success") {
          
          setAuth(true);
          const maindata = dataResponse.data.mainData;
          setData(maindata)
   



        } else {
          setAuth(false);
        }
      } catch (error) {
        console.log(error);
      }

 
    
    };
    fetchData();
  }, [auth]);

  // Filtering data based on search parameters
  const filteredData = data.filter(item => {
    return (
      (searchParams.Location ? item.Location.includes(searchParams.Location) : true) &&
      (searchParams.Price ? item.Price >= parseFloat(searchParams.Price) : true) 
      
    );
  });





  return (
    <>
        <Navbar/>
      <Box
        h={"6vh"}
        w={"100vw"}
        boxShadow={"1px 2px 10px"}
        alignContent={"center"}
        alignItems={"center"}
        pl={"3rem"}
        display={"flex"}
        // bgColor={'  rgb(243, 239, 129)'}
      >
        <UnorderedList
          listStyleType={"none"}
          display={"flex"}
          columnGap={"1rem"}
        >
          <ListItem>
            <Text fontWeight={"bold"} fontFamily={"manrope"}>
              Property List
            </Text>
          </ListItem>
          <Link to={'/saved'} > <ListItem display={'flex'} alignItems={'center'} gap={'.5rem'} >
            
            <Text fontWeight={"bold"} fontFamily={"manrope"}>
              Saved
            </Text>
            <i class="fa-solid fa-bookmark"></i>
          </ListItem></Link>
        </UnorderedList>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display={"flex"}>
          <Box
            height={"12vh"}
            width={"70%"}
            color={"white"}
            mt={"2vh"}
            ml={"1rem"}
            boxShadow={"1px 2px 8px black"}
            bgColor={"#456652"}
            borderRadius={"1rem"}
            p={"10px"}
          >
            <UnorderedList
              listStyleType={"none"}
              display={"flex"}
              columnGap={"1rem"}
            >
              <ListItem>
                <Text id="Location">Location</Text>
                <Input
                  id="LocationInput"
                  height={"2rem"}
                  width={"10rem"}
                  bgColor={"Window"}
                  color={"black"}
                  {...register('Location')}
                ></Input>
              </ListItem>
              <ListItem>
                <Text>Area</Text>
                <Input
                  height={"2rem"}
                  width={"10rem"}
                  bgColor={"Window"}
                  color={"black"}
                ></Input>
              </ListItem>
              <ListItem>
                <Text>Category</Text>
                <Input
                  height={"2rem"}
                  width={"10rem"}
                  bgColor={"Window"}
                  color={"black"}
                ></Input>
              </ListItem>
              <ListItem>
                <Text>Min-price</Text>
                <Input
                  height={"2rem"}
                  width={"10rem"}
                  bgColor={"Window"}
                  color={"black"}
                  {...register('Price')}
                ></Input>
              </ListItem>
              <ListItem>
                <Text>Max-price</Text>
                <Input
                  height={"2rem"}
                  width={"10rem"}
                  bgColor={"Window"}
                  color={"black"}
                ></Input>
              </ListItem>
            </UnorderedList>
          </Box>

          <Box
            mt={"2vh"}
            ml={"2rem"}
            alignItems={"center"}
            alignContent={"center"}
          >
            <Button
              h={"2rem"}
              w={"10rem"}
              bgColor={" rgb(240, 235, 86)"}
              height={"3rem"}
              width={"15rem"}
              borderRadius={"2rem"}
              boxShadow={"1px 4px 8px rgba(0,0,0,0.4)"}
              type="submit"
              
            >
              Search
            </Button>
          </Box>
        </Box>
      </form>

      {/* Listing of Properties */}
      <Box mt={"5vh"} p={"1rem"}>
  {auth ? (
    <>
    
      {filteredData && filteredData.length > 0 ? (
        <Box
          display={'grid'}
          gridTemplateColumns={{
            base: 'repeat(2,10rem)',
            sm: 'repeat(3,10rem)',
            md: 'repeat(5,10rem)',
            lg: 'repeat(6,10rem)',
          }}
          gap={'4rem'}
        >
          {filteredData.map((item, index) => (
            <Link to={`/bdashboard/${index}`} key={index}>
              <Box
                w={"13rem"}
                h={"15rem"}
                p={"5px"}
                _hover={{ cursor: "pointer" }}
                border={'none'}
                boxShadow={"1px 1px 8px "}
                borderRadius={"5px"}
                overflow={'hidden'}
                display={'flex'}
                flexDirection={'column'}
              >
                <Image
                  src={`http://localhost:8000/${item.Gallery}`}
                  border={"1px solid "}
                  h={"8rem"}
                />
                <Text
                  fontWeight={"bold"}
                  fontSize={"14px"}
                  fontFamily={"manrope"}
                  textAlign={"center"}
                  marginTop={'1rem'}
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
        </Box>
      ) : (<>
        {/* <Text>No data found</Text> */}
        <Box display={'flex'} justifyContent={'center'}><Image height={'50vh'} src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-8867280-7265556.png"></Image></Box></>
      )}
    </>
  ) : (
    <Text>You are not authenticated</Text>
  )}
</Box>
    </>
  );
};

export default Bdashboard;
