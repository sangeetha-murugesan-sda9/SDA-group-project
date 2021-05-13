import React from "react";
import { useTranslation } from "react-i18next";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import UserMeta from "../../components/UserMeta";
import king from "../../assets/img/icons/crown.svg"
import Auth from "../../services/Auth";
import Methods from "../../services/Methods";
import SlidingMenu from "../../components/SlidingMenu";
import like from "../../assets/img/logo/flame.png";



export default function WinnerPage({users}) {
  
  // Constants  
const [t, i18n] = useTranslation('common');
  //const winnerObj = Methods.getWinner(users); //[ userID, winningPictureID]
  const winner = users[Methods.getWinner(users)[0]]
  const winnerPicId = Methods.getWinner(users)[1]
console.log(winnerPicId)


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
            <h1> <img className="img-title img-30 " src={king} /> {t("winner.title")}</h1>
            <UserMeta user={winner} />
            
            <div>
            <div className="wrapper-img-square">
              <img id="main-img" src={winner.pictures[winnerPicId].url} alt="main-img" />
           
            <div className = "winner-score">
              
              <img className="img-70" src={like} alt="logo-like" />
              <p className = "winner-score-text">{winner.pictures[winnerPicId].likes} </p>
              
              </div>
            </div>
 </div>
            <div className="under-img-container">
              <a href= {"http://www.instagram.com/" + winner.instagram} target="blank" className="btn-blue">{t("winner.button")} </a>
            </div>
          </div>
        </main>
      
    </div>
  );
}
