import React from "react";
import { Link } from "react-router-dom";

import logo from"../assets/img/logo/instyle_logo.png"


export default function Navbar({ onLogout }) {
    return (
      <nav>
        <Link className="navbar-brand" to="/">
          <img src={logo}/>
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/Profile" className="nav-link">
              Profile
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Home" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Vote" className="nav-link">
              Vote
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Winner" className="nav-link">
              Winner
            </Link>
          </li>
        </ul>

        <button
          className="btn-logout"
          onClick={onLogout}
        >
          Logout
        </button>
      </nav>
    );
}
