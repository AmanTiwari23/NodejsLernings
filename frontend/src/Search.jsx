import axios from 'axios';
import React, { useState } from 'react'

const Search = () => {
    const[input,setInput] = useState("");
    const [mydata,setMydata] = useState([]);

    const handleSubmit = async()=>{
        const api = `${import.meta.env.VITE_BASE_URL}/students/search`;
        const response = await axios.post(api,{rollno:input});
        console.log(response);
        setMydata(response.data);
        
    }

    const ans = mydata.map((key)=>{
        return(
            <tr>
                <td>{key.rollno}</td>
                 <td>{key.name}</td>
                  <td>{key.city}</td>
                   <td>{key.fees}</td>
            </tr>
        )
    })

  return (
    <>
    <h1>Search Student</h1> <br />

    Enter Rollno : <input type='text' name='rollno' onChange={(e)=>setInput(e.target.value) }/>
    <button onClick={handleSubmit}>Submit</button>

    <table>
  <tr>
    <th>rollno</th>
     <th>name</th>
      <th>city</th>
       <th>fees</th>
  </tr>
  <tbody>
    {ans}
  </tbody>


    </table>

    
    </>
  )
}

export default Search