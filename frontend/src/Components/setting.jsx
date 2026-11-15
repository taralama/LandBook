import { Box, Button, Heading, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navbar from './Navbar'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useToast } from '@chakra-ui/react'

const Setting = () => {

  const toast = useToast({})


  const {register , handleSubmit} = useForm();

  const onSubmit = async (data )=>{
    if(data.nPass !== data.cPass){
        toast({status:'error',position:'top' ,description:'Password did not match'})
    }else{
       await fetchData(data)
    }
  }

  
  async function fetchData  (data){
    axios.defaults.withCredentials = true; 

    try {
      console.log('values is' ,data)
      const response = await axios.post('http://localhost:8000/update-password',data)

      if(response.data.msg === 'Old password does not match'){
        toast({status:'error',position:'top',isClosable:'true' ,description:response.data.msg})
      }else{

        toast({status:'success' ,position:'top',description: response.data.msg})
      }
     
    } catch (error) {
      toast({status:'error'})
      console.log('error is' ,error)
    }

  }
  


  




  return (
    <>

        <Navbar/>
        <Box width={'100%'} display={'flex'} justifyContent={'center'} >
        <Box  mt={'5rem'}  h={'25rem'} width={'25rem'} p={'1.5rem'} boxShadow={'1px 2px 8px'} borderRadius={'1rem'}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Heading>Setting</Heading>
            <Box border={'1px solid #ffa700'} width={'40%'}></Box>
            <Text mt={'2rem'}>New Passowrd</Text>
            <Input {...register('nPass')}></Input>
            <Text>Confirm Passowrd</Text>
            <Input {...register('cPass')}></Input>
            <Text>Current Password</Text>
            <Input type='password' {...register('oPass')}/>

            <Button type='submit' backgroundColor={'#ffa700'} mt={'1rem'}>Change Password</Button>
            </form>
        </Box>
        </Box>

</>
  )
}

export default Setting