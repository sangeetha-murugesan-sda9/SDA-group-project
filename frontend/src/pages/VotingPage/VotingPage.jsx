import React from "react";

import "../../styles/base.css"
import NavBar from "../../components/Navbar"
import UserMeta from "../../components/UserMeta"
import winnerImg from "../../assets/img/mockup/winner.jpeg"
import VoteComponent from "../../components/VoteComponent";
import Auth from "../../services/Auth";



export default function VotingPage() {
    
    return (
      <div className="general-container">
        <header>
          <NavBar onLogout={() => Auth.logout()}/>
        </header>

        <main>
            <div className ="winner-content">
          <h1>Vote for this style ...</h1>
          <UserMeta/>
          <img id = "main-img" src={winnerImg} alt="main-logo" />

          <div className="under-img-container">
           <VoteComponent />
          </div>
            </div>
            
        </main>

        <footer> Follow us | about SDA | About us </footer>
      </div>
    );
      
}
