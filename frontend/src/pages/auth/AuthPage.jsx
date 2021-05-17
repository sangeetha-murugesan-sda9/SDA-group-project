// NPM Packages
import {React} from "react";
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

// Project files
import "../../styles/base.css";
import Auth from "../../services/Auth";
import background from "../../assets/img/landingBackground.gif";
import Popup from "../../components/Popup";
import LandingOverlay from "../../components/LandingOverlay";

export default function LoginPage() {
  //constants
  
  // Methods
  async function login(loginData) {
    const loginSuccess = await Auth.login(loginData);
    
    if (!loginSuccess) {
      alert("Invalid credentials");
    }
    
  }

  async function register(registrationData) {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
    
  }
  return (
    <div className="wrapper">
      <main>
        <div className="centered-container">
          <div className="title">
            <h3>
              <strong>In</strong>style
            </h3>
            <h1> Be the one </h1>
          </div>
 
        </div>

        <div className="auth-buttons-container">

        <div className="auth-buttons-wrapper">
            <LandingOverlay onSubmit={login} signIn={true} />
            <LandingOverlay onSubmit={register} signIn={false} />
          </div>
          </div>
      </main>
    </div>
  );
}
