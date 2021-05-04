import React from "react";
import { useEffect, useState } from "react";

import "../../styles/base.css";
import Card from "../../components/Card";
import janeImg from "../../assets/img/mockup/jane-thumbnail.png";
import Auth from "../../services/Auth";
import AuthApi from "../../api/AuthApi";
import UploadButton from "../../components/UploadButton";
import like from "../../assets/img/logo/flame.png";

export default function ProfilePageContent({owner}) {
  // Constants

  const currentUser = AuthApi.getCurrentUser();

  const API_URL = "https://my.api.mockaroo.com/user.json?key=ae007e80";
  const JSON_MOCKUP = require("../../api/api_users.json");
  const JSON_MOCKUP_URL = "../../api/api_users.json";

  //states
  const [users, setUsers] = useState([-1]);
  

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

  console.log("USER", users);
  

  return (
    <div className="profilepage-content">
      {users === [-1] && <p> Loading Data ...</p>}
      {users !== [-1] && (
        <div>
          {owner === true && (
            <div>
              <div className="profilepage-submit-container">
                <UploadButton />

                <img src={users[0].avatar} alt="img" />
                <h1>
                  {currentUser}
                </h1>
                <p>@ {users[0].instagram} </p>
                <p>
                  You have {users[0].pictures[0].likes} <img className = "img-30" src={like} alt="logo-like"/>
                </p>

                <button className="btn-white">Edit your profile</button>
              </div>

              <div>
                <h2>Your style ...</h2>
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
                <UploadButton />

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
