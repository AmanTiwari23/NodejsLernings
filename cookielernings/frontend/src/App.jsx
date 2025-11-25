import React, { useState } from "react";
import axios from "axios"
axios.defaults.withCredentials = true

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);

  const register = async ()=>{
  const res = await axios.post("http://localhost:5000/register",{username,password});
  alert(res.data.message);
  };

  const login = async()=>{
    try {
  const res = await axios.post("http://localhost:5000/login", { username, password });
  alert("loggin successfull");
} catch (err) {
  console.log(err.response?.data);
}

  };


  const getProfile = async()=>{
    try{
      const res = await axios.get("http://localhost:5000/profile");
      setProfile(res.data);
    }catch(err){
      alert("Not logged in");
    }
  };

  const logout = async()=>{
    await axios.post("http://localhost:5000/logout");
    setProfile(null);
    alert("logged out");
  }



  return (
    <div style={{ padding: "20px" }}>
      <h1>cookie auth</h1>
      <input
        placeholder="Username" name="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        placeholder="Password" name="password"
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      <br />
      <button onClick={register}>Register</button> <br />
      <button onClick={login}>Login</button> <br />
      <button onClick={logout}>Logout</button> <br />
        <button onClick={getProfile}>getprofile</button>

      {
        profile && (
        
            <div>
              <h2>Profile</h2>
              <p>{JSON.stringify(profile,null)}</p>
            </div>
        )
      }
    </div>
  );
};

export default App;
