import { Table, TableContainer, Tbody, Thead } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const Adashboard = () => {
  const [auth, setAuth] = useState(false);
  const [data, setData] = useState([{}]);

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
      {auth ? (
        typeof data === "undefined" ? (
          <h1>there is no data</h1>
        ) : (
          <TableContainer mt={"1vh"}>
            <Table
              size={"sm"}
              variant="striped"
              colorScheme="teal"
              border={"1px solid"}
            >
              <Thead border={"1px solid"} color={"blue"}>
                <tr>
                  <th>S.no.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Username</th>
                </tr>
              </Thead>
              <Tbody>
                {data.map((newdata, index) => (
                  <tr key={newdata.id}>
                    <td>{index + 1}</td>
                    <td>{newdata.Username}</td>
                    <td>{newdata.Useremail}</td>
                    <td>{newdata.Userpassword}</td>
                    <td>{newdata.Userrole}</td>
                  </tr>
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
    </>
  );
};
export default Adashboard;
