import like from "../assets/img/logo/flame.png";
import AuthApi from "../api/AuthApi";
import dislike from "../assets/img/logo/oops.png";
import VoteComponent from "./VoteComponent";
import "../styles/_profilecard.css";

export default function ProfileCard({ item, userToDisplay }) {

  const currentUserEmail = AuthApi.getCurrentUser();

  return (


    <div className="card-small">

      <div className="profilecard-header">

        <div className="profilecard-left">
          <p className="score" >{item.likes} </p>
          <img src={like} alt="score-logo"/>

          
        </div>

        <div className="profilecard-right">
          <p className="score" >{item.dislikes} </p>
          <img src={dislike} alt="score-logo"/>
        </div>
        
        </div>


      <img className="profilecard-img"src={item.url} alt="items"/>
      <p className="score-timestamp" >TimeStamp:{item.timestamp} </p>

{userToDisplay !== currentUserEmail &&
  <VoteComponent />
}


    </div>
  );
}
