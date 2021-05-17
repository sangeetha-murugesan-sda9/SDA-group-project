import {React,useState} from 'react'

import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget'
import ApiCalls from "../api/ApiCalls";




export default function  UploadWidget({avatar}) {

 const [url, setUrl] = useState("url")

 //console.log(avatar)

 function openWidget(){

 window.cloudinary.openUploadWidget({
  cloudName: "dpwl3w24j", 
  uploadPreset: "ctpreset",
  showAdvancedOptions: true
  }, (error, result) => {

    if(result.info.secure_url !== undefined){

      console.log(result.info.secure_url) 
      setUrl(result.info.secure_url)
      
      if (avatar === true){
        ApiCalls.updateAvatar(result.info.secure_url);  

      }else{
      ApiCalls.addPictureToCurrentUser(result.info.secure_url);
    }
      alert("Picture succesfully send 🙌")
      window.location.reload();
    }

  });



 }
  

  return (

<div>


<button type="button" className="btn-grey" onClick={openWidget}>
  
{ avatar ? 
<div>Upload Avatar</div>
:
<div>Upload Picture</div>

}</button>

</div>

  )
}