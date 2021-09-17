// import logo from './logo.svg';
// import './App.css';

import React from "react";
import Aloha from "./components/Aloha";
import Image from "./components/Image";
import Clicker from "./components/Clicker"


function App() {
  return <React.Fragment>
    <Aloha name = "Masha" isGreeting/>
    <Aloha name = "Test"/>
    <Clicker />
    <Image alt="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png"/>
  </React.Fragment> 
}

export default App;
