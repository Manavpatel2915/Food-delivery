import axios from 'axios';
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

        <button onClick={apiCall} className='bg-red-400 border-2 border-black'>Make API Call</button>

      </header>

      
    </div>
  );
}