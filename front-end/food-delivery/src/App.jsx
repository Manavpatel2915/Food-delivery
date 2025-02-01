import axios from 'axios';
import NavBar from './Components/Navbar/NavBar';
import CardContainer from './Components/cards/cardContainer';
import Collection from './Components/collections/Collection';
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Login from './Components/User/Login';
import { useState, useContext } from 'react';
import { LoginContext } from './contexts/loginContext';
import Footer from './Components/Footer/Footer';
import DineOut from './Order/DineOut'
import DrinksAndNightlife from './Order/DrinksAndNightlife'
import OrderOnline from './Order/OrderOnline'
import RoofTop from './CollectionCard/RoofTop';
import GreatCafes from './CollectionCard/GreatCafes';
import GujaratiDelicacies from './CollectionCard/GujaratiDelicacies';
import LocalFavourite from './CollectionCard/LocalFavourite';
import MainNav from './Components/Navbar/MainNav';

const apiCall = ()=>{
  axios.get("http:/localhost:8080")
  .then((data)=>{
    console.log("API calling");
    console.log({data});
  });
}

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <div>
                         
        <NavBar/>
        <CardContainer />
        <Collection />
        <Footer/>
      </div>

    },
    {
      path:"/order-online",
      element:<OrderOnline/>
    },
    {
      path:"/dine-out",
      element:<DineOut/>
    },
    {
      path:"/drinks-and-nightlife",
      element:<DrinksAndNightlife/>
    },
    {
      path:"/gujarati-delicacies",
      element:<GujaratiDelicacies/>
    },
    {
      path:"/great-cafes",
      element:<GreatCafes/>
    },
    {
      path:"/local-favourite",
      element:<LocalFavourite/>
    },
    {
      path:"/roof-top",
      element:<RoofTop/>
    },
    {
      path:"index/:id",
      element:<div>
        <MainNav/>
        
      </div>
    }
  ]
)

export default function App() {
  const {isOpen, setisOpen} = useContext(LoginContext);
  return (
    <div className="App">
        {isOpen && <Login />}
        <RouterProvider router={router}/>
    </div>
  );
}