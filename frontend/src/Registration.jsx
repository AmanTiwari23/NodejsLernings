import axios from 'axios';
import React, { useState } from 'react'

const Registration = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


  const handleSubmit = async()=>{
    let api = "http:/localhost:8000/students/registration";
    const response = await axios.post(api,{name,email,password});
    console.log(response.data);
  }


  return (
    <>
    <h1>User Registration</h1>
    Enter userName  <input type='text' className='border-2 border-black p-1.5' value={name} onChange={(e)=>{setName(e.target.value)}}/>  <br />
     Enter email  <input type='text'  className='border-2 border-black p-1.5' value={name} onChange={(e)=>{setEmail(e.target.value)}}/>  <br />
      Enter password  <input type='text'  className='border-2 border-black p-1.5'  value={name} onChange={(e)=>{setPassword(e.target.value)}}/>  <br />
       
       <button onClick={handleSubmit} className='p-2 bg-green-500'>Registration</button>
    </>
  )
}

export default Registration