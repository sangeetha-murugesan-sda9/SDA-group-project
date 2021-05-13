import React from "react";
import "../styles/base.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faChessKing, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


import UploadButton from "./UploadButton"
import Auth from "../services/Auth";

import AuthApi from "../api/AuthApi";


export default function Footer({users}) {

function onLogout(){
    Auth.logout();
}
const currentUserEmail = AuthApi.getCurrentUser();



    return (
        <div className="footer">
 

{/* <UploadButton users = {users} /> */}
            <div className="footer-shape"> </div>
            <div className="footer-container">

                
                <a
                    href={"/profile/"+currentUserEmail}                 
                    className="item"
                >
                    <FontAwesomeIcon icon={faUser} />
                </a>


                <a
                    href="mailto: contact@instyle.se"
                    target="_blank"
                    className="item"
                >
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>        
                   
            
                <a>
                    {/* Keep it empty */}
                </a>
                <a
                    href="http://localhost:3000/"
                    className="item"
                >
                    <FontAwesomeIcon icon={faChessKing} />
                </a>

                <button
                    className="item" onClick={onLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt}/>
                </button>
               
 </div>
          

 

            
        </div>
    );
};
