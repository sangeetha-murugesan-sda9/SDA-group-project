import Moment from "react-moment";

import like from "../assets/img/logo/flame.png";
import AuthApi from "../api/AuthApi";
import dislike from "../assets/img/logo/oops.png";
import VoteComponent from "./VoteComponent";


export default function ProfileCard({ item, userToDisplay }) {

  const currentUserEmail = AuthApi.getCurrentUser();


  function onDeleteClick(){
    alert("picture deleted")
  }

  return (
    <div className="card-small">
      

      <div className="profilecard-header">
        <div className="profilecard-left">
          <img src={like} alt="score-logo" />
          <p className="score">{item.likes} </p>
        </div>

        <div className="score-separator"></div>

        <div className="profilecard-right">
          <img src={dislike} alt="score-logo" />
          <p className="score">{item.dislikes} </p>
        </div>
      </div>
      <img className="card-img" src={item.url} alt="items" />
     
      {userToDisplay === currentUserEmail && (
        <button className="btn-delete" onClick={onDeleteClick}>
          Delete picture
        </button>
      )}
      
      <p className="score-timestamp">
        Posted - <Moment format="DD MMM YYYY">{item.timestamp}</Moment>{" "}
      </p>

      {userToDisplay !== currentUserEmail && <VoteComponent />}
    </div>
  );
}
