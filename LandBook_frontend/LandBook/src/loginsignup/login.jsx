import { Box, Heading, Input, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import img from "../Images/loginsignup/loginpan.png";

const Login = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState({
    Username: "",
    Password: "",
  });

  axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", data);

      if (res.data.msg === "Success") {
        const userRole = await res.data.Role;
        if (userRole === 1) {
          navigate("/sdashboard");
        } else if (userRole === 2) {
          navigate("/bdashboard");
        } else if (userRole === 3) {
          alert("/admin login restricted");
        }
      } else {
        alert(res.data.msg);
      }
    } catch (error) {
      console.log("error to  logged in");
    }
  };

  const signUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <Box
        height={"100vh"}
        width={"100vw"}
        border={"1px solid"}
        display={"flex"}
        position={"absolute"}
        alignItems={"center"}
      >
        <Box
          bg={"#3C466B"}
          height={"100vh"}
          w={"60vw"}
          color={"white"}
          alignItems={"center"}
          textAlign={"center"}
          alignContent={"center"}
          zIndex={"0"}
        >
          <Heading
            size={"4xl"}
            textAlign={"left"}
            ml={"10vw"}
            fontFamily={"manrope"}
            letterSpacing={"1vw"}
          >
            Welcome <br /> to Land Book
          </Heading>
          <Text fontSize={"2xl"} mt={"2vh"} fontFamily={"manrope"}>
            "Your Dream Property Awaits
          </Text>
        </Box>
        <Box display={'flex'} justifyContent={'center'} zIndex={'1'} alignContent={'center'} alignItems={'center'} h={'100vh'} w={'40vw'}>
          <Box
            
            height={"70vh"}
            width={"20vw"}
            bgColor={"#8A8D8B"}
            bg={"linear-gradient(to bottom, #FFFFFF, #8A8D8B)"}
            boxShadow={'-200px 1px 20px rgba(0,0,0,0.5)'}
            alignItems={'center'}
            textAlign={'center'}
            borderRadius={'2rem'}
            p={'1rem'}
          >
             <form action="submit" onSubmit={handleSubmit}>
              <Heading size={'xl'} fontFamily={'manrope'} mt={'2vh'} color={'#2B9F5A'}>Login</Heading>
            <Text textAlign={"left"} size={"1xl"} letterSpacing={'2px'} color={"black"} mt={"8vh"}>
              Username
            </Text>
            <input  onChange={(e) =>
                setdata({
                  ...data,
                  Username: e.target.value,
                })}
             
             className='w-5/6 active:border-none '
              
            ></input>
            <Text textAlign={"left"} size={"1xl"} letterSpacing={'2px'} color={"black"}>
              Password
            </Text>
            <Input
            placeholder="Enter Password"
            type="password"
              onChange={(e) =>
                setdata({
                  ...data,
                  Password: e.target.value,
                })
              }
            ></Input>

            <Link exact to={"/admin"}>
              <h3>LogIn as admin</h3>
            </Link>

            <Box display="flex" flexDirection={'column'} mt="1vh">
            <Button type="submit" bgColor="blue" color="white" m={'1vh'}>
              Submit
            </Button>
            <Button onClick={signUp}   position={'relative'} w={'10vw'} right={'0'}>
              SignUp
            </Button>
          </Box>
          </form>
            
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Login;
