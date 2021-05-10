import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Card from "../../components/Card";
import Auth from "../../services/Auth";
import AuthApi from "../../api/AuthApi";
import SlidingMenu from "../../components/SlidingMenu";



export default function DiscoverPage() {
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
     
       <header>
       <SlidingMenu />
      <div className="nav-container">
        <NavBar onLogout={() => Auth.logout()} />
      </div>
      
      </header>

      { users === [0] && <p>Loading Data ...</p>}
    { users !== [0] && 

      <main>
        <div className="homepage-content">

          <div className="homepage-submit-container" > 
          
          </div>
          <div>
            <h2>Discover more styles ...</h2>
           
            <div className="card-small-container">

            <React.Fragment>
                {users.map((item) => (
                  <React.Fragment key={item.id}>
                    <Card item = {item} score = {false} votes = {true}  meta = {true} />                                                  
                  </React.Fragment>
                ))}
              </React.Fragment>
             
            </div>
          </div>
        </div>
      </main>
}
    </div>
                
  );
}
