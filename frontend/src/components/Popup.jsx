import { Popover } from "@varld/popover";
import React, { useState } from "react";

export default function Popup({ onSubmit, signIn }) {
  //constants
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
      <div className="popover-login">
        <div className="form-group">
          <label>Username:</label>
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
        > Register</button>
      </div>
    
    
            
    
    );      
    
}}
>
  <button className="btn-blue">Register</button>
</Popover>


 )

    








  );
}
