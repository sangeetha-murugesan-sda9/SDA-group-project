import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Popover } from "@varld/popover";

import homeButton from "../assets/img/homeButton.png"

export default function Navbar({ onLogout }) {
  return (
    <nav>
      <div>
        <Popover
          popover={({ visible, open, close }) => {
            return (
              <div className="nav-dropdown">

                <Link to="/Home" className="nav-link">
                  Home
                </Link>
                <Link to="/Profile" className="nav-link">
                  Profile
                </Link>
                <Link to="/Vote" className="nav-link">
                  Vote
                </Link>

                <Link to="/Winner" className="nav-link">
                  Winner
                </Link>
                <button className="btn-menu-dropdown" onClick={onLogout}>
                  Logout
                </button>
              </div>
            );
          }}
        >
          <button className="btn-menu" ><img src= {homeButton}/></button>
        </Popover>
      </div>
<div id ="nav-main-title">[ In ] Style</div>

      
    </nav>
  );
}
