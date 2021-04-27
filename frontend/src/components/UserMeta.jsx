import React from "react";

import userThumbnail from "../assets/img/mockup/user-thumbnail.png"


export default function UserMeta() {
    return (
      <div className="user-meta">
        <img src = {userThumbnail} alt="thumb"/>
        <div className = "user-meta-legend">
          <p className="user-username">username</p>
          <p className="user-instagram">@instagram</p>

        </div>

      </div>
    );
}
