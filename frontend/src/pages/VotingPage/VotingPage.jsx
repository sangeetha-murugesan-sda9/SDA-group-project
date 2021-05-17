import { React } from "react";
import { useTranslation } from "react-i18next";
import Moment from "react-moment";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import UserMeta from "../../components/UserMeta";
import VoteComponent from "../../components/VoteComponent";
import Auth from "../../services/Auth";
import AuthApi from "../../api/AuthApi";
import SlidingMenu from "../../components/SlidingMenu";
import Methods from "../../services/Methods";


export default function VotingPage({users}) {
  
  // Constants
  var moment = require("moment");
  //translation
  const [t, i18n] = useTranslation("common");

  const currentUserEmail = AuthApi.getCurrentUser();
 

//not returning current user pics
const otherUsers = users.filter(
  i => {return i.email !== currentUserEmail})
//console.log(otherUsers)

  //randomization of the display
  const allPics = otherUsers
    .map((i) => i.pictures).flat();

  // select only recent pics
  const pics = allPics.filter((i) => {
    const todayMidnight = new Date();
    todayMidnight.setHours(0, 0, 0, 0); // ok today 00:00

    const isVotable = moment(i.timestamp).isSameOrAfter(todayMidnight);
    return isVotable;
  });

  console.log(pics.length);


 //handle the no picture to be displayed
 if(pics.length === 0){

console.log("no users")
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
        

        <div className="wrapper-img-square-nodata">
          
            <p> No pictures submitted today</p>
            <p> Please come back later ...</p>
        
        </div>

      </div>

        

    </main>
  </div>
  )

 }


 else{


const picsIds = pics.map((i) => i.id);
  const randomPictureIndex = Math.floor(Math.random() * picsIds.length);
  const randomPictureId = picsIds[randomPictureIndex];

  const randomPicture = pics.filter(function (item) {
    return item.id === randomPictureId;
  });

  //get the user associated
  const userIdAssociated = randomPicture[0].owner;
  const userAssociated = Methods.getUserById(users, userIdAssociated);


  //console.log(randomPictureId)
  //console.log(userAssociated)

  //console.log(randomPicture[0].timestamp)

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
            <h1>{t("vote.title")}</h1>
          </div>

          
          
        <div>

  <div className="winner-content">
          <UserMeta user={userAssociated} />

          <div className="wrapper-img-square">
            <img id="main-img" src={randomPicture[0].url} alt="main-logo" />
                      
          </div>

          <div className="score-timestamp">
            Posted - <Moment fromNow>{randomPicture[0].timestamp}</Moment>
          </div>
          <div className="under-img-container">
            <VoteComponent hide={false} refresh={true} pictureId={randomPicture[0].id} />
          </div>
        </div>

        </div>  

      </main>
    </div>
  );
}





 }



  
