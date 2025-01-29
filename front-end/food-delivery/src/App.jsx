import axios from 'axios';
import NavBar from './Components/Navbar/NavBar';
import CardContainer from './Components/cards/cardContainer';
import Collection from './Components/collections/Collection';
import Footer from './Components/Footer/Footer';
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
        <CardContainer />
        <Collection />
        {/* <button onClick={apiCall} className='bg-red-400 border-2 border-black'>Make API Call</button> */}

      </header>

      <Footer/>
      
    </div>
  );
}