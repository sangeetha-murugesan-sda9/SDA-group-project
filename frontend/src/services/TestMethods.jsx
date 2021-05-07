import { React, useState, useEffect } from "react";
import Methods from './Methods'
import AuthApi from "../api/AuthApi";


export default function TestMethods() {
  // Constants
  const currentUser = AuthApi.getCurrentUser(); 
  const users = require("../api/api_users.json");


  //states
  const [file, setFile] = useState();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
    
  
 const userId = 2 ;
 const emailById = Methods.getEmailById(users,userId);
  
 const email = "gyellop2@google.pl" ;
 const usernameByEmail = Methods.getUsernameByEmail(users,email);


  return (
    <div className="general-container">
      
      <div className = "test-wrapper">
        <h2>TEST METHODS JSON PAGE:</h2>

{/* Test get currentUser name */}
      <div className="upload-box-test"> 
      <h5>user id : {userId } => email : {emailById}</h5>    
          
      </div>

      {/* Test get currentUser name */}
      <div className="upload-box-test"> 
      <h5>email : {email } => email : {usernameByEmail}</h5>    
          
      </div>



      </div>    
     </div>
  );
}