import { React} from "react";
import { Link } from "react-router-dom";
import { Popover } from "@varld/popover";

import homeButton from "../assets/img/homeButton.png"
import navLogo from "../assets/img/logo/instyle.svg"

export default function Navbar({ onLogout }) {
  return (
    <nav>
      <div>
        <Popover
          popover={({ visible, open, close }) => {
            return (
              <div className="nav-dropdown">

                <Link to="/discover" className="nav-link">
                  Discover
                </Link>
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
                <Link to="/vote" className="nav-link">
                  Vote
                </Link>

                <Link to="/winner" className="nav-link">
                  Winner
                </Link>
                <button className="btn-menu-dropdown" onClick={onLogout}>
                  Logout
                </button>
              </div>
            );
          }}
        >
          <button className="btn-menu" ><img src= {homeButton} alt="menu"/></button>
        </Popover>
      </div>
      
      <div></div> 
<img id ="nav-logo" src ={navLogo}></img> 
  
<div id ="nav-main-title">
  <strong>[In]Style</strong>
  <p> Be the one</p>
  </div>

      
    </nav>
  );
}
