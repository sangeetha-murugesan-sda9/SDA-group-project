import React from "react";

import king from "../assets/img/icons/crown.svg";

export default function UserMeta({ winnerId, user }) {
  
  return (
    <div className="user-meta">

      <img className="img-40" src={user.avatar} alt="thumb" />
      <div className="user-meta-legend">
        <a href={"/profile/" + user.email}>
          <p className="user-username">{user.username}</p>
        </a>

        {user.instagram !== "instagram" && (
          <a href={"http://www.instagram.com/" + user.instagram} target="blank">
            <p className="user-instagram">@{user.instagram}</p>           
          </a>
        )}
      </div>
       {user.id === winnerId && (
              <img className="crown-meta img-40" src={king} />
            )}
    </div>
  );
}
