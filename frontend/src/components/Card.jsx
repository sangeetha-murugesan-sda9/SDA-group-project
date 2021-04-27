// NPM packages
import VoteComponent from "./VoteComponent";

export default function Card({item, score ,votes }) {
  
  return (


    <div className="card-small">

    <img src={item.download_url}/>
    
    {votes === true && (
      <VoteComponent/>
      )}

    {score === true && (
       <p>Score : {item.score}</p>
      )}
 
  </div>
  );
}
