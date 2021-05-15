import { React } from "react";
import { useTranslation } from "react-i18next";
import Moment from "react-moment";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import UserMeta from "../../components/UserMeta";
import VoteComponent from "../../components/VoteComponent";
import Auth from "../../services/Auth";
import SlidingMenu from "../../components/SlidingMenu";
import Methods from "../../services/Methods";


export default function VotingPage({users}) {
  
  // Constants
  var moment = require("moment");
  //translation
  const [t, i18n] = useTranslation("common");

  //randomization of the display
  const allPics = users.map((i) => i.pictures).flat();

  // select only recent pics
  const pics = allPics.filter((i) => {
    const todayMidnight = new Date();
    todayMidnight.setHours(0, 0, 0, 0); // ok today 00:00

    const isVotable = moment(i.timestamp).isSameOrAfter(todayMidnight);
    return isVotable;
  });

  console.log(pics);

  const picsIds = pics.map((i) => i.id);
  const randomPictureIndex = Math.floor(Math.random() * picsIds.length);
  const randomPictureId = picsIds[randomPictureIndex];

  //console.log(pics)
  //console.log(randomPictureId)

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
          
        <div className="winner-content">
          <UserMeta user={userAssociated} />

          <div className="wrapper-img-square">
            <img id="main-img" src={randomPicture[0].url} alt="main-logo" />

            {/*  for testing, retrieve a random id and picture id of that user
              <p> userId :{randomUser.id}</p>
              <p> pictureId :{randomUser.pictures[Math.floor(Math.random() * randomUser.pictures.length)].id}</p> */}
          </div>

          <div className="score-timestamp">
            Posted - <Moment fromNow>{randomPicture[0].timestamp}</Moment>
          </div>
          <div className="under-img-container">
            <VoteComponent refresh={true} pictureId={randomPicture[0].id} />
          </div>
        </div>
      </main>
    </div>
  );
}
