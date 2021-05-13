// NPM Packages
import React, { useState } from "react";

export default function RegisterForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //Manage the overlay
    const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
    };

    closeOverlay();

    return (

            <div className="card-body">
                <h4 className="card-title">Sign up</h4>
                <div>
                    {/*<Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>*/}
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
                            // onClick={(e) => onSubmit({ name, email, password },setOverlay(true))}
                        >
                            Create account
                        </button>
                    </div>
                {/*</OverLay>*/}
                </div>

            </div>

    );
}
