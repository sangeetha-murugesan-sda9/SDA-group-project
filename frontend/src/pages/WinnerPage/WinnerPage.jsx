import React from "react";

import "../../styles/base.css"
import NavBar from "../../components/Navbar"
import UserMeta from "../../components/UserMeta"
import winnerImg from "../../assets/img/mockup/PowerRangers/power_rainbow.jpg"
import Auth from "../../services/Auth";



export default function WinnerPage() {
    
    return (
      <div className="general-container">
        <header>
        <NavBar onLogout={() => Auth.logout()}/>
        </header>

        <main>
            <div className ="winner-content">
          <h1>Current idol</h1>
          <UserMeta/>
<div className="wrapper-img-square">
  <img id = "main-img" src={winnerImg} alt="main-img"/>
</div>
          

          <div className="under-img-container">
            <button className="btn-blue">Follow Me </button>
          </div>
            </div>

        </main>

        <footer> Follow us | about SDA | About us </footer>
      </div>
    );
      
}
