import { React} from "react";
import { Link } from "react-router-dom";
import { Popover } from "@varld/popover";


import UploadButton from "./UploadButton";


import homeButton from "../assets/img/homeButton.png"
import navLogo from "../assets/img/logo/instyle.svg"

export default function Footer() {


  return (
    
      <div className= "footer-container">
      <a href ="https://github.com/clecardona/SDA-group-project" target="blank">Github </a>
         <UploadButton />
         <p>Logout</p>
        
      </div>

        
  );
}
