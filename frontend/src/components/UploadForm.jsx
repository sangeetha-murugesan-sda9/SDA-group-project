import {React,useState,useEffect} from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

import Auth from "../services/Auth";

import Methods from '../services/Methods'
import AuthApi from "../api/AuthApi";
import ApiCalls from "../api/ApiCalls";



 export default function UploadForm({users}) {

  //constants
/*   const [file, setFile] = useState();  
  const [uploading, setUploading] = useState(false);   */

  const API_URL = "https://api.cloudinary.com/v1_1/${cloudName}/upload"

  state = {
    uploading: false,
    images: []
  }

  
  onChange = e => {
    const files = Array.from(e.target.files)
    this.setState({ uploading: true })

    const formData = new FormData()

    files.forEach((file, i) => {
      formData.append(i, file)
    })

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
      this.setState({ 
        uploading: false,
        images
      })
    })
  }

  /* removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  } */
  

  return (
    <div>

<div className="upload-box">
              <input type="file" onChange={this.onChange} />
              
              <button 
              className="btn-grey" 
              type="button" 
              onClick={handleUpload}>{
              t("overlay.upload")}
              </button>
              

    </div>
  );
}





