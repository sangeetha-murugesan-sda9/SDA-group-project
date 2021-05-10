import { React, useState, useEffect, useRef } from "react";
import axios from "axios";

import Auth from "../services/Auth";
import Overlay from "react-overlay-component";
import edit from "../assets/img/icons/pen.svg";

/**
 * Component to handle file upload.
 * Works for image uploads, but can be edited to work for any file.
 */

export default function EditProfileButton() {
  //constants
  const axios = require("axios");
  //Manage the overlay
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);

  // State to store uploaded file

  const [file, setFile] = useState();
  const [pic, setPic] = useState("");
  const [name, setName] = useState("");
  const configs = {
    animate: true,
  };

  function editName(event) {
    setName(event.target.value);
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

  /// return image at id 1 - from db

  /* useEffect(() => {
  getPicOne();  
  //console.log(pic);
},[]); */

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
        <h3>Edit profile</h3>

        <div className="overlay-form-group">
          <label>Change username</label>
          <input
            type="text"
            placeholder="Enter new username"
            className="form-control"
            onChange={editName}
            value={name}
            /* value={password} */
            /* onChange={() => ()} */
          />
          <button
            className="btn-grey"
            // onClick={(e) => onSubmit({ name, email, password })}
          >
            OK
          </button>
        </div>

        <div className="upload-box">
          <label>Change profile picture :</label>
          {/*   <label htmlFor="file" className="btn-grey" >Select</label> */}
          {/*  <input type="file" onChange={handleFile} />*/}
          {/*<input type="file" accept="image/*" multiple = "false" onChange={onchange}/>*/}

          <button className="btn-grey" type="button" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </Overlay>
    </div>
  );
}
