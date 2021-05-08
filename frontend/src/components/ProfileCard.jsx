import like from "../assets/img/logo/flame.png";
import dislike from "../assets/img/logo/oops.png";;

export default function ProfileCard({ item }) {



  return (


    <div className="card-small">
      <img src={item.url} alt="items"/>

        <div className="card-footer">
          <p id="img-score" >{item.likes} </p>
          <img src={like} alt="score-logo"/>
          
        </div>

        <div className="card-footer">
          <p id="img-score" >{item.dislikes} </p>
          <img src={dislike} alt="score-logo"/>
          
        </div>
        
      
    </div>
  );
}
