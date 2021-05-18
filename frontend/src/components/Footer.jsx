import {React, useState} from "react";
import { Link  } from "react-router-dom";


import "../styles/base.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faChessKing, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


import Auth from "../services/Auth";

import AuthApi from "../api/AuthApi";

export default function Footer() {


  function onLogout() {
    Auth.logout();  

  }

  const currentUserEmail = AuthApi.getCurrentUser();



return (
    <div className="footer">
      <div className="footer-container">
        <a href={"/profile/" + currentUserEmail} className="item">
          <FontAwesomeIcon icon={faUser} />
        </a>

        <a href="mailto: contact@instyle.se" target="_blank" className="item">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>

        <a>{/* Keep it empty */}</a>
        <a href="http://localhost:3000/winner" className="item">
          <FontAwesomeIcon icon={faChessKing} />
        </a>

        <button className="item" onClick={onLogout}>
          <Link to="/">
          <FontAwesomeIcon icon={faSignOutAlt} />
          </Link>

        </button>
      </div>
    </div>
  );




  
}
