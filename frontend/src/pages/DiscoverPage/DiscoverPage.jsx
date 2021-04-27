import React from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import winnerImg from "../../assets/img/mockup/winner.jpeg";
import Card from "../../components/Card";
import homeImg from "../../assets/img/home-img.png";
import VoteComponent from "../../components/VoteComponent";
import Auth from "../../services/Auth";

export default function DiscoverPage() {
 // Constants
 const photos = require("../../api/api_photos.json");
 const users = require("../../api/api_users.json");

 const randomUser = Math.floor(Math.random() * 10);
  
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
                {photos.map((item) => (
                  <React.Fragment key={item.id}>
                    <Card item ={item} score = {false} votes = {true} />                                                  
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
