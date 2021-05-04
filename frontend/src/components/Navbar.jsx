import { React} from "react";
import { Link } from "react-router-dom";
import { Popover } from "@varld/popover";
import { bubble as Menu } from 'react-burger-menu'

import homeButton from "../assets/img/homeButton.png"
import navLogo from "../assets/img/logo/instyle.svg"

export default function Navbar() {
 
  return (
    <div> 
      <nav>   
                 
      <div></div> 
<img id ="nav-logo" src ={navLogo}></img> 
  
<div id ="nav-main-title">
  <strong>[In]Style</strong>
  <p> Be the one</p>
  </div>

      
    </nav>
    </div>
    
    
  );
}
