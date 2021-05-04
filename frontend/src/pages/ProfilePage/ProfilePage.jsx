import React from "react";
import { useEffect, useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Card from "../../components/Card";
import janeImg from "../../assets/img/mockup/jane-thumbnail.png";
import Auth from "../../services/Auth";
import UploadButton from "../../components/UploadButton";
import ProfilePageContent from "./ProfilePageContent";
import SlidingMenu from "../../components/SlidingMenu";
import Footer from "../../components/Footer"

export default function ProfilePage({ owner }) {
  return (
    <div className="general-container">

      <div className="header-deco-sub"></div>
      <div className="header-deco-mid"></div>
      <div className="header-deco-top"></div>

      <header>
        <SlidingMenu />
        <div className="nav-container">
          <NavBar onLogout={() => Auth.logout()} />
        </div>
      </header>

      <main>
        <ProfilePageContent owner={owner} />
      </main>

      <footer> <Footer /> </footer>
    </div>
  );
}
