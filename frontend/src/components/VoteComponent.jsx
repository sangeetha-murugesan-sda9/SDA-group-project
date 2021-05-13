import React from "react";
import like from "../assets/img/logo/flame.png";
import dislike from "../assets/img/logo/oops.png";

export default function VoteComponent({refresh}) {

function handleLike(){
// todo - increment likes  
// todo - increment votes
console.log("liked")
if(refresh === true){
  window.location.reload();
}
  
}

function handleDislike(){
  // todo - increment dislikes  
  // todo - increment votes
  console.log("disliked")
  if(refresh === true){
    window.location.reload();
  }
  }



  return (
    <div className="vote-container">
      
      <div className="vote-container-item" >

      <button className="btn glow-orange" onClick ={handleLike} >
                  <img src={like} alt="logo-like"/>
                </button>

        <p>Fire</p>
      </div>

      <div id="vote-separator"></div>
        
      <div className="vote-container-item" >

       <button className="btn glow-black"  onClick ={handleDislike} >
                  <img src={dislike} alt="logo-dislike"/>
                </button>
        <p>Naaah</p>
      </div>
    </div>
  );
}
