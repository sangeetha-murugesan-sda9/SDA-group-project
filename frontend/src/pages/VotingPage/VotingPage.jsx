import { React, useState, useEffect } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import UserMeta from "../../components/UserMeta";
import VoteComponent from "../../components/VoteComponent";
import Auth from "../../services/Auth";
import AuthApi from "../../api/AuthApi";
import SlidingMenu from "../../components/SlidingMenu";

export default function VotingPage({users}) {
  // Constants
  const randomId = Math.floor(Math.random() * users.length);
  const randomUser = users[randomId];
  const randomPictureId = Math.floor(Math.random() * randomUser.pictures.length)  

  return (
    <div className="general-container">

      <header>
        <SlidingMenu />
        <div className="nav-container">
          <NavBar onLogout={() => Auth.logout()} />
        </div>
      </header>
           
        <main>
          <div className="winner-content">
            <h1>Vote for this style ...</h1>
            <UserMeta user={randomUser} />

            <div className="wrapper-img-square">
              <img
                id="main-img"
                src={randomUser.pictures[randomPictureId].url }
                alt="main-logo"
              />
              
              {/*  for testing, retrieve a random id and picture id of that user
              <p> userId :{randomUser.id}</p>
              <p> pictureId :{randomUser.pictures[Math.floor(Math.random() * randomUser.pictures.length)].id}</p> */}
            
            </div>
            <div className="under-img-container">
              <VoteComponent />
            </div>
          </div>
        </main>
      
    </div>
  );
}
