// NPM Packages
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Auth from "./services/Auth";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/auth/AuthPage";
import "./styles/App.css";
import LoginPage from "./pages/auth/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import WinnerPage from "./pages/WinnerPage/WinnerPage";
import VotingPage from "./pages/VotingPage/VotingPage";



export default function App() {
    // State
    const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());

    // Constants
    Auth.bindLoggedInStateSetter(setLoggedIn);

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

                    <Route path="/home">
                        <HomePage />
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
