import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    const api = `${import.meta.env.VITE_BASE_URL}/students/display1`;
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.bookname} </td>
          <td>{key.price} </td>
          <td>{key.authorid?.authorname} </td>
          <td>{key?.authorid?.email} </td>
        </tr>
      </>
    );
  });

  return (
    <>
      <h1> Display Data Book wise</h1>
      <hr />
      <table>
        <tr>
          <th> Book name</th>
          <th> Price</th>
          <th> Author name</th>
          <th> Email</th>
        </tr>
        {ans}
      </table>
    </>
  );
};

export default Search;
