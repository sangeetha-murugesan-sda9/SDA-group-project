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
import AuthApi from "./api/AuthApi";

//Test page
import TestPage from "./pages/TestPage/TestPage";
import TestMethods from "./services/TestMethods";
import HeaderBackground from "./components/HeaderBackground";


export default function App() {
    // State
    const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
    const [status, setStatus] = useState(0); // 0 = loading data, 1 = data loaded, 2 = error;
    const [users, setUsers] = useState([]);
   
    const MOCKUP_URL = "https://api.jsonbin.io/b/609a7407e0aabd6e191b79d7"
    const url = MOCKUP_URL

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

    }, [setUsers, setStatus]);
  
    
    function onFetchSuccess(res) {      
      setUsers(res);
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
          {status === 0 && <p className="informative-box" >🕓 Loading...</p>}
          {status === 2 && <p className="informative-box" >🚨 Please check your connection</p>}
          {status === 1 && 
      

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
              <TestMethods users = {users} /> {/* todo */}
            </Route>
          </Switch>

}

          <Footer />
        </div>
      </BrowserRouter>
    );

    return loggedIn ? loggedInRouter : <AuthPage />;
}
