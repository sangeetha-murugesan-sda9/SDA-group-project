import React from "react";
import { useEffect, useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Card from "../../components/Card";
import janeImg from "../../assets/img/mockup/jane-thumbnail.png";
import Auth from "../../services/Auth";
import UploadButton from "../../components/UploadButton";

export default function ProfilePage() {
  // Constants
  
  const API_URL ='https://my.api.mockaroo.com/user.json?key=ae007e80';

  //states
   const [users,setUsers] = useState([0]);
   const [dataLoaded,setDataLoaded] = useState(false);

  /*  const pics = users[0].map((item) => (item.pictures));
   console.log("PICS",pics); */
   
 
   // Methods
   //fetch data 
// useEffect.
 //fetch data 
 useEffect(() => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((json) => setUsers(json));  
    setDataLoaded(true);
    
}, []);

console.log("USER",users)
  
  
  return (
    
    
    <div className="general-container">
      
    
    
      <header>
        <NavBar onLogout={() => Auth.logout()} />
      </header>

    { users === [0] && <p>Loading Data ...</p>}
    { users !== [0]  && 

      <main>
        <div className="profilepage-content">
          <div className="profilepage-submit-container">
          {/* < UploadButton/> */}
       {/*      <img src={users[0].avatar} alt="img" />
            <h1>{users[0].firstname} {users[0].lastname}</h1>
            <p>@ {users[0].instagram} </p>
            <p>
              You have {users[0].likes} <em> FIRES</em>
            </p> */}

            <button className="btn-blue">Submit a style</button>
            <button className="btn-white">Edit your profile</button>
          </div>

          <div>
            {/* <h2>{users[0].username} styles ...</h2> */}
            <div className="card-small-container">

              <React.Fragment>
             {/*  {users.pictures.map((item) => (
                  <React.Fragment key={item.id}>
                    <Card item = {item} score = {false} votes = {true}  meta = {true} />                                                  
                  </React.Fragment>
                ))} */}
              </React.Fragment>
              
            </div>
          </div>
        </div>
      </main>

}


      <footer> Follow us | about SDA | About us </footer>
    </div>
  );
}
