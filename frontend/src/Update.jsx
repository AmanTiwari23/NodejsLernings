import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Update = () => {
    const [mydata,setMydata] = useState([]);

    const loaddata = async()=>{
        let api =  "http://localhost:8000/students/updateData";
        const response = await axios.get(api);
        
        setMydata(response.data);

    }

    const mydel = async(id)=>{
        const api = `http://localhost:8000/students/updatedelete?id=${id}`;
        const response = await axios.delete(api);
        alert(response.data.msg);
        loaddata();
    }

    useEffect(()=>{
         loaddata();
    },[]);

    const ans = mydata.map((key)=>{
         return(
            <tr>
                <td>{key.rollno}</td>
                 <td>{key.name}</td>
                  <td>{key.city}</td>
                   <td>{key.fees}</td>
                   <td>Edit/ <a href='#' onClick={()=> mydel(key._id)}>Delete</a></td>
            </tr>
         )
    });

  return (
    <>
     <h1>Update Student Data</h1>
     <hr />
     <table>
        <thead>
            <tr>
                <th>rollno</th>
                <th>name</th>
                <th>city</th>
                <th>fees</th>
                <th>update</th>
            </tr>
        </thead>
        <tbody>
            {ans}
        </tbody>
     </table>

    </>
  )
}

export default Update