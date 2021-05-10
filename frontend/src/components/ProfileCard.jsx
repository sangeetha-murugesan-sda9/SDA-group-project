import like from "../assets/img/logo/flame.png";
import dislike from "../assets/img/logo/oops.png";;

export default function ProfileCard({ item }) {



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
    </div>
  );
}
