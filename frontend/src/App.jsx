// NPM Packages
import React, { useState,useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
    const currentUserEmail = AuthApi.getCurrentUser();

    // Constants
    Auth.bindLoggedInStateSetter(setLoggedIn);

    //Methods
    useEffect(() => {
        document.title = "[in]Style "
     }, []);

    // Components
    const loggedInRouter = (
      <BrowserRouter>
        <div>
          <HeaderBackground />
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>

            {/* <Route path="/myprofile">
              <ProfilePage userToDisplay={currentUserEmail} />
            </Route> */}

            <Route path="/profile/:userEmail" component={ProfilePage}/>

            <Route path="/discover">
              <DiscoverPage />
            </Route>

            <Route path="/vote">
              <VotingPage />
            </Route>

            <Route exact path="/">
              <WinnerPage />
            </Route>

            <Route path="/test">
              <TestPage />
            </Route>

            <Route path="/testmethods">
              <TestMethods />
            </Route>
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );

    return loggedIn ? loggedInRouter : <AuthPage />;
}
