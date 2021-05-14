// NPM packages
import VoteComponent from "./VoteComponent";
import like from "../assets/img/logo/flame.png";
import UserMeta from "./UserMeta";
import Moment from "react-moment";

export default function Card({ item, score, votes, meta}) {

const randomPictureId = Math.floor(Math.random() * item.pictures.length) 

//console.log(item.pictures[randomPictureId])

  return (    
    
    <div className="card-small">

{ item.pictures !== [] &&
<div>

{ item.pictures[randomPictureId] !== undefined &&
<div>



    {meta === true && <UserMeta user={item}/>}

      <p className="score-timestamp">Posted - <Moment format="DD MMM YYYY">{item.timestamp}</Moment> </p>

      <img className="card-img" src={item.pictures[randomPictureId].url} alt="items"/>

      {votes === true && <VoteComponent />}

      {score === true && (
        <div className="card-footer">

          <p id="img-score" >Score : {item.likes} </p>

          <img src={like} alt="score-logo"/>
        </div>
      )}

  </div>
  }

    </div>
  }


      
    </div>
  );
}
