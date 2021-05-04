import React from "react";
import { useEffect, useState } from "react";

import "../../styles/base.css";
import Card from "../../components/Card";
import janeImg from "../../assets/img/mockup/jane-thumbnail.png";
import Auth from "../../services/Auth";
import AuthApi from "../../api/AuthApi";
import EditProfileButton from "../../components/EditProfileButton";

import like from "../../assets/img/logo/flame.png";
import dislike from "../../assets/img/logo/oops.png";

export default function ProfilePageContent({owner}) {
  // Constants

  const currentUser = AuthApi.getCurrentUser();

  const API_URL = "https://my.api.mockaroo.com/user.json?key=ae007e80";
  const JSON_MOCKUP = require("../../api/api_users.json");
  const JSON_MOCKUP_URL = "../../api/api_users.json";

  //states
  const [users, setUsers] = useState([]);
  const randomId = 0 ;
  const randomUser = users[randomId];

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

  console.log("USER", users[0]);
  

  return (
    <div className="profilepage-content">
      {randomUser === undefined && <p> Loading Data ...</p>}
      {randomUser !== undefined && (
        <div>
          {owner === true && (
            <div>
              <div className="profilepage-submit-container">
               <img src={users[0].avatar} className = "img-profile-100" alt="img" />
                <h1>
                  {currentUser}
                </h1>
                <p>@ {users[0].instagram} </p>
                <p>
                  You have {users[0].pictures[0].likes} <img className = "img-20" src={like} alt="logo-like"/>
                  and {users[0].pictures[0].dislikes} <img className = "img-20" src={dislike} alt="logo-like"/>
                </p>
                <EditProfileButton/>
                
              </div>

              <div>
                <h2>Your current style ...</h2>
                <div className="card-small-container">
                  <img src={users[0].pictures[0].url} alt="picOfTheDay" />

                  {/* <React.Fragment>              
                 {users[0].map((item) => (
                <React.Fragment key={item.id}>
                    <Card item = {item} score = {false} votes = {true}  meta = {true} />
                </React.Fragment>
                ))} 
              </React.Fragment> */}
                </div>
              </div>
            </div>
          )}


{/* TODO - if displaying other person profile */}

{owner === false && (
            <div>
              <div className="profilepage-submit-container">
              

                <img src={users[0].avatar} alt="img" />
                <h1>
                  {users[0].firstname} {users[0].lastname}
                </h1>
                <p>@ {users[0].instagram} </p>
                <p>
                  You have {users[0].likes} <em> FIRES</em>
                </p>

                <button className="btn-white">Edit your profile</button>
              </div>

              <div>
                {/* <h2>{users[0].username} styles ...</h2> */}
                <div className="card-small-container">
                  <img src={users[0].pictures[0].url} alt="picOfTheDay" />

                  {/* <React.Fragment>              
                 {users[0].map((item) => (
                <React.Fragment key={item.id}>
                    <Card item = {item} score = {false} votes = {true}  meta = {true} />
                </React.Fragment>
                ))} 
              </React.Fragment> */}
                </div>
              </div>
            </div>
          )}








        </div>
      )}
    </div>
  );
}
