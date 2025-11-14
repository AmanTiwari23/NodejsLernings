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

    const api = `${import.meta.env.VITE_BASE_URL}/students/save`;
    const response = await axios.post(api,input);
    console.log(response);
    alert(response.data);

  }
    

  return (
    <div>
       <h1>Insert author Data</h1> <br /> 
        Enter authorname : <input type="text" name="name" onChange={handleInput} />
         <br/>
          Enter email : <input type="email" name="email" onChange={handleInput} />
         <br/>
          Enter Booktitle : <input type="text" name="booktitle" onChange={handleInput} />
         <br/>
          Enter Price : <input type="text" name="price" onChange={handleInput} />
        
       <button onClick={handleSubmit}>Submit</button>


    </div>

  )
}

export default Insert