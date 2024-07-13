import Adashboard from "./admin/adashboard";
import Admin from "./loginsignup/admin";
import Login from "./loginsignup/login";
import SignUp from "./loginsignup/Signup";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Bdashboard from "./buyer/bdashboard";
import Sdashboard from "./seller/sdashboard";
import './index.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
