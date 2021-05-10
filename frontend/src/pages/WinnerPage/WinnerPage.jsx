import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import UserMeta from "../../components/UserMeta";
import king from "../../assets/img/icons/crown.svg"
import Auth from "../../services/Auth";
import Methods from "../../services/Methods";
import AuthApi from "../../api/AuthApi";
import SlidingMenu from "../../components/SlidingMenu";
import like from "../../assets/img/logo/flame.png";


export default function WinnerPage() {
  // Constants

  const currentUser = AuthApi.getCurrentUser();
  

  const JSON_MOCKUP = require("../../api/api_users.json");
  

  //states
  const [users, setUsers] = useState([0]);

  //fetch data distant API
  function fetchdataMOCKUP() {
    setUsers(JSON_MOCKUP);
  }

  //use Effect
  useEffect(() => {
    fetchdataMOCKUP();
  }, []);

  const winnerObj = Methods.getWinner(JSON_MOCKUP);
  const winner = users[winnerObj[0]]

 
  

  return (
    <div className="general-container">
      <header>
      <SlidingMenu />
      <div className="nav-container">
        <NavBar onLogout={() => Auth.logout()} />
      </div>
      
      </header>

      {winner === undefined && <p>Loading Data ...</p>}

      {winner !== undefined && (
        <main>
          <div className="winner-content">
            <h1> <img className="img-30" src={king} /> Current idol </h1>
            <UserMeta users={winner} />
            <div>
            <div className="wrapper-img-square">
              <img id="main-img" src={winner.pictures[winnerObj[1]].url} alt="main-img" />
            </div>
            <p className = "winner-score">{winner.pictures[winnerObj[1]].likes} <img className="img-30" src={like} alt="logo-like" /></p>
            </div>

            <div className="under-img-container">
              <a href= "http://www.instagram.com" target="blank" className="btn-blue">Follow Me </a>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
