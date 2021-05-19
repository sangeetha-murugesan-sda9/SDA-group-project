// NPM packages
import React from "react";
import { useState, useEffect } from "react";
import ApiCalls from "../api/ApiCalls";
import AuthApi from "../api/AuthApi";
import Methods from "../services/Methods"

export default function CardDrawer({pictureId }) {
 

  const currentUserEmail = AuthApi.getCurrentUser();
  

  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [refresh, setRefresh] = useState(true);

  const [status, setStatus] = useState(1); // 0 = loading data, 1 = data loaded, 2 = error;
  const [comment, setComment] = useState("");

  const nbOfComments = comments.length;

  const handleClick = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };


  //Fetching commments

  useEffect( async () => {
    try {
    const res = await ApiCalls.getCommentsById(pictureId)
    setComments(res.data);
    setStatus(1);

    }catch(error){
    console.log("Error", error);
    setStatus(2);
    }  
      
  }, [refresh]);


  

  async function addComment(pictureId, commentBody) {
    await ApiCalls.addComment(pictureId, commentBody);
    setRefresh(!refresh);
  }

  async function deleteComment(commentId) {
    await ApiCalls.deleteComment(commentId);
    setRefresh(!refresh);
  }



  return (
    <div>
      <div className={"container " + (open ? "expand" : "")}>
        <div className="upper" onClick={handleClick}>
          <p>
            {nbOfComments} Comment(s)
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
            </svg>
          </p>
        </div>

        <div className="lower">
          {status === 0 && <p className="loader"></p>}
          {status === 2 && (
            <p className="error">Please check your connection</p>
          )}
          {status === 1 && (
            <div>
              {comments === undefined ? (
                <p>No comments</p>
              ) : (
                <React.Fragment>
                  {comments.map((item) => (                    
                    <React.Fragment key={item.id}>
                      <div className="comment-bloc">
                        <h3>{item.ownerName}</h3>                        
                        <div className="comment-sub-bloc">
                          <p> {item.body} </p>
                          {item.ownerEmail === currentUserEmail && (
                            <button
                              className="btn-delete"
                              onClick={() => {
                                deleteComment(item.id);
                              }}
                            >
                              Delete
                            </button>
                          )}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              )}
            </div>
          )}

          <div className="comment-form-group">
            <input
              type="text"
              placeholder="your opinion here"
              className="comment-textarea"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />

            <button
              className="btn-comment"
              onClick={() => {
                addComment(pictureId, comment);
              }}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );


  
}
