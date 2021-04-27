import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import UserMeta from "../../components/UserMeta";
import winnerImg from "../../assets/img/mockup/winner.jpeg";
import janeImg from "../../assets/img/mockup/jane-thumbnail.png";
import VoteComponent from "../../components/VoteComponent";
import Auth from "../../services/Auth";

export default function ProfilePage() {
  
  // Constants
  const API_URL_photos = 'https://picsum.photos/v2/list';
  const [photos, setPhotos] = useState([]); // result of API fetch


  //Methods
  useEffect(() => {
    fetch(API_URL_photos)
      .then((response) => response.json())
      .then((json) => setPhotos(json));

      console.log(photos );
  }, []);


  return (
    <div className="general-container">
      <header>
        <NavBar onLogout={() => Auth.logout()} />
      </header>

      <main>
        <div className="profilepage-content">

          <div className="profilepage-submit-container" > 
          
          <img src={janeImg} alt="img" />
          <h1>Tove </h1>
          <p>Luleå, SWE </p>
          <p>You have XXX <em>FIRES</em></p>
          
            <button className="btn-blue">Submit a style</button>
            <button className="btn-white">Edit your profile</button>

          </div>

          <div>
            <h2>Discover more styles ...</h2>
            <div className="card-small-container">
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <button className="btn-submit-picture">Delete</button>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer> Follow us | about SDA | About us </footer>
    </div>
  );
}
