import Adashboard from "./admin/adashboard";
import Admin from "./loginsignup/admin";
import Login from "./loginsignup/login";
import SignUp from "./loginsignup/Signup";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Bdashboard from "./buyer/Bdashboard";
import Sdashboard from "./seller/Sdashboard";
import './index.css'
import Dashboard from "./Userdashboard/Dashboard";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/bdashboard" element={<Bdashboard/>}/>
      <Route path="/sdashboard" element={<Sdashboard/>}/>
    </Routes>
    </>
  );
}

export default App;
