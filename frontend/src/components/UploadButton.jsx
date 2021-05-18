import {React,useState,useEffect} from "react";
import { useTranslation } from "react-i18next";

import Overlay from "react-overlay-component";
import Methods from '../services/Methods'
import AuthApi from "../api/AuthApi";
import ApiCalls from "../api/ApiCalls";
import UploadWidget from "../components/UploadWidget"


 export default function UploadButton({users}) {

  //console.log("users",users)

  //constants
  const currentUserEmail = AuthApi.getCurrentUser();

  //translation
  const [t, i18n] = useTranslation('common');

//vote logic

const numberOfvotes = Methods.getVotesByEmail(users,currentUserEmail)
const numberOfPicturesOwned = Methods.getNumberOfPicturesByEmail(users,currentUserEmail)

var canUpload = false;

if(numberOfPicturesOwned === 0){
  canUpload = true
}else if((numberOfvotes / numberOfPicturesOwned) > 10){
  canUpload = true
}

const votesNeeded = Math.floor(( 10 - (numberOfvotes / numberOfPicturesOwned) -1 )) 
 

  //Manage the overlay
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);

  

  // State to store uploaded file
    const [file, setFile] = useState();  
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

   //console.log(Methods.getRandompictureUrl);

// upload random pic to current user on db
 const randomPicUrl = Methods.getRandompictureUrl()
//console.log(randomPicUrl)

async function addPic() {

     await ApiCalls.addPictureToCurrentUser(randomPicUrl);
     alert("Picture succesfully send 🙌")
     closeOverlay()
     window.location.reload();
   }


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
        
        {canUpload === true ? (
          <div className="overlay-form" >
            <h2>{t("overlay.label-upload")}</h2>
            <div className="upload-box">             

              {/* <button className="btn-grey" type="button" onClick={addPic}>Add Random Picture</button> */}
              
              <UploadWidget avatar ={false} />

            </div>
          </div>

        ) : (

          <div>
          <h2> Please vote more to be able to submit new picture </h2>
          <h2> Number of votes needed : {votesNeeded} </h2>
          </div>
        )
        }


      

      </Overlay>
    </div>
  );
}





