import {React,useState} from "react";
import PictureApi from "../api/PictureApi"
import axios from "axios";
import Auth from "../services/Auth";
import { useEffect } from "react";
import Overlay from "react-overlay-component";




/**
 * Component to handle file upload.
 * Works for image uploads, but can be edited to work for any file.
 */


 export default function UploadButton() {

  //constants
  
  //Manage the overlay
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);

  // State to store uploaded file
  
  const [file, setFile] = useState();
  const [pic, setPic] = useState("");
  const configs = {
    animate: true,
    // clickDismiss: false,
    // escapeDismiss: false,
    // focusOutline: false,
};


  //HandleFile
  function handleFile(event) {
    setFile(event.target.files[0]);   
   }



  // Handle the upload to dB //
  function handleUpload() {

    console.log(file,"state file");
             
    const formdata = new FormData()
    formdata.append('file',file);
    formdata.append('user',file);      

    console.log(formdata,"formdata");

    console.log("token" ,Auth.getAuthorizationHeader() );

    axios.post(
      "http://localhost:8080/upload",
      formdata,
      {
        headers: { 
          "Authorization": Auth.getAuthorizationHeader() }
      }
    );
    closeOverlay();
  }


/// return image at id 1 - from db

function getPicOne(){
  axios.get(
    "http://localhost:8080/files/1",   
    {
      headers: { 
        "Authorization": Auth.getAuthorizationHeader() },
    }
  )
  .then((res) => {
    console.log(res.data)          
  })
  .catch((error) => {
    console.error(error)
  });
}


/* useEffect(() => {
  getPicOne();  
  //console.log(pic);
},[]); */

  return (
    
   <div>
            <button
                className="btn-submit-green"
                onClick={() => {
                    setOverlay(true);
                }}
            >
                +
            </button>

            <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>

                <h2>Upload a picture</h2>
                <div className="upload-box">
               
                <input type="file" onChange={handleFile} />                             
                <button className="btn-grey" type="button" onClick={handleUpload}>
                Upload
              </button>
              </div>
              
            </Overlay>
        </div>
 
     
            
    
  );
}





