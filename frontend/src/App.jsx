import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import UserDashBoard from "../UserDashBoard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

           
             <Route path="registration" element={<Registration/>} />
              <Route path="login" element={<Login/>} />
          </Route>
          <Route path="userdashbord" element={<UserDashBoard/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
