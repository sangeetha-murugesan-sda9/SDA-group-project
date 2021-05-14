import { React } from "react";
import { useTranslation } from "react-i18next";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import UserMeta from "../../components/UserMeta";
import VoteComponent from "../../components/VoteComponent";
import Auth from "../../services/Auth";
import SlidingMenu from "../../components/SlidingMenu";
import Methods from "../../services/Methods";

export default function VotingPage({users}) {
  // Constants
  
  //translation
  const [t, i18n] = useTranslation('common');

  //randomization of the display 
  const pics = users.map(i => i.pictures).flat()
  const picsIds = pics.map(i => i.id)      
  const randomPictureIndex  = Math.floor(Math.random() * picsIds.length)
  const randomPictureId = picsIds[randomPictureIndex]

  //console.log(pics)
  //console.log(randomPictureId)

  const randomPicture = pics.filter(function (item){
    return item.id === randomPictureId
  })  

//get the user associated
  const userIdAssociated = randomPicture[0].owner
  const userAssociated = Methods.getUserById(users,userIdAssociated)

  //console.log(randomPictureId)
  //console.log(userAssociated)
 
  
 

  

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
            <UserMeta user={userAssociated} />

            <div className="wrapper-img-square">
              <img
                id="main-img"
                src={randomPicture[0].url}
                alt="main-logo"
              />
              
              {/*  for testing, retrieve a random id and picture id of that user
              <p> userId :{randomUser.id}</p>
              <p> pictureId :{randomUser.pictures[Math.floor(Math.random() * randomUser.pictures.length)].id}</p> */}
            
            </div>
            <div className="under-img-container">
              <VoteComponent refresh ={true} pictureId ={randomPicture[0].id} />
            </div>
          </div>
        </main>
      
    </div>
  );
}
