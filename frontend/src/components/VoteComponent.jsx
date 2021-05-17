import React from "react";
import { useState, useEffect } from "react";
import ApiCalls from "../api/ApiCalls";
import like from "../assets/img/logo/flame.png";
import dislike from "../assets/img/logo/oops.png";

export default function VoteComponent({hide, refresh, pictureId }) {
  
  const [visibility, setVisibility] = useState(0);

  function handleLike() {
    ApiCalls.addLike(pictureId);

    if(refresh){
      window.location.reload()
    }
    if(hide){
      setVisibility(1);
    }
    
  }

  function handleDislike() {
    ApiCalls.addDislike(pictureId);
    if(refresh){
      window.location.reload()
    }
    if(hide){
      setVisibility(1);
    }
  }

  return (
    <div>
      {visibility === 0 ? (

        <div className="vote-container">

          <div className="vote-container-item">
            <button className="btn glow-orange" onClick={handleLike}>
              <img src={like} alt="logo-like" />
            </button>

            <p>Fire</p>
          </div>

          <div id="vote-separator"></div>

          <div className="vote-container-item">
            <button className="btn glow-black" onClick={handleDislike}>
              <img src={dislike} alt="logo-dislike" />
            </button>
            <p>Naaah</p>
          </div>
          
        </div>

      ) : (
        <div className="vote-container">
        <h5>Vote send</h5>
        </div>


      )}
    </div>
  );
}
