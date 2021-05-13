// NPM Packages
import React, {useState} from "react";

// Project files
import "../../styles/base.css";
import Auth from "../../services/Auth";
import background from "../../assets/img/landingBackground.gif";
import Popup from "../../components/Popup";


export default function LoginPage() {
    
    //constants
    //Manage the overlay
   /* const [isOpen, setOverlay] = useState(false);
    const closeOverlay = () => setOverlay(false);

    const configs = {
        animate: true,
    };*/
    
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
        {/* <img src={background} alt="landBack" id="background" /> */}

        <main>
          <div className="centered-container">
            <div className="title">
           
            <h3><strong>In</strong>style</h3>
            <h1> Be the one </h1>
             </div>

            <div className="popup-container">
              
              <Popup className="signInbtn" onSubmit={login} signIn={true} />
              <Popup
                className="registerbtn"
                onSubmit={register}
                signIn={false}
                
              />
            </div>



          </div>
        </main>
      </div>
    );
}
