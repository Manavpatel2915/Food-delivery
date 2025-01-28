import axios from 'axios';
import NavBar from './Components/Navbar/NavBar';
const apiCall = ()=>{
  axios.get("http:/localhost:8080")
  .then((data)=>{
    console.log("API calling");
    console.log({data});
  });
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        {/* <button onClick={apiCall} className='bg-red-400 border-2 border-black'>Make API Call</button> */}

      </header>

      
    </div>
  );
}