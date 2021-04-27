import React from "react";
import like from "../assets/img/logo/flame.png";
import dislike from "../assets/img/logo/oops.png";

export default function VoteComponent() {

  return (
    <div className="vote-container">
      <div>

      <button className="btn-vote" >
                  <img src={like} alt="logo-like"/>
                </button>

        <p>Fire</p>
      </div>
          
      <div>
       <button className="btn-vote" >
                  <img src={dislike} alt="logo-dislike"/>
                </button>
        <p>Naaah</p>
      </div>
    </div>
  );
}
