import React from "react";
import "../styles/FooterSangeetha.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    /*faEnvelope,
    faLogout*/
} from "@fortawesome/free-brands-svg-icons";

import {
    faEnvelope
} from "@fortawesome/free-regular-svg-icons";


import {
    faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const FooterSangeetha = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <a
                    href="https://github.com/clecardona/SDA-group-project"
                    target="_blank"
                    className="item1"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>


                <a
                    href="mailto: contact@instyle.se"
                    target="_blank"
                    className="item2"
                >
                    <FontAwesomeIcon icon={faEnvelope}/>
                </a>

                <a
                    href="http://localhost:3000"
                    target="_blank"
                    className="item3"
                >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </a>

            </div>
        </footer>
    );
};
export default FooterSangeetha;