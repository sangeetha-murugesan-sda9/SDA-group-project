import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Card from "../../components/Card";
import Auth from "../../services/Auth";
import cat from "../../assets/img/cat.png";


export default function DiscoverPage() {
 // Constants
 //const photos = require("../../api/api_photos.json");
 //const users = require("../../api/api_users.json");
 const [fetchedPhotos,setFetchedPhotos] = useState([]);
 const [fetchedUsers,setFetchedUsers] = useState([]);

 //const randomUser = Math.floor(Math.random() * 10);



 // Methods
 //fetch photos  
 useEffect(() => {
  fetch("https://picsum.photos/v2/list?page=2&limit=7")
    .then((response) => response.json())
    .then((json) => setFetchedPhotos(json));
    
}, []);

 //fetch users 
 useEffect(() => {
  fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
    .then((response) => response.json())
    .then((json) => setFetchedUsers(json));
    }, [fetchedPhotos]);


  
  return (
    <div className="general-container">
      <header>
        <NavBar onLogout={() => Auth.logout()} />
      </header>

      <main>
        <div className="homepage-content">

          <div className="homepage-submit-container" > 
          <img src={cat} alt="img" />

            <button className="btn-float"> + </button>


          </div>

          <div>
            <h2>Discover more styles ...</h2>
            <div className="card-small-container">

            <React.Fragment>
                {fetchedPhotos.map((item) => (
                  <React.Fragment key={item.id}>
                    <Card item ={item} score = {false} votes = {true}  meta = {true} users={fetchedUsers}/>                                                  
                  </React.Fragment>
                ))}
              </React.Fragment>
             
            </div>
          </div>
        </div>
      </main>

      <footer> Follow us | about SDA | About us </footer>
    </div>
  );
}
