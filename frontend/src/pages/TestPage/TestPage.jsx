import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Card from "../../components/Card";
import Auth from "../../services/Auth";
import cat from "../../assets/img/cat.png";
import AuthApi from "../../api/AuthApi";
import UploadButton from "../../components/UploadButton";
import SlidingMenu from "../../components/SlidingMenu";
import Footer from "../../components/Footer"


export default function TestPage() {
 // Constants
 
 const currentUser = AuthApi.getCurrentUser();

 const API_URL = "https://my.api.mockaroo.com/user.json?key=ae007e80";
 const JSON_MOCKUP = require("../../api/api_users.json");
 const JSON_MOCKUP_URL = "../../api/api_users.json";

//states
 const [users,setUsers] = useState([]);

 // Methods
   //fetch data distant API
   function fetchdataURL() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setUsers(json));    
  }

  //fetch data distant API
  function fetchdataMOCKUP() {
    setUsers(JSON_MOCKUP);   
  }

  //use Effect
  useEffect(() => {
    fetchdataMOCKUP();
  }, []);

  
  return (
    <div className="general-container">


      { users === [0] && <p>Loading Data ...</p>}
    { users !== [0] && 

      <main>
        
           <p>Get likes for picture 1:</p>

          
      </main>
}

    <footer> <Footer /> </footer>
    </div>
                
  );
}
