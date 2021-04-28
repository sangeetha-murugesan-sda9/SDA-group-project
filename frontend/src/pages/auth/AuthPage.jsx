// NPM Packages
import React from "react";


// Project files
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";

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
                    <div className="col-md-6 " style={{ color: "white" }}>
                        <h1>InStyle</h1>
                        <p></p>
                    </div>

                    <div className="col-md-6">
                            <div className="col-12">
                                <LoginForm onSubmit={login} />
                            </div>

                            <div className="col-12 mt-4">
                                <RegisterForm onSubmit={register} />
                            </div>
                        </div>
                    </div>

    );

}
