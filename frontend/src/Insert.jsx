import React, { useState } from 'react'
import axios from "axios"

const Insert = () => {

  const [input,setInput] = useState({});

  const handleInput = (e)=>{
   const name = e.target.name;
   const value = e.target.value;

   setInput(()=>({...input, [name]:value}));

  }

  const handleSubmit = async()=>{

    const api = `${import.meta.env.VITE_BASE_URL}/students/insert`;
    const response = await axios.post(api,input);
    console.log(response);
    alert(response.data);

  }
    

  return (
    <div>
       <h1>Insert student Data</h1> <br /> 
       Enter userName : <input  type='text' placeholder='enter your roll no' name="uname" onChange={handleInput} /> <br />
       Enter Email : <input  type='text' placeholder='enter your name' name="email" onChange={handleInput} /> <br />
       Enter FirstName : <input  type='text' placeholder='enter your rc' name="fname" onChange={handleInput} /> <br />
       Enter LastName : <input  type='text' placeholder='enter your roll no' name="lname" onChange={handleInput} /> <br />

       <button onClick={handleSubmit}>Submit</button>


    </div>

  )
}

export default Insert