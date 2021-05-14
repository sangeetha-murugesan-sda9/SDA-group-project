// NPM packages
import { useState } from "react";
import VoteComponent from "./VoteComponent";
import like from "../assets/img/logo/flame.png";
import UserMeta from "./UserMeta";
import Moment from "react-moment";

export default function CardDrawer() {
  
  //const state = { open: false };
  const [open,setOpen] = useState(false);

  const handleClick = () => {

    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  };

  return (
    
      <div 
      /* className="container "  */
      className={"container " + (open ? "expand" : "") }
        onClick={handleClick}
      >
        <div className="upper">
          <p>Comments 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
            </svg>
          
          </p>

        </div>
        <div className="lower">
          <h3>User</h3>
          <p>I really like your style. You look amazing</p>          
        </div>
      </div>
   
  );
}
