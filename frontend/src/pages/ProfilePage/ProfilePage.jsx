import React from "react";
import { useEffect, useState } from "react";

import "../../styles/base.css";
import NavBar from "../../components/Navbar";
import Card from "../../components/Card";
import janeImg from "../../assets/img/mockup/jane-thumbnail.png";
import Auth from "../../services/Auth";
import UploadButton from "../../components/UploadButton";
import ProfilePageContent from "./ProfilePageContent"
import SlidingMenu from "../../components/SlidingMenu";

export default function ProfilePage({owner}) {
     
  return (
    <div className="general-container">

      <header>
                  <SlidingMenu />
         <div className="nav-container">
           <NavBar onLogout={() => Auth.logout()} />
         </div>
         
         </header>

      <main>
        <ProfilePageContent owner = {owner}/>
      </main>

      <footer> Follow us | about SDA | About us </footer>
    </div>
  );
}


