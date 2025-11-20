import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword]= useState("");
  const navigate = useNavigate()

const handleSubmit = async () =>{
   let api = `${import.meta.env.VITE_BASE_URL}/students/login`;
   const response = await axios.post(api, {email,password});
   console.log(response.data);
   localStorage.setItem("token",response.data.token);
   navigate("/");
}
  

  return (
    <>
    <h1>user login</h1>
    Enter email : <input className='border-2 border-black p-1.5' type='text' value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
    Enter password : <input className='border-2 border-black p-1.5' type='text' value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
    <br />
    <button  className='p-2 bg-green-500' onClick={handleSubmit}>Login</button>
    </>
  )
}

export default Login

