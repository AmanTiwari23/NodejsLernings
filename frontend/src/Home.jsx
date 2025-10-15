import axios from 'axios';
import React from 'react'

const Home = () => {
    const handleSubmit = async()=>{
        const api = `${import.meta.env.VITE_BASE_URL}/home`;
        const response = await axios.get(api);
        console.log(response.data);
    }

      const handleserviceSubmit = async()=>{
        const api = `${import.meta.env.VITE_BASE_URL}/service`;
        const response = await axios.get(api);
        console.log(response.data);
    }

      const handleaboutSubmit = async()=>{
        const api = `${import.meta.env.VITE_BASE_URL}/about`;
        const response = await axios.get(api);
        console.log(response.data);
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