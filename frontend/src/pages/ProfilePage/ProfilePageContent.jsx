import React from "react";
import { useEffect, useState } from "react";

import "../../styles/base.css";
import AuthApi from "../../api/AuthApi";
import ProfileCard from "../../components/ProfileCard";
import EditProfileButton from "../../components/EditProfileButton";
import Methods from '../../services/Methods'

import like from "../../assets/img/logo/flame.png";
import dislike from "../../assets/img/logo/oops.png";

export default function ProfilePageContent({userToDisplay}) {
  // Constants
  const API_URL = "https://my.api.mockaroo.com/user.json?key=ae007e80";
  const JSON_MOCKUP = require("../../api/api_users.json");
  const JSON_MOCKUP_URL = "../../api/api_users.json";
  const currentUserEmail = AuthApi.getCurrentUser();
  //states
  const [users, setUsers] = useState([]);
  const randomId = 0 ;
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
 
    // Constants afer fetch - to refactor
  const likes = Methods.getTotalLikesByEmail(JSON_MOCKUP,userToDisplay);
  const dislikes = Methods.getTotalDislikesByEmail(JSON_MOCKUP,userToDisplay);
  const username = Methods.getUsernameByEmail(JSON_MOCKUP,userToDisplay);
  const avatar = Methods.getAvatarByEmail(JSON_MOCKUP,userToDisplay); 
  const pics = Methods.getPicturesByEmail(JSON_MOCKUP,userToDisplay)

  console.log(pics)
  
  return (
    <div className="profilepage-content">
      {randomUser === undefined && <p> Loading Data ...</p>}
      {randomUser !== undefined && (
        <div>

          
            <div>
              <div className="profilepage-container">
                <div className="profilepage-subcontainer">
                  <div className="profilepage-box-left">
                    <h2>{username}</h2>

                    <img src={avatar} className="img-profile-100" alt="img" />
                    {userToDisplay === currentUserEmail &&
                    <EditProfileButton />}
                  </div>

                  <div className="profilepage-box-right">
                    <p>Overall score :</p>
                    <p className="item-score">
                      {likes}
                      <img className="img-30" src={like} alt="logo-like" />
                    </p>
                    <p className="item-score">
                      {dislikes}
                      <img className="img-30" src={dislike} alt="logo-like" />
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2>Styles submitted ...</h2>
                <div className="card-small-container">
                <React.Fragment  >
                    {pics[0].map(item => (
                      <React.Fragment key={item.id} >
                        <ProfileCard 
                        item = {item}
                        />
                      
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                </div>
              </div>
            </div>
         

         
        </div>
      )}
    </div>
  );
}
