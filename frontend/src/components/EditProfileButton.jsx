import { React, useState, useEffect, useRef } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import Auth from "../services/Auth";
import Overlay from "react-overlay-component";
import edit from "../assets/img/icons/pen.svg";
import ApiCalls from "../api/ApiCalls";
import Methods from "../services/Methods"

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

  // State to store uploaded file

  const [file, setFile] = useState();
  const [pic, setPic] = useState("");
  const [username, setUsername] = useState("");

  function updateUsername() {
    if (username.length < 5) {
      alert("Please enter 5 characters minimum ");
    } else {
      ApiCalls.updateUsername(username);
      alert("Username succesfully updated ");
      closeOverlay();
      window.location.reload()
    }
  }

  //HandleFile
  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  // Handle the upload to dB //
  function handleUpload() {
    console.log(file, "state file");

    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("user", file);

    console.log(formdata, "formdata");

    console.log("token", Auth.getAuthorizationHeader());

    axios.post("http://localhost:8080/upload", formdata, {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
      },
      /*   const config = {
           headers: {
               'content-type': 'multipart/form-data'
           }
       };
         axios.post("http://localhost:8080/upload",formdata,config)
             .then((response) => {
                 alert("The file is successfully uploaded");
             }).catch((error) => {*/
    });
    // onChange(e)
    // {
    //     setState({file:e.target.files[0]});
    // }

    closeOverlay();
  }

// updaterandom avatar to current user
function updateAvatar() {

ApiCalls.updateAvatar(Methods.getRandomAvatarUrl())
  
  alert("Avatar succesfully changed 🙌")
  closeOverlay()
  window.location.reload();
}








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
        <h3>{t("overlay.label-profile")}</h3>

        <div className="overlay-form">
          <label>{t("overlay.label-username")}</label>
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

        <div className="upload-box">
          <label>{t("overlay.label-avatar")} :</label>
          {/*   <label htmlFor="file" className="btn-grey" >Select</label> */}
          {/*  <input type="file" onChange={handleFile} />*/}
          {/*<input type="file" accept="image/*" multiple = "false" onChange={onchange}/>*/}

          {/* <button className="btn-grey" type="button" onClick={handleUpload}>
            {t("overlay.upload")}
          </button> */}

        <button className="btn-grey" type="button" onClick={updateAvatar}>Switch Avatar</button>



        </div>


      </Overlay>
    </div>
  );
}
