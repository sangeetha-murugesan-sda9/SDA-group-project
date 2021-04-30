import {React,useState} from "react";
import PictureApi from "../api/PictureApi"

/**
 * Component to handle file upload.
 * Works for image uploads, but can be edited to work for any file.
 */


 export default function UploadButton() {

  //constants
  const URL='http://localhost:8080/upload';

  // State to store uploaded file
  const [file, setFile] = useState();

/*  function uploadFile(file) {
    fetch({URL}, {
      // content-type header should not be specified!
      mode: 'no-cors',
      method: 'POST',
      body: file,
    })
      .then(response => response.json())
      .then(success => {
        // Do something with the successful response
      })
      .catch(error => console.log(error)
    );
  }  */

/*   function uploadFile(file){
    PictureApi.upload(file);
  } */

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);
    console.log(file);

 /**
 * Component to display thumbnail of image.
 */   
    const ImageThumb = ({ image }) => {
        return <img src={URL.createObjectURL(image)} alt={image.name} />;
      };




    // TODO - Add code here to upload file to server
    // ...
  
    /* uploadFile(file); */

   

  }

  return (
    <div id="upload-box">
        <label htmlFor="files" className="btn-submit-float">+</label>
      <input id="files" type="file" onChange={handleUpload} />
           {/* {file && <ImageThumb image={file} />} */}
           
    </div>
  );
}





