// NPM packages
import VoteComponent from "./VoteComponent";
import like from "../assets/img/logo/flame.png";
import UserMeta from "./UserMeta";

export default function Card({ item, score, votes, meta}) {


  return (
    <div className="card-small">
      {meta === true && <UserMeta users={item}/>}

      <img src={item.pictures[0].url}  alt="items"/>

      {votes === true && <VoteComponent />}

      {score === true && (
        <div className="card-footer">
          <p id="img-score" >Score : {item.score} </p>
          <img src={like} alt="score-logo"/>
        </div>
      )}
    </div>
  );
}
