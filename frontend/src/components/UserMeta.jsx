import React from "react";

import userThumbnail from "../assets/img/mockup/user-thumbnail.png"


export default function UserMeta({users}) {
  const randomUser = Math.floor(Math.random() * 4);

    return (
      <div className="user-meta">
        <img src = {users.avatar} alt="thumb"/>
        <div className = "user-meta-legend">
          <a href={"/profile/"+users.email} >
         <p className="user-username">{users.firstname} {users.lastname}</p>
        </a>
          
          <p className="user-instagram">@{users.instagram}</p>

        </div>

      </div>
    );
}
