import { React, useState, useEffect } from "react";
import axios from "axios";
import "../../styles/base.css";
import Auth from "../../services/Auth";
import AuthApi from "../../api/ApiCalls";

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

  // Methods
  //fetch data distant API
  function fetchdataURL() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }

  //fetch data distant API
  function fetchdataMOCKUP() {
    setUsers(JSON_MOCKUP);
  }

  //use Effect
  useEffect(() => {
    fetchdataMOCKUP();
  }, []);

  //HandleFile
  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  // Handle the upload to dB //
  function handleUpload() {
    console.log(file, "state file");

    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("user", file);


    axios.post("http://localhost:8080/upload", formdata, {
      headers: {
      Authorization: Auth.getAuthorizationHeader()
      }
    });
   alert("request send to localhost:8080/upload");
  }




// request to post likes for picture at id 1- WORKING ON REFRESH
  function addLike(){
    
    axios.post("http://localhost:8080/likes/1" ,likes,{
      headers: {
      Authorization: Auth.getAuthorizationHeader()
      }
    }).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    })
    
    ;
   
  }




// request to get likes for picture at id 1
  function getLikes(){
      axios.get("http://localhost:8080/likes/1" ,{
      headers: {
      Authorization: Auth.getAuthorizationHeader()
      }
    })
    .then((res) => {
      console.log("data received" ,res.data);
      setLikes(res.data);
    }
    );    
  }
    //use Effect triggered when components mounts ( page refresh)
      useEffect(() => {
        getLikes();
      }, []);








  function addDislike(){
    
  }




  return (
    <div className="general-container">
      


      <div className = "test-wrapper">
        <h2>TEST PAGE:</h2>

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
      <h3>Like and Dislike the picture at id=1</h3>
      
        <button  onClick={addLike} > Like  </button>
        <button  onClick={addDislike} > Dislike </button>
       
      </div>


{/* Test getting the likes / dislikes for picture at id=1 */}
      <div className="upload-box-test">
      <h3>GET likes and dislikes  of picture with id=1</h3>
      
        <p>Likes : {likes}  </p>
        <p>Dislikes :</p>
       
      </div>
      </div>
      




    </div>
  );
}