import axios from 'axios';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // const navigate = useNavigate();
   

  // const userAuthenticate = async()=>{
  //     let api = `${import.meta.env.VITE_BASE_URL}/students/userauth`;
  //     const token = localStorage.getItem("token");
  //     if(token){
  //       const response = await axios.post(api,{},{headers:{"auth-token":token}});
  //       localStorage.setItem("name",response.data.name);
  //        localStorage.setItem("email",response.data.email);
  //        navigate("/userdashbord");
  //       console.log(response.data);
  //     }else{
  //       console.log("No token !!! you have in your Browser ");
  //     }
  // }

  // useEffect(()=>{
  //   userAuthenticate();
  // },[])
   const [image,setImage] = useState("");

   const handleImage = (e)=>{
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
    console.log(image);
   }

   const handleUpload = async()=>{
    let api = "http://localhost:8000/upload";

    const formdata = new FormData();
    formdata.append("myfile",image);
    const response = await axios.post(api,formdata);
    console.log(response.data);
   }
      

  return (
    <div>
     <h1> welcome to home page</h1>
     <h1>Upload file using Multer</h1>
     upload File: <input type='file' onChange={handleImage}/>
     <button onClick={handleUpload}>Upload</button>
        <h1> Welcome To Multiple File Uploading</h1>
    </div>
  )
}

export default Home