import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


const Update = () => {
  const [mydata, setMydata] = useState([]);
  const navigate = useNavigate()

  const loaddata = async () => {
    let api = `${import.meta.env.VITE_BASE_URL}/students/updateData`;
    const response = await axios.get(api);

    setMydata(response.data);
  }; 

  const mydel = async (id) => {
    const api = `http://localhost:8000/students/updatedelete?id=${id}`;
    const response = await axios.delete(api);
    alert(response.data.msg);
    loaddata();
  };

  const myedit = async (id)=>{
    navigate(`/myedit/${id}`)
  };

  useEffect(() => {
    loaddata();
  }, []);

  const ans = mydata.map((key) => {
    return (
      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
        <td>
          {" "}
          <a href="#" onClick={() => myedit(key._id)}>
            edit
          </a>
          /{" "}
          <a href="#" onClick={() => mydel(key._id)}>
            Delete
          </a>
        </td>
      </tr>
    );
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
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default Update;
