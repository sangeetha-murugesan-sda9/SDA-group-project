import React from "react";
import "../styles/base.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faChessKing, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


import UploadButton from "../components/UploadButton"

const FooterSangeetha = () => {
    return (
        <div className="footer">
            <UploadButton />
            <div className="footer-shape"> </div>
            <div className="footer-container">
                
                <a
                    href="https://github.com/clecardona/SDA-group-project"
                    target="_blank"
                    className="item"
                >
                    <FontAwesomeIcon icon={faGithub} />
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

                <a
                    /* TODO - fix logout button */ 
                    /* href="http://localhost:3000/login" */
                    className="item"
                >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </a>


                


               

            </div>
        </div>
    );
};
export default FooterSangeetha;