import React from "react";
import { useEffect, useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Auth from "../../services/Auth";
import ProfilePageContent from "../ProfilePage/ProfilePageContent";
import SlidingMenu from "../../components/SlidingMenu";
import Footer from "../../components/Footer"
import AuthApi from "../../api/AuthApi";

export default function ProfilePage({ users, userToDisplay}) {

const currentUserEmail = AuthApi.getCurrentUser();


  return (
    <div className="general-container">
      <header>
        <SlidingMenu />
        <div className="nav-container">
          <NavBar onLogout={() => Auth.logout()} />
        </div>
      </header>

      <main>
     
        <ProfilePageContent users={users} userToDisplay={userToDisplay}   />

      </main>

      <footer> <Footer /> </footer>
    </div>
  );
}
