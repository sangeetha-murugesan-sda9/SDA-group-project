// NPM Packages
import React from "react";


// Project files

import Auth from "../../services/Auth";
//git import BackGround from "../../assets/img/BackGround/581znc.gif";
import Popup from "../../components/Popup";

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
        <div className="wrapper"  >

            <main>
                <h2  className="center">
                    In style
                </h2>
                <p className="center"> Be the one </p>

                <div className="container">

                    <div className="center">
                        <Popup className="signInbtn" onSubmit={login} signIn={true}/>
                        <Popup  className="registerbtn" onSubmit={register} signIn={false}/>
                    </div>
                </div>
            </main>
        </div>

    );
}
