import {
  Box,
  Button,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";

const Anavbar = () => {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState([{}]);
  const { isOpen, onOpen, onClose } = useDisclosure()

  const fetchData = async () => {
    axios.defaults.withCredentials = true;
    try {
      // Making both requests concurrently
      const [verifyResponse, dataResponse] = await Promise.all([
        axios.get("http://localhost:8000"),
        axios.get("http://localhost:8000/adashboard"),
      ]);

      console.log(data);

      // Handle the authentication response
      if (verifyResponse.data.Status === "Success") {
        setAuth(true);
      } else {
        setAuth(false);
      }

      // Handle the data response
      setData(dataResponse.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Box
        width={"20%"}
        minHeight={"30rem"}
        display={"inline-block"}
        bgColor={"rgb(75,111,211)"}
        p={"1rem"}
      >
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <Heading size={"md"} color={"white"} fontFamily={"cursive"}>
            LANDBOOK
          </Heading>
          <Box
            width={"15rem"}
            border={"1px solid white"}
            borderLeft={"none"}
            borderRight={"none"}
            p={"1rem"}
            mt={"1.5rem"}
          >
            <Text color={"white"} fontFamily={"manrope"}>
              Dashboard
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        height={"4rem"}
        float={"right"}
        width={"80%"}
        boxShadow={"2px 1px 5px rgba(0, 0, 0, 0.5)"}
        display={"flex"}
        alignItems={"center"}
        columnGap={"50%"}
        p={"1rem"}
      >
        <Box display={"flex"}>
          <Input
            focusBorderColor="none"
            _focus={{ border: "none" }}
            borderRadius={"5px 0px 0px 5px"}
            placeholder="Search For....."
            minWidth={"5rem"}
          ></Input>{" "}
          <Button backgroundColor={"#5D74D4"} borderRadius={"0px 5px 5px 0px"}>
            <FontAwesomeIcon color="white" icon={faMagnifyingGlass} />
          </Button>{" "}
        </Box>
        <Box
          //   border={"1px solid black"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"15rem"}
        >
          <FontAwesomeIcon color="gray" icon={faBell} />
          <FontAwesomeIcon icon={faMessage} /> <Text>Tara lama</Text>
          <Box
            height={"40px"}
            borderRadius={"50%"}
            width={"40px"}
            border={"1px solid "}
          ></Box>
        </Box>
      </Box>

      <Box
        boxShadow={"2px 1px 8px rgba(0,0,0,0.2) "}
        minHeight={"20rem"}
        width={"70%"}
        position={"absolute"}
        right={"6rem"}
        top={"6rem"}
        p={"1rem"}
      >
        <Heading size={"sm"} color={"#5D74D4"}>
          Admin Panel
        </Heading>

        {auth ? (
          typeof data === "undefined" ? (
            <h1>there is no data</h1>
          ) : (
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Email</Th>
                    <Th>Username</Th>
                    <Th>EDIT</Th>
                    <Th>DELETE</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((newdata, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{newdata.Useremail}</Td>
                      <Td isNumeric>{newdata.Username}</Td>
                      <Td isNumeric>
                        <Button onClick={isOpen} color={"white"} backgroundColor={"#24C287"}>
                          Edit
                        </Button>
                        <Modal isOpen={isOpen} onClose={onClose}>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>Modal Title</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              <p>heolsdf</p>
                            </ModalBody>

                            <ModalFooter>
                              <Button
                                colorScheme="blue"
                                mr={3}
                                onClick={onClose}
                              >
                                Close
                              </Button>
                              <Button variant="ghost">Secondary Action</Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </Td>
                      <Td isNumeric>
                        <Button color={"white"} backgroundColor={"red"}>
                          Delete
                        </Button>
                      </Td>
                      {/* <Td isNumeric>25.4</Td> */}
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          )
        ) : (
          <h1 className="text-6xl bg-red-300 mx-auto p-auto shadow-md text-white text-center shadow-gray-500 ">
            you are not verified
          </h1>
        )}
      </Box>
    </>
  );
};

export default Anavbar;
