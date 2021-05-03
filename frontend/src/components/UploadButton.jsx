import {React,useState} from "react";
import PictureApi from "../api/PictureApi"
import axios from "axios";
import Auth from "../services/Auth";
import { useEffect } from "react";


/**
 * Component to handle file upload.
 * Works for image uploads, but can be edited to work for any file.
 */


 export default function UploadButton() {

  //constants
  

  // State to store uploaded file
  
  const [file, setFile] = useState();
  const [pic, setPic] = useState("");
 


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


useEffect(() => {
  getPicOne();  
  //console.log(pic);
},[]);




  return (
    <div>
    <form>
    <div id="upload-box">
        <label htmlFor="files" className="btn">Select file</label>
      <input id="filez" type="file" onChange={handleFile} />
           {/* {file && <ImageThumb image={file} />} */}          
    </div>
    <button type ="button" onClick={  handleUpload } >Upload</button>
    </form>

    <img src= {pic} alt= "upPic" /> {/* test */}
    
    </div>
  );
}





