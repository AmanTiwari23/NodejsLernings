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
       Enter Roll no : <input  type='text' placeholder='enter your roll no' name="rollno" onChange={handleInput} /> <br />
       Enter Name : <input  type='text' placeholder='enter your name' name="name" onChange={handleInput} /> <br />
       Enter City : <input  type='text' placeholder='enter your rc' name="city" onChange={handleInput} /> <br />
       Enter Fees : <input  type='text' placeholder='enter your roll no' name="fees" onChange={handleInput} /> <br />

       <button onClick={handleSubmit}>Submit</button>


    </div>

  )
}

export default Insert