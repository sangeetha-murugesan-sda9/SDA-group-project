import { React, useState, useEffect } from "react";
import axios from "axios";
import "../../styles/base.css";
import Auth from "../../services/Auth";
import AuthApi from "../../api/AuthApi";
import ApiCalls from "../../api/ApiCalls";

export default function TestPage() {
  // Constants

  const currentUser = AuthApi.getCurrentUser();

  const API_URL = "https://my.api.mockaroo.com/user.json?key=ae007e80";
  const JSON_MOCKUP = require("../../api/api_users.json");
  const JSON_MOCKUP_URL = "../../api/api_users.json";

  //states
  const [users, setUsers] = useState([]);
  const [file, setFile] = useState();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
    
  // Methods //

  //fetch data distant API //
  function fetchdataURL() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }

  // fetch data local MOCKUP //
  function fetchdataMOCKUP() {
    setUsers(JSON_MOCKUP);
  }

  // use Effect to fetch the data //
  useEffect(() => {
    fetchdataMOCKUP();
  }, []);

  // handle the file submitted by client //
  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  // handle the upload to dB //
  function handleUpload() {
    console.log(file, "state file");
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("user", file);

    ApiCalls.uploadPicture(formdata);
  }


// request to post likes for picture at id 1 - WORKING ON REFRESH //
  function addLike(){

    ApiCalls.addLike(1)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })    
    ;
   }


   // request to post likes for picture at id 1 - WORKING ON REFRESH //
  function addDislike(pictureId){

    ApiCalls.addDislike(1)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })    
    ;
   }


// request to get likes for picture at id 1 //
  function getLikes(pictureId){

    ApiCalls.getLikes(pictureId)
    .then((res) => {
      console.log("likes :" ,res.data);
      setLikes(res.data);
    }
    );   
  }   

// request to get dislikes for picture at id 1 //
  function getDislikes(pictureId){
    ApiCalls.getDislikes(pictureId)
    .then((res) => {
      console.log("dislikes" ,res.data);
      setDislikes(res.data);
    }
    );   
  }

  //use Effect triggered when components mounts ( page refresh) //
  useEffect(() => {
    getLikes(1);
    getDislikes(1);
    }, []);

  return (
    <div className="general-container">
      
      <div className = "test-wrapper">
        <h2>TEST PAGE:</h2>

{/* Test get currentUser name */}
      <div className="upload-box-test">
      <h3>Current user :</h3>
      <h4>{AuthApi.getCurrentUser()}</h4>        
      </div>

{/* Test upload a picture */}
      <div className="upload-box-test">
      <h3>Upload a picture</h3>
        <input type="file" onChange={handleFile} />
        <button  type="button" onClick={handleUpload}>
          Upload
        </button>
      </div>


{/* Test display picture at id=1 */}
      <div className="upload-box-test">
      <h3>Display picture with id=1</h3>

      <h4>Picture at id:1 - not possible to display yet</h4>
       
      </div>


{/* Test adding a like / adding a dislike */}
      <div className="upload-box-test">
      <h3>Like and Dislike the picture at id=1 (refresh)</h3>
      
        <button  onClick={() => addLike(1)} > Like  </button>
        <button  onClick={() => addDislike(1)} > Dislike </button>
       
      </div>


{/* Test getting the likes / dislikes for picture at id=1 */}
      <div className="upload-box-test">
      <h3>GET likes and dislikes  of picture with id=1</h3>      
        <p>Likes : {likes}  </p>
        <p>Dislikes : {dislikes}</p>
         </div>


      </div>      


      


    </div>
  );
}