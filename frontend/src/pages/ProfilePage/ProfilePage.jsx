import React from "react";
import { useEffect, useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Card from "../../components/Card";
import janeImg from "../../assets/img/mockup/jane-thumbnail.png";
import Auth from "../../services/Auth";

export default function ProfilePage() {
  // Constants
  const photos = require("../../api/api_photos.json");
  const users = require("../../api/api_users.json");
  const [fetchedPhotos,setFetchedPhotos] = useState([]);

  const randomUser = Math.floor(Math.random() * 10);
  
  /*   const [photos, setPhotos] = useState([]); // result of API fetch for photos
  const [users, setUsers] = useState([]); // result of API fetch for users
   */

  //Methods
  //fetch photos  
  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=2&limit=7")
      .then((response) => response.json())
      .then((json) => setFetchedPhotos(json));
      
  }, []);  

  

  return (
    <div className="general-container">
      <header>
        <NavBar onLogout={() => Auth.logout()} />
      </header>

      <main>
        <div className="profilepage-content">
          <div className="profilepage-submit-container">
            <img src={janeImg} alt="img" />
            <h1>{users[randomUser].username}</h1>
            <p>{users[randomUser].address.city} </p>
            <p>
              You have XXX <em>FIRES</em>
            </p>

            <button className="btn-blue">Submit a style</button>
            <button className="btn-white">Edit your profile</button>
          </div>

          <div>
            <h2>{users[randomUser].username} styles ...</h2>
            <div className="card-small-container">

              <React.Fragment>
                {photos.map((item) => (
                  <React.Fragment key={item.id}>
                    <Card item ={item} score = {true} votes = {false} meta = {false}  users = {users}/>                                                  
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
