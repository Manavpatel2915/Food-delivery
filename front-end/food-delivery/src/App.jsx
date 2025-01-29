import axios from 'axios';
import NavBar from './Components/Navbar/NavBar';
import CardContainer from './Components/cards/cardContainer';
import Collection from './Components/collections/Collection';
import Login from './Components/User/Login';
import { useState, useContext } from 'react';
import { LoginContext } from './contexts/loginContext';

const apiCall = ()=>{
  axios.get("http:/localhost:8080")
  .then((data)=>{
    console.log("API calling");
    console.log({data});
  });
}

export default function App() {
  const {isOpen, setisOpen} = useContext(LoginContext);
  return (
    <div className="App">
      <header className="App-header">
          
          {isOpen && <Login />}
          <NavBar/>
        
        
        <CardContainer />
        <Collection />
        
        {/* <button onClick={apiCall} className='bg-red-400 border-2 border-black'>Make API Call</button> */}

      </header>

      
    </div>
  );
}