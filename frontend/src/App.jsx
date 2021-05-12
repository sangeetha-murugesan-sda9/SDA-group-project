// NPM Packages
import React, { useState,useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

// Project files
import Auth from "./services/Auth";
import AuthPage from "./pages/auth/AuthPage";
import "./styles/App.css";
import LoginPage from "./pages/auth/AuthPage";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WinnerPage from "./pages/WinnerPage/WinnerPage";
import VotingPage from "./pages/VotingPage/VotingPage";
import Footer from "./components/Footer";

//Test page
import TestPage from "./pages/TestPage/TestPage";
import TestMethods from "./services/TestMethods";
import HeaderBackground from "./components/HeaderBackground";
import ToggleLanguage from "./components/ToggleLanguage";


export default function App() {
    // State
    const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
    const [status, setStatus] = useState(0); // 0 = loading data, 1 = data loaded, 2 = error;
    const [xusers, setXusers] = useState([]);
   
    const MOCKUP_URL = "https://api.jsonbin.io/b/609a7407e0aabd6e191b79d7/1"
    const url = MOCKUP_URL
    const json_mockup = require('./api/api_users.json')
    const users = json_mockup

    // Constants
    Auth.bindLoggedInStateSetter(setLoggedIn);

    //Methods
    //setting the favicon 
    useEffect(() => {
        document.title = "[in]Style "
     }, []);


  //Fetching data
     useEffect(() => {

      axios.get(url, {
        headers: {
          "secret-key": "$2b$10$1FTntP8VlEu/VMahO9bDIOwOkDJl76xIEMRL1m5UqOUGR00Ic5Ez.",
        },
      }).then(response => onFetchSuccess(response.data))
      .catch((error) => onFetchFail(error));   

    }, [setXusers, setStatus]);
  
    
    function onFetchSuccess(res) {      
      setXusers(res);
      setStatus(1);
    }
  
    function onFetchFail(error) {
      console.log("Error", error);
      setStatus(2);
    }
  
  //console.log("users",users,status)
///////////////


    // Components
    const loggedInRouter = (
      <BrowserRouter>
        <div>
          
          <HeaderBackground />
          <ToggleLanguage />
          {status === 0 && <p className="loader" ></p>}
          {status === 2 && <p className="error" >Please check your connection</p>}
          {status === 1 && 
      
<div>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/profile/:userEmail"  component=  {(props) => 
              (<ProfilePage users={users} userToDisplay={props.match.params.userEmail} />)} /> {/* ok */}

            <Route path="/discover">
              <DiscoverPage users = {users} /> {/* ok */}
            </Route>

            <Route path="/vote">
              <VotingPage users = {users} /> {/* ok */}
            </Route>

            <Route exact path="/">
              <WinnerPage users = {users} /> {/* ok */}
            </Route>

            {/* TESTING ROUTES */}

            <Route path="/test">
              <TestPage  /> {/* not needed here*/}
            </Route>

            <Route path="/testmethods">
              <TestMethods users = {users} /> {/* ok */}
            </Route>
          </Switch>
          
 <Footer users = {users} />      

</div>

}

          
        </div>
      </BrowserRouter>
    );

    return loggedIn ? loggedInRouter : <AuthPage />;
}
