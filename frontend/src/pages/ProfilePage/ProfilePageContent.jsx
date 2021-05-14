import React from "react";
import { useTranslation } from "react-i18next";

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

  const [t, i18n] = useTranslation("common");
  const currentUserEmail = AuthApi.getCurrentUser();
  
  const winnerId = Methods.getWinner(users)[0];
  const likes = Methods.getTotalLikesByEmail(users, userToDisplay);
  const dislikes = Methods.getTotalDislikesByEmail(users, userToDisplay);
  const username = Methods.getUsernameByEmail(users, userToDisplay);
  const avatar = Methods.getAvatarByEmail(users, userToDisplay);
  const pics = Methods.getPicturesByEmail(users, userToDisplay);

  /* if (Methods.getEmailById(users, winnerId + 1) === userToDisplay) {
    console.log("winner");
  } else {
    console.log("not winner");
  }
 */

  return (
    <div className="profilepage-content">
      <div>
        <div className="profilepage-container">
          <div className="profilepage-subcontainer">
            <div className="profilepage-box-left">
              <div className="profilepage-box-left-header">

                

                  {/* {userToDisplay ===
                    Methods.getEmailById(users, winnerId + 1) && (
                      <img className="crown img-40" src={king} />
                      )} */}


                 <img src={avatar} className="img-profile-100" alt="img" />
              </div>
                      <h2>{username} </h2>

             

              {userToDisplay === currentUserEmail && <EditProfileButton />}
            </div>

            <div className="profilepage-box-right">
              <p>{t("profile.score")} :</p>
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
          <div className="page-title">
            <h2>{t("profile.title")} ...</h2>
          </div>

          <div className="card-small-container">
            <React.Fragment>
              {pics[0].map((item) => (
                <React.Fragment key={item.id}>
                  <ProfileCard item={item} userToDisplay={userToDisplay} />
                </React.Fragment>
              ))}
            </React.Fragment>
          </div>
        </div>
      </div>
    </div>
  );
}
