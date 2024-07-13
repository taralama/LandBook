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
    <Box className="h-30 w-2/4 border-2 " >
      <Heading className="text-center border-2">Admin Login</Heading>
      <form onSubmit={handleSubmit}>
        <h2>Username</h2>
        <Input
          bg={"gray"}
          color={"white"}
          onChange={(e) =>
            setValues({
              ...values,
              Username: e.target.value,
            })
          }
        />
        <h2>Password</h2>
        <Input
          // type="password" // Ensure the password field hides the input
          bg={"gray"}
          color={"white"}
          onChange={(e) =>
            setValues({
              ...values,
              Password: e.target.value,
            })
          }
        />
        <Link exact to={"/login"}>
          <h3>LogIn as client</h3>
        </Link>
        <Button type="submit" mt={"1vh"} bgColor={"blue"} color={"white"}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Admin;
