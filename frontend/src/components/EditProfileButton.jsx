import {React,useState,useEffect} from "react";
import axios from "axios";
import Auth from "../services/Auth";
import Overlay from "react-overlay-component";


/**
 * Component to handle file upload.
 * Works for image uploads, but can be edited to work for any file.
 */


 export default function EditProfileButton() {
   //constants

   //Manage the overlay
   const [isOpen, setOverlay] = useState(false);
   const closeOverlay = () => setOverlay(false);

   // State to store uploaded file

   const [file, setFile] = useState();
   const [pic, setPic] = useState("");
   const configs = {
     animate: true,
   };

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
     });
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
         className="btn-blue"
         onClick={() => {
           setOverlay(true);
         }}
       >
         Edit profile
       </button>

       <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
         <h2>Edit profile</h2>

         <div className="overlay-form-group">
           <label>Change username</label>
           <input
             type="text"
             placeholder="Enter new username"
             className="form-control"
             /* value={password} */
             /* onChange={() => ()} */
           />
           <button
             className="btn-grey"
             /* onClick={(e) => onSubmit({ name, email, password })} */
           >
             OK
           </button>
         </div>

         <div className="upload-box">
         <label  >Change profile picture :</label>
         {/*   <label htmlFor="file" className="btn-grey" >Select</label> */}
           <input type="file" onChange={handleFile} />
           <button className="btn-grey" type="button" onClick={handleUpload}>
             Upload
           </button>
         </div>
       </Overlay>
     </div>
   );
 }





