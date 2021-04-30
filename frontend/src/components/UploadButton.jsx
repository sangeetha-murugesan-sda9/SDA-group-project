import {React,useState} from "react";

/**
 * Component to handle file upload.
 * Works for image uploads, but can be edited to work for any file.
 */
 export default function UploadButton() {

  // State to store uploaded file
  const [file, setFile] = useState("");

  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);

 /**
 * Component to display thumbnail of image.
 */   
    const ImageThumb = ({ image }) => {
        return <img src={URL.createObjectURL(image)} alt={image.name} />;
      };

    // TODO - Add code here to upload file to server
    // ...
  }

  return (
    <div id="upload-box">
        <label for="files" class="btn-submit-float">+</label>
      <input id="files" type="file" onChange={handleUpload} />
           {/* {file && <ImageThumb image={file} />} */}
           
    </div>
  );
}





