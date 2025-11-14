import axios from "axios";
import React, { useEffect, useState } from "react";

const Display = () => {
  const [mydata, setMyData] = useState([]);

  const loaddata = async () => {
    const api = `${import.meta.env.VITE_BASE_URL}/students/display`;
    const response = await axios.get(api);
    console.log(response);
    setMyData(response.data);
  };

  useEffect(() => {
    loaddata();
  }, []);

  const ans = mydata.map((key) => {
   
    return (

      
        <tr key={key._id}>
          <td>{key.firstName}</td>
          <td>{key.lastName}</td>
          <td>{key.userid.username}</td>
          <td>{key.userid.email}</td>
        </tr>
      
    );
  });

  return (
    <>
      <h1>Dispaly data</h1>
      <div style={{display:"flex", justifyContent:"center" ,width:"100vw"}}>
        <table border="2px solid" style={{width:"50vw"}}>
         <thead>
          <tr>
            <td>rollno</td>
          <td>name</td>
          <td>city</td>
          <td>fees</td>
          </tr>
          
</thead> 
          <tbody>{ans}</tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
