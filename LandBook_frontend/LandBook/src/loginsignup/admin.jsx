import { Box, Button, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    Username: "",
    Password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const res = await axios.post("http://localhost:8000/admin", values);
      const userRole = res.data.Role;
     
        if (res.data.Status === "Success") {
          if (userRole === 1) {
            alert('login restricted for client');
          }else if (userRole === 2) {
            alert('login restricted for client')
          
          }else if (userRole === 3) {
            navigate('/adashboard')
          }
        }else{
          alert(res.data.Status)
          
        }
  
        
      
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <>
    <Box display={'flex'} justifyContent={'space-around'} flexDirection={'column'} alignItems={'center'} minHeight={'600px'}>
        <marquee className='border-black-1 text-red-700 text-2xl bg-red-100 ' behavior="alternate" direction="left"> Ristricted for clients</marquee>
      <Box border={'1px solid'} p={'1rem'} h={'400px'} width={'300px'} backgroundColor={'#3C466B'} borderRadius={'1rem'} boxShadow={'9px 5px 13px '}>

        <Heading size={'lg'} color={'white'}>Admin Panel</Heading>

        <form onSubmit={handleSubmit}>
        <Heading size={'.5rem'} mt={'4rem'}  color={'white'} fontFamily={'manrope'} letterSpacing={'1px'}>Username</Heading>
        <Input
        focusBorderColor="white"
          bg={"white"}
          color={"black"}
          onChange={(e) =>
            setValues({
              ...values,
              Username: e.target.value,
            })
          }
        />
        <Heading size={'.5rem'} mt={'1rem'}  color={'white'} fontFamily={'manrope'} letterSpacing={'1px'}>Password</Heading>
        <Input
          // type="password" // Ensure the password field hides the input
          type="password"
          focusBorderColor="white"
          bg={"white"}
          color={"black"}
          onChange={(e) =>
            setValues({
              ...values,
              Password: e.target.value,
              
            })
            
          }
        />
        <Link exact to={"/login"}>
          <h3 className="mt-5 absolute text-red-200">LogIn as client ?</h3>
        </Link>
        <Button type="submit" mt={"5rem"} bgColor={"gray"} h={'2rem'} width={'10rem'} color={"white"}  borderRadius={"10rem 0px 10rem 0px"} _hover={{color:'black'}}>
          Submit
        </Button>
      </form>


      </Box>
    </Box>
    </>
    
  );
};

export default Admin;
