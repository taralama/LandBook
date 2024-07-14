import {
  Box,
  Heading,
  Input,
  Button,
  Image,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import img from "../Images/loginsignup/loginpan.png";

const Login = () => {
  const toast = useToast({
    position: "top",
    title: "Error",
    description: "Login restricted for Admin",
    status: "error",
    duration:'2000',
    isClosable: true,
  });
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
          toast();
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
        <Box
          display={"flex"}
          justifyContent={"center"}
          zIndex={"1"}
          alignContent={"center"}
          alignItems={"center"}
          h={"100vh"}
          w={"40vw"}
        >
          <Box
            height={"70vh"}
            width={"25vw"}
            bgColor={"#8A8D8B"}
            bg={"linear-gradient(to bottom, #FFFFFF, #8A8D8B)"}
            boxShadow={"-200px 1px 20px rgba(0,0,0,0.4)"}
            alignItems={"center"}
            textAlign={"center"}
            borderRadius={"2rem"}
            p={"1rem"}
            mt={"10vh"}
          >
            <form action="submit" onSubmit={handleSubmit}>
              <Heading
                size={"xl"}
                fontFamily={"manrope"}
                mt={"2vh"}
                color={"#2B9F5A"}
              >
                Login
              </Heading>
              <Text
                textAlign={"left"}
                size={"1xl"}
                letterSpacing={"2px"}
                color={"black"}
                mt={"8vh"}
                fontFamily={"manrope"}
              >
                Username
              </Text>
              <Input
                placeholder="Enter Username"
                border={"none"}
                borderBottom={"1px solid "}
                borderRadius={"none"}
                _focus={{ boxShadow: "none", borderColor: "black" }}
                onChange={(e) =>
                  setdata({
                    ...data,
                    Username: e.target.value,
                  })
                }
              ></Input>
              <Text
                textAlign={"left"}
                size={"1xl"}
                letterSpacing={"2px"}
                color={"black"}
              >
                Password
              </Text>
              <Input
                type="password"
                border={"none"}
                borderBottom={"1px solid "}
                borderRadius={"none"}
                placeholder="Enter Password"
                _focus={{ boxShadow: "none", borderColor: "black" }}
                onChange={(e) =>
                  setdata({
                    ...data,
                    Password: e.target.value,
                  })
                }
              ></Input>

              <Link exact to={"/admin"}>
                <Text
                  mt={"1rem"}
                  fontFamily={"manrope"}
                  _hover={{ color: "blue" }}
                  color={"blue"}
                >
                  LogIn as admin
                </Text>
              </Link>

              <Box display="flex" flexDirection={"column"} mt="1vh">
                <Button
                  h={"2rem"}
                  type="submit"
                  bgColor="#3C6B66"
                  _hover={{ bgColor: "teal.700" }}
                  transition={".5s"}
                  color="white"
                  m={"1vh"}
                  borderRadius={"10rem 0px 10rem 0px"}
                  mt={"2rem"}
                >
                  <Text>Login</Text>
                </Button>
                <Button
                  onClick={signUp}
                  h={"2rem"}
                  position={"relative"}
                  w={"10vw"}
                  right={"0"}
                  bgColor="#3C466B"
                  _hover={{ bgColor: "blue.900" }}
                  transition={".5s"}
                  color={"white"}
                  borderRadius={"10rem 0px 10rem 0px"}
                >
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
