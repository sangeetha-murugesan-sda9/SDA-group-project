// NPM packages
import React from "react"
import VoteComponent from "./VoteComponent";
import like from "../assets/img/logo/flame.png";
import UserMeta from "./UserMeta";
import Moment from "react-moment";
import CardDrawer from "./CardDrawer";

export default function Card({ users,item, score, votes, meta,winnerId}) {

 //randomization of the display  and connection to the vote
const pics = item.pictures.flat()

const randomPictureIndex  = Math.floor(Math.random() * pics.length)
const randomPicture = pics[randomPictureIndex]
const randomPictureId = pics[randomPictureIndex].id




//console.log(item.pictures.length)

  return (    
    
    <div className="card-small">

    {meta === true && <UserMeta user={item} winnerId ={winnerId}/>}

      <p className="score-timestamp">Posted - <Moment format="DD MMM YYYY">{item.timestamp}</Moment> </p>

      <img className="card-img" src={randomPicture.url} alt="items"/>
    
      <CardDrawer pictureId ={randomPictureId} />

      {votes === true && <VoteComponent hide ={true} refresh ={false} pictureId ={randomPictureId} />}
      

      {score === true && (
        <div className="card-footer">

          <p id="img-score" >Score : {item.likes} </p>

          <img src={like} alt="score-logo"/>
        </div>
      )}

      


  


      
    </div>
  );
}
