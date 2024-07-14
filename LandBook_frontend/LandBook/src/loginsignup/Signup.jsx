import { Box, Heading, Input, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [isChecked, setIsCheckbox] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  // console.log("checkbox1 =" + isChecked.checkbox1);
  // console.log("checkbox2 =" + isChecked.checkbox2);
  // console.log("checkbox3 =" + isChecked.checkbox3);

  const [values, setValues] = useState({
    Username: "",
    Fullname: "",
    Email: "",
    Password: "",
  });

  axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(values);
      const role = isChecked.checkbox1
        ? 1
        : isChecked.checkbox2
        ? 2
        : isChecked.checkbox3
        ? 3
        : null;
      // console.log(role);

      const res = await axios.post("http://localhost:8000/signup", {
        ...values,
        Role: role,
      });
      console.log(res.data.msg);
      if (res.data.msg === "success") {
        alert("Signup successfully");
        navigate("/login");
      } else if (res.data.msg === "user exits") {
        alert(res.data.msg);
      } else {
        alert(res.data.msg + "& Email exits");
      }
    } catch (error) {
      console.log("fail to post data " + error);
    }
  };

  return (
    <>
      {" "}
      <Box
        height={"100vh"}
        width={"100vw"}
        border={"1px solid"}
        display={"flex"}
        position={"absolute"}
        alignItems={"center"}
      >
        {" "}
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
        {/* left */}
        <Box
          height={"100vh"}
          w={"40vw"}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          <Box
            height={"70vh"}
            w={"25vw"}
            padding={"5vh"}
            borderRadius={"2rem"}
            bgColor={"#8A8D8B"}
            boxShadow={"-200px 1px 20px rgba(0,0,0,0.4)"}
            zIndex={"1"}
            bg={"linear-gradient(to bottom,#F0EFEF,#8A8D8B)"}
            mt={"10vh"}
          >
            <Heading
              textAlign={"center"}
              fontFamily={"manrope"}
              size={"xl"}
              color={"#208247"}
            >
              LogIn
            </Heading>
            <form action="submit" onSubmit={handleSubmit}>
              <Text
                mt={"1rem"}
                size={"2x1"}
                fontFamily={"manrope"}
                letterSpacing={"2px"}
              >
                Username
              </Text>
              <Input
                h={"1rem"}
                _focus={{ boxShadow: "none", border: "none",borderBottom:'1px solid black' }}
                border={"none"}
                borderBottom="1px solid"
                borderRadius={"none"}
                width={"20vw"}
                onChange={(e) => {
                  setValues({ ...values, Username: e.target.value });
                }}
                isRequired
              ></Input>
              <Text
                mt={"1rem"}
                size={"2x1"}
                fontFamily={"manrope"}
                letterSpacing={"2px"}
              >
                Fullname
              </Text>
              <Input
                h={"1rem"}
                _focus={{ boxShadow: "none", border: "none" ,borderBottom:'1px solid black'}}
                border={"none"}
                borderBottom="1px solid"
                borderRadius={"none"}
                width={"20vw"}
                onChange={(e) => {
                  setValues({ ...values, Fullname: e.target.value });
                }}
                isRequired
              ></Input>
              <Text
                mt={"1rem"}
                size={"2x1"}
                fontFamily={"manrope"}
                letterSpacing={"2px"}
              >
                Email
              </Text>
              <Input
                h={"1rem"}
                type="Email"
                _focus={{ boxShadow: "none", border: "none",borderBottom:'1px solid black' }}
                border={"none"}
                borderBottom="1px solid"
                borderRadius={"none"}
                width={"20vw"}
                onChange={(e) => {
                  setValues({ ...values, Email: e.target.value });
                }}
                isRequired
              ></Input>
              <Text
                mt={"1rem"}
                size={"2x1"}
                fontFamily={"manrope"}
                letterSpacing={"2px"}
              >
                Password
              </Text>
              <Input 
                h={"1rem"}
                type={"password"}
                placeholder="Enterpassword"
                required
                aria-required="true"
                autocomplete="current-password"
                _focus={{ boxShadow: "none", border: "none",borderBottom:'1px solid black' }}
                border={"none"}
                borderBottom="1px solid"
                borderRadius={"none"}
                width={"20vw"}
                onChange={(e) => {
                  setValues({ ...values, Password: e.target.value });
                }}
              />
              <Text
                mt={".5rem"}
                size={"2x1"}
                fontFamily={"manrope"}
                letterSpacing={"2px"}
              >
                Role*
              </Text>
              <Box display={"flex"} justifyContent={"space-around"}>
                <Box display={"flex"}>
                  <input
                    type="checkbox"
                    checked={isChecked.checkbox1}
                    onChange={(e) => {
                      setIsCheckbox({
                        ...setIsCheckbox,
                        checkbox1: e.target.checked,
                        checkbox2: false,
                        checkbox3: false,
                      });
                    }}
                  />{" "}
                  <Text ml={"5px"}>Seller</Text>
                </Box>
                <Box display={"flex"}>
                  <input
                    type="checkbox"
                    checked={isChecked.checkbox2}
                    onChange={(e) => {
                      setIsCheckbox({
                        ...setIsCheckbox,
                        checkbox2: e.target.checked,
                        checkbox1: false,
                        checkbox3: false,
                      });
                    }}
                  />{" "}
                  <Text ml={"5px"}>Buyer</Text>
                </Box>
                <Box display={"flex"}>
                  <input
                    type="checkbox"
                    checked={isChecked.checkbox3}
                    onChange={(e) => {
                      setIsCheckbox({
                        ...setIsCheckbox,
                        checkbox3: e.target.checked,
                        checkbox1: false,
                        checkbox2: false,
                      });
                    }}
                  />{" "}
                  <Text ml={"5px"}>Admin</Text>
                </Box>
              </Box>
              <Box display={"flex"} justifyContent={"center"}>
                <Button
                  w={"10vw"}
                  mt={"3vh"}
                  color={"white"}
                  h={"2rem"}
                  type="submit"
                  borderRadius={"10rem 0px 10rem 0px"}
                  bgColor="#3C466B"
                  transition={".2s"}
                  _hover={{ bgColor: "blue.900" }}
                >
                  SignUp
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>{" "}
    </>
  );
};

export default SignUp;
