import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyEdit = () => {
  const [myData, setMydata] = useState({});
  const { id } = useParams();

  const loaddata = async () => {
    const api = `${import.meta.env.VITE_BASE_URL}/students/editdatadisplay/${id}`;
    const response = await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loaddata();
  }, []);

  const handleChange = (e) => {
     const name = e.target.name;
     const value = e.target.value;

     setMydata(values=> ({...values , [name]:value}));
     console.log(myData);
  };

  const handleUpdate = async()=>{
    let api = `http://localhost:8000/students/editdata`;
    const response = await axios.post(api, myData);
    alert(response.data.msg);


  }

  return (
    <>
      <h1>Edit Data</h1>
      Edit rollno:{" "}
      <input
        type="text"
        name="rollno"
        value={myData.rollno || ""}
        onChange={handleChange}
      /> <br />
      Edit Name:{" "}
      <input
        type="text"
        name="name"
        value={myData.name || ""}
        onChange={handleChange}
      />  <br />
      Edit city:{" "}
      <input
        type="text"
        name="city"
        value={myData.city || ""}
        onChange={handleChange}
      />  <br />
      Edit fees:{" "}
      <input
        type="text"
        name="fees"
        value={myData.fees || ""}
        onChange={handleChange}
      /> <br />

      <button onClick={handleUpdate}>Update</button>
    </>
  );
};

export default MyEdit;
