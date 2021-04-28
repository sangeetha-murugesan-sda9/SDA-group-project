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



export default function App() {
    // State
    const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());

    // Constants
    Auth.bindLoggedInStateSetter(setLoggedIn);

    //Methods
    useEffect(() => {
        document.title = "[in]Style "
     }, []);

    // Components
    const loggedInRouter = (
        <BrowserRouter>
            
            <div >
                <Switch>
                    <Route path="/login">
                        <LoginPage />
                    </Route>

                    <Route path="/profile">
                        <ProfilePage />
                    </Route>

                    <Route path="/discover">
                        <DiscoverPage />
                    </Route>

                    <Route path="/vote">
                        <VotingPage/>
                    </Route>

                    <Route path="/winner">
                        <WinnerPage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );

    return loggedIn ? loggedInRouter : <AuthPage />;
}
