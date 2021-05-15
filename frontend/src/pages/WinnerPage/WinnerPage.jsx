import React from "react";
import { useTranslation } from "react-i18next";
import Moment from "react-moment";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import UserMeta from "../../components/UserMeta";
import king from "../../assets/img/icons/crown.svg"
import Auth from "../../services/Auth";
import Methods from "../../services/Methods";
import SlidingMenu from "../../components/SlidingMenu";
import like from "../../assets/img/logo/flame.png";
import CountdownComponent from "../../components/CountdownComponent";



export default function WinnerPage({users}) {
  
  // Constants  
const [t, i18n] = useTranslation('common');

    


 const winnerId = Methods.getWinner(users)[0];
 const winnerPicId = Methods.getWinner(users)[1] 
  const winner = Methods.getUserById(users,winnerId)

 const winnerPic = winner.pictures.filter(function (item) {
  return item.id === winnerPicId ;
}); 

console.log(winnerPic)


  return (
    <div className="general-container">
      <header>
      <SlidingMenu />
      <div className="nav-container">
        <NavBar onLogout={() => Auth.logout()} />
      </div>
      
      </header>

        <main>
          <div className="page-title-vote">  
            <h1> <img className="img-title img-30 " src={king} /> {t("winner.title")}</h1>
          </div>
          
          <div className="winner-content">

            <UserMeta user={winner} />
            
            <div>
            <div className="wrapper-img-square">
              <img id="main-img" src={winnerPic[0].url} alt="main-img" />
           
            <div className = "winner-score">
              
              <img className="img-70" src={like} alt="logo-like" />
              <p className = "winner-score-text">{winnerPic[0].likes} </p>
              
              
              </div>
              <CountdownComponent/>
            </div>
 </div>

 <div className="score-timestamp">
            Posted - <Moment fromNow>{winnerPic[0].timestamp}</Moment>
          </div>

            <div className="under-img-container">
              <a href= {"http://www.instagram.com/" + winner.instagram} target="blank" className="btn-blue">{t("winner.button")} </a>
            </div>
          </div>
        </main>
      
    </div>
  );
}
