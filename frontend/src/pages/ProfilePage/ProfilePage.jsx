import React from "react";
import { useEffect, useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Auth from "../../services/Auth";
import ProfilePageContent from "../ProfilePage/ProfilePageContent";
import SlidingMenu from "../../components/SlidingMenu";
import Footer from "../../components/Footer"
import AuthApi from "../../api/AuthApi";

export default function DetailsPage({ match }) {
const currentUserEmail = AuthApi.getCurrentUser();
const {
  params: { userEmail },
} = match;



  return (
    <div className="general-container">
      <header>
        <SlidingMenu />
        <div className="nav-container">
          <NavBar onLogout={() => Auth.logout()} />
        </div>
      </header>

      <main>
     
        <ProfilePageContent userToDisplay={userEmail} />

      </main>

      <footer> <Footer /> </footer>
    </div>
  );
}
