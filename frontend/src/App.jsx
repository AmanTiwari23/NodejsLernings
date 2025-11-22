import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./Login";
import Registration from "./Registration";
import UserDashBoard from "../UserDashBoard";
import Insert from "./Insert";
import Display from "./Display";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

           
             <Route path="registration" element={<Registration/>} />
              <Route path="login" element={<Login/>} />
               <Route path="insert" element={<Insert/>} />
          <Route path="display" element={<Display/>} />
          </Route>
          <Route path="userdashbord" element={<UserDashBoard/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
