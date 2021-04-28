// NPM Packages
import React, { useState } from "react";
import Popup from "../../components/Popup";



export default function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log("email",email);
    console.log("pass",password);


    //Methods

    return (
        <div className="card-body">
            <Popup onSubmit={onSubmit} signIn={true} />
            <Popup onSubmit={onSubmit} signIn={false}/>
                
            </div>

    );
}
