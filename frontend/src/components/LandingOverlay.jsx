import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import Auth from "../services/Auth";
import Overlay from "react-overlay-component";
import edit from "../assets/img/icons/pen.svg";


export default function LandingOverlay({ onSubmit, signIn }) {

   //constants
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");


  //translation
  const [t, i18n] = useTranslation('common');
  
  //Manage the overlay
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);

  //overlay configuration see component documentation
  const configs = {
    animate: true,
    clickDismiss: true,
    escapeDismiss: true,
    focusOutline: true
  };

  return (

    signIn === true ? (


    <div>
      <button
        className="btn-blue"
        onClick={() => {
          setOverlay(true);
        }}
      > Sign in </button>

      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
      <div className="overlay-form-group ">
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
            </div>

            <button  
            className="btn-grey"
            onClick={() => onSubmit({ email, password })}
            > Sign in</button>
          </div>


      </Overlay>
    </div>
    ):(

<div>
      <button
        className="btn-white"
        onClick={() => {
          setOverlay(true);
        }}
      > Register </button>

      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
      <div className="overlay-form-group ">
            <h4 className="card-title">Register</h4>
            <div>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Name"
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        placeholder="Email"
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
                </div>

                <div className="form-group">
                    <button
                        className="btn-grey"
                        onClick={(e) => onSubmit({username, email, password })}
                    >
                        Create account
                    </button>
                </div>
            </div>
        </div>
      </Overlay>
    </div>





    )



  );
}
