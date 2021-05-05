import { Popover } from "@varld/popover";
import React, { useState } from "react";

export default function Popup({ onSubmit, signIn }) {
  //constants
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

 
  //Methods

  function openPopup() {
    //display the popup
  }
 

  return (
    signIn === true ? (

    //sign in button
    <Popover
      popover={() => {
       

        return (
          <div className="popover-login">
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
            className="btn btn-info"
            onClick={() => onSubmit({ email, password })}
            > Sign in</button>
          </div>
        
        
                
        
        );      
        
    }}
    >
      <button className="btn-blue"> Sign in</button>
    </Popover>

  
 ) : (

  //TODO - register button
  <Popover
  popover={() => {
   

    return (
        <div className="card-body">
            <h4 className="card-title">Register</h4>
            <div>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        className="btn btn-success"
                        onClick={(e) => onSubmit({ name, email, password })}
                    >
                        Create account
                    </button>
                </div>
            </div>
        </div>

    );      
    
}}
>
  <button className="btn-white">Register</button>
</Popover>
    )
  );
}
