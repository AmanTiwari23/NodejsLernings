import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'


const Display = () => {
  const [mydata,setMydata] = useState([]);

  const loaddata=async()=>{

   let api = `${import.meta.env.VITE_BASE_URL}/students/display`;
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
    }

    useEffect(()=>{
      loaddata();
    },[]);

    const ans = mydata.map((key)=>{
      return(
        <>
        <tr>
          <td>
            <img src={key.defaultImage} alt="image" className='w-16 h-16' /> <br />
            {
              key.images.map((key1)=>{
                return <img src={key1} className='w-16 h-16'/>
              })
            }
          </td>
          <td>{key.name}</td>
          <td>{key.email}</td>
          <td>{key.subject}</td>
        </tr>
        </>
      )
    })
  return (
    <>
   <h1> Data display</h1>
      <table>
        <tr>
          <th></th>
          <th>Name</th>
          <th> Email</th>
          <th> Subject</th>
        </tr>
        {ans}
      </table>
    </>
  )
}

export default Display