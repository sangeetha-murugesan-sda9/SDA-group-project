import React from "react";
import { useEffect, useState } from "react";

import "../../styles/base.css";
import AuthApi from "../../api/AuthApi";
import ProfileCard from "../../components/ProfileCard";
import EditProfileButton from "../../components/EditProfileButton";
import Methods from '../../services/Methods'
import king from "../../assets/img/icons/crown.svg"
import like from "../../assets/img/logo/flame.png";
import dislike from "../../assets/img/logo/oops.png";

export default function ProfilePageContent({userToDisplay}) {


  //states
  const [users, setUsers] = useState([]);

  // Constants
  const JSON_MOCKUP = require("../../api/api_users.json")

  const currentUserEmail = AuthApi.getCurrentUser()
  let winnerId = -1
  winnerId = Methods.getWinner(JSON_MOCKUP)[0]


  if (Methods.getEmailById(JSON_MOCKUP,winnerId+1) === userToDisplay){
    console.log("winner")
  } else{
    console.log("not winner")
  }






  // Methods
  //fetch data distant API
  /*   function fetchdataURL() {
      fetch(API_URL)
        .then((response) => response.json())
        .then((json) => setUsers(json));
        } */

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



  return (
      <div className="profilepage-content">
        {users[1] === undefined && <p> Loading Data ...</p>}
        {users[1] !== undefined && (
            <div>


              <div>
                <div className="profilepage-container">
                  <div className="profilepage-subcontainer">
                    <div className="profilepage-box-left">

                      <div className="profilepage-box-left-header">

                        <h2>{username} </h2>
                        {
                          winnerId > 0 &&
                          <div>
                            { userToDisplay === Methods.getEmailById(users,winnerId+1) &&
                            <img className="logo-winner img-30" src={king} />
                            }
                          </div>
                        }
                      </div>

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
                                userToDisplay ={userToDisplay}
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