// NPM Packages
import React, { useState } from "react";
import Popup from "../../components/Popup";
import logo from "../../assets/img/logo/instyle_logo.png";
import Auth from "../../services/Auth";
import ParticlesBg from 'particles-bg';
import Overlay from "react-overlay-component";
import {Popover} from "@varld/popover";



export default function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log("email",email);
    console.log("pass",password);
    const axios = require("axios");


    return (
        <div className="general-container">


            <header>
                {/*<NavBar onLogout={() => Auth.logout()}/>*/}
            </header>
            <img className="Landing-logo" src={logo} alt="Logo"/>;
            <main>

                <div className="popovergroup">
                    <ParticlesBg num={3} type="square" bg={true} />
                   <Popup className="signInbtn" onSubmit={onSubmit} signIn={true}/>


                </div>
                <div className="popovergroup">

                    <Popup  className="registerbtn" onSubmit={onSubmit} signIn={false}/>

                </div>
            </main>

        </div>
    );
}
