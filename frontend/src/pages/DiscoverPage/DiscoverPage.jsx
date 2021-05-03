import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Card from "../../components/Card";
import Auth from "../../services/Auth";
import cat from "../../assets/img/cat.png";
import UploadButton from "../../components/UploadButton";


export default function DiscoverPage() {
 // Constants
 const API_URL ='https://my.api.mockaroo.com/user.json?key=ae007e80';

//states
 const [users,setUsers] = useState([]);

 // Methods
 //fetch data 
 useEffect(() => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((json) => setUsers(json));  
}, []);

  
  return (
    <div className="general-container">
      <header>
        <NavBar onLogout={() => Auth.logout()} />
      </header>

      { users === [0] && <p>Loading Data ...</p>}
    { users != [0] && 

      <main>
        <div className="homepage-content">

          <div className="homepage-submit-container" > 
          
          </div>

          <div>
            <h2>Discover more styles ...</h2>
            < UploadButton/>
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

      <footer> Follow us | about SDA | About us </footer>
    </div>
                
  );
}
