import Api from "./Api";
import axios from "axios";
import Auth from "../services/Auth";

class ApiCalls {

//TODO - REFACTOR AXIOS CALLS HERE:


// upload a picture to dB - works
uploadPicture(item){

axios.post("http://localhost:8080/upload", item, {
    headers: {
    Authorization: Auth.getAuthorizationHeader()
    }
  });

}

addLike(pictureId){

    return axios.post("http://localhost:8080/likes/"+ pictureId ,"",{
        headers: {
        Authorization: Auth.getAuthorizationHeader()
        }
      })
}

getLikes(pictureId){
    
   return axios.get("http://localhost:8080/likes/"+ pictureId ,{
      headers: {
      Authorization: Auth.getAuthorizationHeader()
      }
    })
       
          
    }





  
}

export default new ApiCalls();
