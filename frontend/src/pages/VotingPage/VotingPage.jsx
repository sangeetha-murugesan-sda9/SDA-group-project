import { React } from "react";
import { useTranslation } from "react-i18next";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import UserMeta from "../../components/UserMeta";
import VoteComponent from "../../components/VoteComponent";
import Auth from "../../services/Auth";
import SlidingMenu from "../../components/SlidingMenu";

export default function VotingPage({users}) {
  // Constants
  
  //translation
  const [t, i18n] = useTranslation('common');

  //randomization of the display 
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
          <div className="page-title">
            <h1>{t("vote.title")}</h1>
            </div>
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
              <VoteComponent refresh ={true} />
            </div>
          </div>
        </main>
      
    </div>
  );
}
