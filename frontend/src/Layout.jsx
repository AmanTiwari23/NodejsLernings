import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <>
    <Link to="/">Home</Link> |
     <Link to="insert">Insert</Link> |
      <Link to="display">display</Link> |
      <Link to="search">Search</Link>
      
      <hr />

      <Outlet/>




    </>
  )
}

export default Layout