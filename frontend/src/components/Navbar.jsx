import {React,useState} from "react";
import { Link } from "react-router-dom";

import { Popover } from '@varld/popover';


export default function Navbar({ onLogout }) {
   
   
   
  
    return (
      <nav>
        <div>
          <Popover
            popover={({ visible, open, close }) => {
              return (
                <div>
                  I am a popover and i am {visible ? "visible" : "not visible"}{" "}
                  and {open ? "open" : "not open"}
                  <button onClick={() => close()}>Close me</button>
                </div>
              );
            }}
          >
            <button>I have a popover</button>
          </Popover>
        </div>

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

        <button className="btn-logout" onClick={onLogout}>
          Logout
        </button>
      </nav>
    );
}
