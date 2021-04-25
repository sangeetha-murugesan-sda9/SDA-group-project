// NPM Packages
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Project files
import Auth from "./services/Auth";
import Navbar from "./components/Navbar";
import AuthPage from "./pages/auth/AuthPage";
import "./App.css";
import LoginPage from "./pages/auth/AuthPage";
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import Winner from "./pages/Winner/Winner";




export default function App() {
    // State
    const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());

    // Constants
    Auth.bindLoggedInStateSetter(setLoggedIn);

    // Components
    const loggedInRouter = (
        <BrowserRouter>
            <Navbar onLogout={() => Auth.logout()} />

            <div className="container mt-5">
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

                    <Route path="/winner">
                        <Winner />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );

    return loggedIn ? loggedInRouter : <AuthPage />;
}
