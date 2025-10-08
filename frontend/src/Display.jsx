import axios from "axios";
import React, { useEffect, useState } from "react";

const Display = () => {
  const [mydata, setMyData] = useState([]);

  const loaddata = async () => {
    const api = "http://localhost:8000/students/display";
    const response = await axios.get(api);
    console.log(response);
    setMyData(response.data);
  };

  useEffect(() => {
    loaddata();
  }, []);

  const ans = mydata.map((key) => {
    return (
      <>
        <tr key={key.id}>
          <td>{key.rollno}</td>
          <td>{key.name}</td>
          <td>{key.city}</td>
          <td>{key.fees}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <h1>Dispaly data</h1>
      <div style={{display:"flex", justifyContent:"center" ,width:"100vw"}}>
        <table border="2px solid" style={{width:"50vw"}}>
          <th>rollno</th>
          <th>name</th>
          <th>city</th>
          <th>fees</th>

          <tbody>{ans}</tbody>
        </table>
      </div>
    </>
  );
};

export default Display;
