import {
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Bdashboard = () => {
  const [auth, setAuth] = useState(true);
  const [data, setData] = useState([]);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [verifyResponse, dataResponse] = await Promise.all([
          axios.get("http://localhost:8000/"),
          axios.get("http://localhost:8000/bdashboard"),
         
        ]);
        // [verifyResponse,dataResponse].data.Status === 'Success' ? setAuth(true) : setAuth(false)

        if (verifyResponse.data.Status === "Success") {
          setAuth(true);
          const maindata = dataResponse.data.mainData;
          console.log(maindata);
          setData(maindata);
        } else {
          setAuth(false);
        }
        console.log(auth);
      } catch (error) {
        console.log(error);
      }

    };
    fetchData();
  }, [auth]);



  return (
    <>
      {auth ? (
        <>
          <h1>i am verified</h1>

          <TableContainer
            height={"100vh"}
            // border={"1px solid"}
            boxShadow={"3px 5px 15px gray"}
            position={'absolute'}
            mt={'10vh'}
            left={'15vw'}
            width={"70vw"}
          >
            <Table>
              <Thead >
                <Tr>
                  <Th>Location</Th>
                  <Th>Kitta</Th>
                  <Th>Price</Th>
                  <Th>Road access</Th>
                  <Th>Owner name</Th>
                  <Th>Discription</Th>
                  <Th>Gallery</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item, index) => (
                  <Tr key={index.id}>
                    <Td>{item.Location}</Td>
                    <Td>{item.Kitta}</Td>
                    <Td>{item.Price}</Td>
                    <Td>{item.Roadaccess?'Yes':'No'}</Td>
                    <Td>{item.Ownername}</Td>
                    <Td>{item.Description}</Td>
                    <Td><Img src={`http://localhost:8000/${item.Gallery}`}></Img></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <h1>i am not verified</h1>
      )}
    </>
  );
};

export default Bdashboard;
