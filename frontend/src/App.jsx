import React from "react";
import Insert from "./Insert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Display from "./Display";
import Search from "./Search";
import Update from "./Update";
import MyEdit from "./MyEdit";
import Home from "./Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home/>} />

            <Route path="insert" element={<Insert/>} />
             <Route path="display" element={<Display/>} />
              <Route path="search" element={<Search/>} />
               <Route path="update" element={<Update/>} />
                <Route path="myedit/:id" element={<MyEdit/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
