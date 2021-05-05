import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import UserMeta from "../../components/UserMeta";
import winnerImg from "../../assets/img/mockup/PowerRangers/power_rainbow.jpg";
import Auth from "../../services/Auth";
import AuthApi from "../../api/AuthApi";
import SlidingMenu from "../../components/SlidingMenu";
import Footer from "../../components/Footer"
import FooterSangeetha from "../../components/FooterSangeetha"

export default function WinnerPage() {
  // Constants

  const currentUser = AuthApi.getCurrentUser();

  const API_URL = "https://my.api.mockaroo.com/user.json?key=ae007e80";
  const JSON_MOCKUP = require("../../api/api_users.json");
  const JSON_MOCKUP_URL = "../../api/api_users.json";

  //states
  const [users, setUsers] = useState([0]);
  const randomId = Math.floor(Math.random() * 25);
  const randomUser = users[randomId];

  // Methods
  //fetch data distant API
  function fetchdataURL() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }

  //fetch data distant API
  function fetchdataMOCKUP() {
    setUsers(JSON_MOCKUP);
  }

  //use Effect
  useEffect(() => {
    fetchdataMOCKUP();
  }, []);

  console.log(randomUser);

  return (
    <div className="general-container">
      <header>
      <SlidingMenu />
      <div className="nav-container">
        <NavBar onLogout={() => Auth.logout()} />
      </div>
      
      </header>

      {randomUser === undefined && <p>Loading Data ...</p>}

      {randomUser !== undefined && (
        <main>
          <div className="winner-content">
            <h1>Current idol</h1>
            <UserMeta users={randomUser} />
            <div className="wrapper-img-square">
              <img id="main-img" src={winnerImg} alt="main-img" />
            </div>

            <div className="under-img-container">
              <button className="btn-blue">Follow Me </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
