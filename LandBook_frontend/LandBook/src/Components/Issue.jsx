import React from "react";
import Navbar from "./Navbar";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Issue = () => {
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  axios.defaults.withCredentials = true
  const onSubmit = async(data) =>{


    const response =await axios.post('http://localhost:8000/push-notification',data)
    if(!response.statusText =='OK'){
        toast({status:'error',position:'top'})
    }else{
      console.log(response.data.msg)
      toast({status:'success',position:'top',description:response.data.msg})
    }
    
  }

  try {
  } catch (error) {
    console.log("error in sending sending data");
  }

  return (
    <>
      <Navbar />

      <Box width={"100%"} alignItems={"center"}>
        <Box
          position={"absolute"}
          left={"5rem"}
          mt={"5rem"}
          minH={"18rem"}
          width={"25rem"}
          p={"1.5rem"}
          boxShadow={"1px 2px 8px"}
          borderRadius={"1rem"}
        >
          <Heading>Report Issue to Admin</Heading>
          <Box width={"18rem"} border={"2px solid Red"}></Box>
          <Box
            w={"20rem"}
            display={"flex"}
            alignItems={"center"}
            mt={"5rem"}
            height={"3rem"}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input required {...register('issue')}></Input>
              <Button type="submit" backgroundColor={"yellow"}>
                <i class="fa-regular fa-paper-plane"></i>
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Issue;
