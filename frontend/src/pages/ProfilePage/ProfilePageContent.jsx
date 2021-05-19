import React from "react";
import { useTranslation } from "react-i18next";
import ReactAwesomePopover from "react-awesome-popover"

import "../../styles/base.css";
import AuthApi from "../../api/AuthApi";
import ProfileCard from "../../components/ProfileCard";
import EditProfileButton from "../../components/EditProfileButton";
import Methods from "../../services/Methods";
import king from "../../assets/img/icons/crown.svg";
import like from "../../assets/img/logo/flame.png";
import dislike from "../../assets/img/logo/oops.png";

export default function ProfilePageContent({ users, userToDisplay }) {
  // Constants
  const Popover = ReactAwesomePopover;
  const [t, i18n] = useTranslation("common");
  const currentUserEmail = AuthApi.getCurrentUser();

  const winnerId = Methods.getWinner(users)[0];
  const userToDisplayId = Methods.getIdByEmail(users, userToDisplay);

  //console.log(userToDisplay)

  const likes = Methods.getTotalLikesByEmail(users, userToDisplay);
  const dislikes = Methods.getTotalDislikesByEmail(users, userToDisplay);

  const username = Methods.getUsernameByEmail(users, userToDisplay);
  const instagram = Methods.getInstagramByEmail(users, userToDisplay);

  const avatar = Methods.getAvatarByEmail(users, userToDisplay);
  const pics = Methods.getPicturesByEmail(users, userToDisplay);
  const votes = Methods.getVotesByEmail(users, currentUserEmail);

  return (
    <div className="profilepage-content">
      <div>
        <div className="profilepage-container">
          <div className="profilepage-subcontainer">
            <div className="profilepage-box-left">
              <div className="profilepage-box-left-header">
                {userToDisplayId === winnerId && (
                  <img className="crown img-40" src={king} />
                )}

              {userToDisplay === currentUserEmail && <EditProfileButton />}
                <img src={avatar} className="img-profile-100" alt="img" />
              </div>
              <h2>{username}</h2>

              {instagram !== "instagram" && (
                <a href={"http://www.instagram.com/" + instagram} target="blank">
                <p className="user-instagram">@{instagram}</p>
                </a>
              )}




              {userToDisplay === currentUserEmail && <p className="user-instagram" >Votes - {votes} </p>}

            </div>

            <div className="profilepage-box-right">
              <p className="title-score" >{t("profile.score")} </p>
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

        
        
       

      


        <div className="page-title">
          <h2>{t("profile.title")} ...</h2>
        </div>

        <div className="title-wrapper">
          <div className="card-small-container">
            <React.Fragment>
              {pics[0].map((item) => (
                <React.Fragment key={item.id}>
                  <ProfileCard item={item} userToDisplay={userToDisplay} users={users} />
                </React.Fragment>
              ))}
            </React.Fragment>
            {pics[0].length === 0 && (
              <div className="empty">
                <p>No pictures yet</p>
                <p>
                  Post a picture of your style on the big green button
                  
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
                  </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
