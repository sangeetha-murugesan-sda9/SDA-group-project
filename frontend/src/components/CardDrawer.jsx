// NPM packages
import React from 'react'
import {useState, useEffect } from "react";
import Comments from "./Comments";
import ApiCalls from "../api/ApiCalls";

export default function CardDrawer({ pictureId }) {
  //const state = { open: false };
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState(1); // 0 = loading data, 1 = data loaded, 2 = error;

  const nbOfComments = comments.length;



  const handleClick = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  //Fetching data

  useEffect(() => {
    ApiCalls.getCommentsById(pictureId)
      .then((response) => onFetchSuccess(response.data))
      .catch((error) => onFetchFail(error));
  }, [addComment]);

  function onFetchSuccess(res) {
    setComments(res);
    setStatus(1);
  }

  function onFetchFail(error) {
    console.log("Error", error);
    setStatus(2);
  }

async function addComment(pictureId,commentBody){
  await ApiCalls.addComment(pictureId,commentBody)
}

 console.log(comments)

  return (
    <div
      /* className="container "  */
      className={"container " + (open ? "expand" : "")}
      onClick={handleClick}
    >
      <div className="upper">
        <p>
          {nbOfComments} Comment(s)
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
          </svg>
        </p>
      </div>
      <div className="lower">
        {status === 0 && <p className="loader"></p>}
        {status === 2 && <p className="error">Please check your connection</p>}
        {status === 1 && (
          <div>

          { comments[0] === undefined ?  
          
          <p>No comments</p>
          
          :       

        
        <React.Fragment>
                {comments              
                  .map((item) => (
                    <React.Fragment key={item.id}>
                      <Comments
                        item={item}
                      />
                    </React.Fragment>
                  ))}
              </React.Fragment>
       
        }


          </div>
        )}
  <button onClick ={() => {addComment(pictureId,"super")}
          }>Comment</button>
        
      </div>
    </div>
  );
}
