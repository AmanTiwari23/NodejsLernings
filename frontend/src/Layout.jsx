import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Home from './Home'


const Layout = () => {
  return (
    <>
    <Link to="/">Home</Link> |
     <Link to="insert">Insert</Link> |
      <Link to="display">display</Link> |
      <Link to="search">Search</Link> |
      <Link to="update">Update</Link> |
       <Link to="registration">Registration</Link> | 
        <Link to="login">Login</Link>

      
      <hr />
      

      <Outlet/>




    </>
  )
}

export default Layout