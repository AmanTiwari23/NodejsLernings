import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserDashBoard = () => {
     const navigate = useNavigate();

     useEffect(()=>{
        
        if(!localStorage.getItem("name")){
              navigate("/")
        }
     },[]);


     const logout = () => {
        localStorage.clear();
        navigate("/");
     }


  return (
    <div className="flex flex-col justify-center items-center bg-gray-600">
     
      <h1 className="font-bold text-2xl text-white"> welcome to UserDashBoard</h1> 
      <div className="bg-blue-300 p-2 w-full flex justify-between">
       <div> welcome  <span className="font-bold"> {localStorage.getItem("name")}</span>  ! Email: {localStorage.getItem("email")}</div>
        <a className="border-2 bg-amber-200 rounded-2xl p-1.5 text-xl font-bold" href="#" onClick={logout}>Logout</a>
      </div>
    </div>
  );
};

export default UserDashBoard;
