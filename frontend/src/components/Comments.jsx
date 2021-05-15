// NPM packages
import { useState ,useEffect} from "react";
import ApiCalls from "../api/ApiCalls";

export default function Comments({ pictureId }) {
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState(1); // 0 = loading data, 1 = data loaded, 2 = error;


//const data = ApiCalls.getComments()
//.then((res )=> console.log(res.data));

//console.log(res.data)

  //Fetching data

  /* useEffect(() => {
    ApiCalls.getAllComments()
    .then((response) => onFetchSuccess(response.data))
    .catch((error) => onFetchFail(error));
  }, []);

  function onFetchSuccess(res) {
    setComments(res);
    setStatus(1);
  }

  function onFetchFail(error) {
    console.log("Error", error);
    setStatus(2);
  }
 */
  //console.log("comments", comments,status);
  ///////////////


  //Methods
  function addComment(pictureId, body) {
    ApiCalls.addComment(pictureId, body)// ok
  }

  function deleteComment(commentId) {
    ApiCalls.deleteComment(commentId); //ok
  }

  return (

    <div>
      {status === 0 && <p className="loader"></p>}
      {status === 2 && <p className="error">Please check your connection</p>}
      {status === 1 && (
        <div>
          <button onClick ={addComment(pictureId,"yolo")}>add comment</button>
          {/* <button onClick ={deleteComment(12)}>delete comment</button> */}
          <h3>User</h3>
          <p>I really like your style. You look amazing</p>
        </div>
      )}
    </div>
    
  );
}
