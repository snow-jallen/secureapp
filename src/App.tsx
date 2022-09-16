import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './Components/Navbar';
import OurNavbar from './Components/OurNavbar';
import BasicGrid from './Components/BasicGrid';


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  
  useEffect(() => {
  console.log("loggedIn",loggedIn)   
  // setLoggedIn(!loggedIn)
    
  },[loggedIn])
  
  const toggleLoginState=()=>{
    console.log("I am here", loggedIn)
    setLoggedIn(!loggedIn)
  }

  return (
    <div className="App">
      <ButtonAppBar loginHandler={toggleLoginState} loggedIn={loggedIn}/>
      <div>
        <BasicGrid/>
      </div>
    </div>
  );


}



export default App;
