import axios from 'axios';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
   

  const userAuthenticate = async()=>{
      let api = `${import.meta.env.VITE_BASE_URL}/students/userauth`;
      const token = localStorage.getItem("token");
      if(token){
        const response = await axios.post(api,{},{headers:{"auth-token":token}});
        localStorage.setItem("name",response.data.name);
         localStorage.setItem("email",response.data.email);
         navigate("/userdashbord");
        console.log(response.data);
      }else{
        console.log("No token !!! you have in your Browser ");
      }
  }

  useEffect(()=>{
    userAuthenticate();
  },[])


      

  return (
    <div>
      welcome to home page
      
    </div>
  )
}

export default Home