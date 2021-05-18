import { slide as Menu } from 'react-burger-menu'
import { useTranslation } from "react-i18next";
import { Link  } from "react-router-dom";

import Auth from '../services/Auth'

import king from "../assets/img/icons/crown.svg"
import git from "../assets/img/icons/git.svg"
import signout from "../assets/img/icons/signout.svg"
import discover from "../assets/img/icons/telescope.svg"
import vote from "../assets/img/icons/vote.svg"
import profile from "../assets/img/icons/woman.svg"

import AuthApi from "../api/AuthApi";

export default function SlidingMenu() {

 const [t, i18n] = useTranslation('common');  
const currentUserEmail = AuthApi.getCurrentUser();


  function onLogout(){
    Auth.logout();
  }

    return (
      
  
      <Menu >
               
      <h3>[In]style</h3>

          <div className="menu-item">
            <img className="img-30" src={king} />
            <a id="home" className="menu-item-text" href="/winner">{t("sidebar.king")}</a>
          </div>

          <div className="menu-item">
          <img className="img-30" src={profile} />
          <a id="home" className="menu-item-text" href={"/profile/"+currentUserEmail}>{t("sidebar.profile")}</a>
          </div>
          
          <div className="menu-item">
          <img className="img-30" src={discover} />
          <a id="about" className="menu-item-text" href="/discover">{t("sidebar.discover")}</a>
          </div>

          <div className="menu-item">
          <img className="img-30" src={vote} />
          <a id="contact" className="menu-item-text" href="/vote">{t("sidebar.vote")}</a>
          </div>

          <div className="menu-item">

          <div className="burger-footer">
        
          <div className="burger-footer-item"> 
          <a id="github" 
          href="https://github.com/clecardona/SDA-group-project" target= "blank"><img className="img-30" src={git} /></a>
           
          </div>


          <div className="burger-footer-item"> 
<button className="btn-borderless" onClick={onLogout}>
<Link to="/">
  <img className="img-30" src={signout} />
  </Link>
  </button>
          </div>
</div> 

         

        </div>
        </Menu>
        

        );
}

  