import Adashboard from "./admin/Adashboard";
import Admin from "./loginsignup/admin";
import Login from "./loginsignup/login";
import SignUp from "./loginsignup/Signup";
import {  Route,Routes } from "react-router-dom";
import Bdashboard from "./buyer/Bdashboard";
import Sdashboard from "./seller/Sdashboard";
import './index.css'
import Dashboard from "./Userdashboard/Dashboard";
import Singleprop from "./buyer/Singleprop";
import React from "react";
import { Provider } from "react-redux";
import store from "./reduxstore/store";
import Saved from "./buyer/Saved";
import Profile from "./Userdashboard/Profile";
import SimpleMap from "./Components/googlemap";
import Setting from "./Components/setting";

function App() {
  return (
    <>
    <Provider store={store}>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/adashboard" element={<Adashboard/>}/>

      <Route path="/bdashboard" element={<Bdashboard/>}/>
      <Route path="/sdashboard" element={<Sdashboard/>}/>
      <Route path="/bdashboard/:id" element={<Singleprop/>}/>
      <Route path="/saved" element={<Saved/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/setting" element = {<Setting/>}/>
      <Route path="/map" element={<SimpleMap/>}/>

    </Routes>
    </Provider>
    </>
  );
}

export default App;
