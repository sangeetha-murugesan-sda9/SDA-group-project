import React from "react";
import { Link } from "react-router-dom";

import "../../styles/base.css"
import NavBar from "../../components/Navbar"
import winnerImg from "../../assets/img/mockup/winner.jpeg"



export default function WinnerPage() {
    
    return (
      <div className="general-container">
        <header>
          <NavBar />
        </header>

        <main>
          <h1>Current idol</h1>
          <p> picture + username + instagram link</p>
          <img src={winnerImg} />
          <div className="under-img-container">
            <button className="btn-follow">Follow "username" </button>
          </div>
          
        </main>

        <footer> Follow us | about SDA | About us </footer>
      </div>
    );
      
}
