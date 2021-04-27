import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Card from "../../components/Card";
import homeImg from "../../assets/img/home-img.png";
import Auth from "../../services/Auth";



export default function DiscoverPage() {
 // Constants
 const photos = require("../../api/api_photos.json");
 const users = require("../../api/api_users.json");
 const [fetchedPhotos,setFetchedPhotos] = useState([]);
 const [fetchedUsers,setFetchedUsers] = useState([]);

 const randomUser = Math.floor(Math.random() * 10);



 // Methods
 //fetch photos  
 useEffect(() => {
  fetch("https://picsum.photos/v2/list?page=2&limit=3")
    .then((response) => response.json())
    .then((json) => setFetchedPhotos(json));
    /* console.log(fetchedPhotos[0].download_url) */
}, []);

 //fetch users 
 useEffect(() => {
  fetch("https://gorest.co.in/public-api/users")
    .then((response) => response.json())
    .then((json) => setFetchedUsers(json));
    console.log(fetchedUsers) ;
}, []);


  
  return (
    <div className="general-container">
      <header>
        <NavBar onLogout={() => Auth.logout()} />
      </header>

      <main>
        <div className="homepage-content">

          <div className="homepage-submit-container" > 
          <img src={homeImg} alt="img" />
            <button className="btn-blue">Submit a style</button>
          </div>

          <div>
            <h2>Discover more styles ...</h2>
            <div className="card-small-container">

            <React.Fragment>
                {fetchedPhotos.map((item) => (
                  <React.Fragment key={item.id}>
                    <Card item ={item} score = {false} votes = {true}  meta = {true} users={users}/>                                                  
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
