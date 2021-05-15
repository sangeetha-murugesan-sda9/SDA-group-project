// NPM packages
import { useState } from "react";
import Comments from './Comments'
import ApiCalls from "../api/ApiCalls";

export default function CardDrawer({id,pictureId}) {
  
  //const state = { open: false };
  const [open,setOpen] = useState(false);

  const handleClick = () => {

    if (open) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  };

  function addComment(pictureId, body) {
    ApiCalls.addComment(pictureId, body)// ok
  }

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
          <p>Some comments come here </p>


        {/* <button onClick ={addComment(pictureId,"yolo")}>send yolo comment</button> */}

        </div>
      </div>
   
  );
}
