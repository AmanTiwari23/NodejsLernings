import axios from 'axios';
import React from 'react'

const Home = () => {
    const handleSubmit = async()=>{
      try{

         const api = `${import.meta.env.VITE_BASE_URL}/home`;
        const response = await axios.get(api);
        console.log(response.data);
      }catch(err){
        alert(err.response.data);
      }
       
    }

      const handleserviceSubmit = async()=>{
        try{

           const api = `${import.meta.env.VITE_BASE_URL}/service`;
        const response = await axios.get(api);
        console.log(response.data);
        }catch(err){
          alert(err.response.data);
        }
       
    }

      const handleaboutSubmit = async()=>{
        try{

          const api = `${import.meta.env.VITE_BASE_URL}/about`;
        const response = await axios.get(api);
        console.log(response.data);
        }catch(err){
          alert(err.response.data);
        }
        
    }

  return (
    <div>
      welcome to home page
      <button onClick={handleSubmit}>submit</button>
       <button onClick={handleserviceSubmit}>service</button>
        <button onClick={handleaboutSubmit}>about</button>

    </div>
  )
}

export default Home