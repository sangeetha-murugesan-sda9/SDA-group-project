import React from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import winnerImg from "../../assets/img/mockup/winner.jpeg";
import homeImg from "../../assets/img/home-img.png";
import VoteComponent from "../../components/VoteComponent";
import Auth from "../../services/Auth";

export default function DiscoverPage() {
  return (
    <div className="general-container">
      <header>
        <NavBar onLogout={() => Auth.logout()} />
      </header>

      <main>
        <div className="homepage-content">

          <div className="homepage-submit-container" > 
          <img src={homeImg} alt="img" />
            <button className="btn-blue">Submit a style</button>
          </div>

          <div>
            <h2>Discover more styles ...</h2>
            <div className="card-small-container">
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
              <div className="card-small">
                <img src={winnerImg} alt="img" />
                <VoteComponent/>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer> Follow us | about SDA | About us </footer>
    </div>
  );
}
