import { Box, Heading, Input, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const [isChecked,setIsCheckbox] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false
  })


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
      const role = isChecked.checkbox1 ? 1 : isChecked.checkbox2 ? 2: isChecked.checkbox3 ? 3:null
      // console.log(role);
    
      const res = await axios.post("http://localhost:8000/signup", {...values,Role:role});
      console.log(res.data.msg)
      if (res.data.msg === "success") {
        alert("Signup successfully");
        navigate('/login');
        
      } else if (res.data.msg === "user exits") {
        alert(res.data.msg);
      } else {
        alert(res.data.msg + "& Email exits")
      }
    } catch (error) {
      console.log("fail to post data " + error);
    }
  };

  return (
    <>
      <Heading
        as="h1"
        size={"5x1"}
        padding={"1vh"}
        color={"red"}
        boxShadow={"1px 2px 8px"}
        position={""}
      >
        SignUp Panel
      </Heading>
      <Box
        height={"70vh"}
        width={"100vw"}
        bgColor={"white"}
        position={"absolute"}
        display={"grid"}
        justifyItems={"center"}
        alignItems={"center"}
        // border={"1px solid black"}
      >
        <Box
          border={".5px solid black"}
          padding={"5vh"}
          borderRadius={"2rem"}
          boxShadow={"1px 3px 8px "}
        >
          <form action="submit" onSubmit={handleSubmit}>
            <Heading as="h5" size={"2x1"}>
              Username
            </Heading>
            <Input
              width={"20vw"}
              onChange={(e) => {
                setValues({ ...values, Username: e.target.value });
              }}
              isRequired
            ></Input>
            <Heading as="h5" size={"2x1"}>
              Fullname
            </Heading>
            <Input
              width={"20vw"}
              onChange={(e) => {
                setValues({ ...values, Fullname: e.target.value });
              }}
              isRequired
            ></Input>
            <Heading as="h5" size={"2x1"}>
              Email
            </Heading>
            <Input
            type="Email"
              width={"20vw"}
              onChange={(e) => {
                setValues({ ...values, Email: e.target.value });
              }}
              isRequired
            ></Input>
            <Heading as="h5" size={"2x1"}>
              Password
            </Heading>
            <Input
             type={ 'password'}
             placeholder="Enterpassword"
             required
             aria-required= "true"
              autocomplete="current-password"
               className="chakra-input css-14vloaz"
              width={"20vw"}
              onChange={(e) => {
                setValues({ ...values, Password: e.target.value });
              }}
              
            />
            <Heading as="h5" size={"2x1"}>
              Role*
            </Heading>
            <Box display={"flex"} justifyContent={"space-around"}>
              <Box display={"flex"}>
                <input
                  type="checkbox"
                  checked={isChecked.checkbox1}
                  onChange={(e) => {
                    setIsCheckbox({
                      ...setIsCheckbox,checkbox1: e.target.checked,
                      checkbox2:false,checkbox3:false
                    })
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
                      ...setIsCheckbox,checkbox2: e.target.checked,
                      checkbox1:false,checkbox3:false
                    })
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
                      ...setIsCheckbox,checkbox3: e.target.checked,
                      checkbox1:false,checkbox2:false
                    })
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
                bgColor={"blue"}
                type="submit"
              >
                SignUp
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
