import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import Auth from "../services/Auth";
import Overlay from "react-overlay-component";
import edit from "../assets/img/icons/pen.svg";
import ApiCalls from "../api/ApiCalls";
import Methods from "../services/Methods";
import UploadWidget from "../components/UploadWidget";

export default function EditProfileButton() {
  //constants
  //translation
  const [t, i18n] = useTranslation("common");

  //Manage the overlay
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);

  const configs = {
    animate: true,
  };

  // State to store uploaded informations
  const [file, setFile] = useState();
  const [instagram, setInstagram] = useState("");
  const [username, setUsername] = useState("");

  async function updateUsername() {
    if (username.length < 5) {
      alert("Please enter 5 characters minimum ");
    } else {
      await ApiCalls.updateUsername(username);
      //alert("Username succesfully updated ");
      closeOverlay();
      window.location.reload();
    }
  }


  async function updateInstagram() {
   
      await ApiCalls.updateInstagram(instagram);
      //alert("Instagram succesfully updated ");
      closeOverlay();
      window.location.reload();
    
  }

  //HandleFile
/*   function handleFile(event) {
    setFile(event.target.files[0]);
  } */


  // updaterandom avatar to current user
/*   function updateAvatar() {
    ApiCalls.updateAvatar(Methods.getRandomAvatarUrl());

    alert("Avatar succesfully changed 🙌");
    closeOverlay();
    window.location.reload();
  } */


  return (
    <div>
      <button
        className="btn-edit"
        onClick={() => {
          setOverlay(true);
        }}
      >
        <img src={edit} />
      </button>

      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <h2>{t("overlay.label-profile")}</h2>

        <div className="upload-box">
          <div className="overlay-form-group">
            <label>{t("overlay.label-username")} :</label>
            <input
              type="text"
              placeholder={t("overlay.placeholder")}
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />

            <button className="btn-grey" onClick={updateUsername}>
              OK
            </button>
          </div>
        </div>


        <div className="upload-box">
          <div className="overlay-form-group">
            <label>Add/Update instagram account :</label>
            <input
              type="text"
              placeholder="instagram"
              className="form-control"
              onChange={(e) => setInstagram(e.target.value)}
              value={instagram}
            />

            <button className="btn-grey" onClick={updateInstagram}>
              OK
            </button>
          </div>
        </div>

        <div className="upload-box">
          <label>{t("overlay.label-avatar")} :</label>
      
          {/* <button className="btn-grey" type="button" onClick={updateAvatar}>Switch Avatar</button> */}
          <UploadWidget avatar={true} />
        </div>
      </Overlay>
    </div>
  );
}
