import React from "react";

import userThumbnail from "../assets/img/mockup/user-thumbnail.png"


export default function UserMeta({user}) {  

    return (
      <div className="user-meta">
        <img className="img-40"src = {user.avatar} alt="thumb"/>
        <div className = "user-meta-legend">
          <a href={"/profile/"+user.email} >
         <p className="user-username">{user.username}</p>
        </a>

          <a href= {"http://www.instagram.com/" + user.instagram} target="blank" >
          <p className="user-instagram">@{user.instagram}</p>

           </a>

        </div>

      </div>
    );
}
