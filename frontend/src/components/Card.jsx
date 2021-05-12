// NPM packages
import VoteComponent from "./VoteComponent";
import like from "../assets/img/logo/flame.png";
import UserMeta from "./UserMeta";
import Moment from "react-moment";

export default function Card({ item, score, votes, meta}) {

const randomPictureId = Math.floor(Math.random() * item.pictures.length) 


  return (


    <div className="card-small">
      {meta === true && <UserMeta user={item}/>}

      <p className="score-timestamp">Posted - <Moment format="DD MMM YYYY">{item.timestamp}</Moment> </p>

      <img src={item.pictures[randomPictureId].url} alt="items"/>

      {votes === true && <VoteComponent />}

      {score === true && (
        <div className="card-footer">

          <p id="img-score" >Score : {item.likes} </p>

          <img src={like} alt="score-logo"/>
        </div>
      )}
    </div>
  );
}
