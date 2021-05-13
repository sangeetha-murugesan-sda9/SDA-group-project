// NPM Packages
import React, { useState } from "react";
import Popup from "../../components/Popup";
import logo from "../../assets/img/logo/instyle_logo.png";
import Auth from "../../services/Auth";
import ParticlesBg from 'particles-bg';
import Overlay from "react-overlay-component";


export default function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log("email",email);
    console.log("pass",password);

    //Manage the overlay
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
    };
    //Methods
    closeOverlay();
    return (
        <div className="general-container">


                {/*<Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>*/}
                    <header>
                {/*<NavBar onLogout={() => Auth.logout()}/>*/}
            </header>
         {/*   <div className="popover-login">
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>*/}

                <img className="Landing-logo" src={logo} alt="Logo"/>;
            <main>
{/*
                <div className="form-group">
                    <button
                        className="btn btn-info"
                        onClick={() => onSubmit({ email, password },{setOverlay(true)})}
                    >
                        LogIn
                    </button>*!/*/}

                <div className="popovergroup">
                    <ParticlesBg num={3} type="square" bg={true} />
                    <Popup className="signInbtn" onSubmit={onSubmit} signIn={true}/>



                </div>
                <div className="popovergroup">

                    <Popup  className="registerbtn" onSubmit={onSubmit} signIn={false}/>

                </div>

            </main>
                {/*</Overlay>*/}
        </div>
    );
}
