import { bubble as Menu } from 'react-burger-menu'

import Auth from '../services/Auth'

import king from "../assets/img/icons/crown.svg"
import discover from "../assets/img/icons/telescope.svg"
import vote from "../assets/img/icons/vote.svg"
import profile from "../assets/img/icons/woman.svg"



export default function SlidingMenu({ onLogout }) {
 

  function onLogout(){
    Auth.logout();
  }

    return (
      <div>
  
      <Menu >
               
      <h3>[In]style</h3>

          <div className="menu-item">
            <img className="img-30" src={king} />
            <a id="home" className="menu-item-text" href="/">Current King</a>
          </div>

          <div className="menu-item">
          <img className="img-30" src={profile} />
          <a id="home" className="menu-item-text" href="/profile">My Profile</a>
          </div>
          
          <div className="menu-item">
          <img className="img-30" src={discover} />
          <a id="about" className="menu-item-text" href="/discover">Discover </a>
          </div>

          <div className="menu-item">
          <img className="img-30" src={vote} />
          <a id="contact" className="menu-item-text" href="/vote">Vote</a>
          </div>
        
         
          <button className="btn-lightgrey" onClick={onLogout}>Logout</button>
      
        </Menu>
        </div>

        );
}

  