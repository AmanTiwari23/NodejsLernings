import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const Insert = () => {
    const [input,setInput] = useState({});
    const [images,setImages] = useState('');

    const handleInput = async(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setInput(values => ({...values,[name]:value}));
        console.log(input);

    }

    const handleImage = (e)=>{
        console.log(e.target.files);
        setImages(e.target.files);
    }

    const handleSubmit = async()=>{
         let api = `${import.meta.env.VITE_BASE_URL}/students/stusave`;

         const formData = new FormData();

         for(var key in input){
            formData.append(key,input[key]);
         }
         for(let i = 0; i< images.length; i++){
            formData.append("images",images[i]);
         }
          
         const response = await axios.post(api,formData);
         console.log(response.data); 

    }
  return (
    <>
    <h1>User Registration</h1>
    Enter Student Name <input className='border border-black m-1' type='text' name='name' onChange={handleInput} /> <br />
      Enter Student email <input className='border border-black m-1' type='text' name='email' onChange={handleInput} /> <br />
        Enter Subject <input className='border border-black m-1' type='text' name='subject' onChange={handleInput} /> <br />
          Upload Images <input className='border border-black p-1.5 ' type='file' multiple onChange={handleImage} /> <br />
          <button  className="p-1.5 bg-green-400" onClick={handleSubmit}>Save!!</button>
    </>
  )
}

export default Insert