// import React from 'react';
import * as React from 'react'
const NavBar = () => {
    return ( 
        <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark "> 
  <ul> 
    <li><a href="/"> Home</a></li> 
    <li><a href="/about">About</a></li>
    <li><a href="/weather">Weather</a></li>
    <li><a href="/space">Space</a></li>
    
    <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input className="btn btn-outline-success"type="submit" value="Submit" />
</form>
 </ul> 
</nav> 


   
    </>  
     );
}
 
export default NavBar;