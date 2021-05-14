import Api from "./Api";
import axios from "axios";
import Auth from "../services/Auth";

class ApiCalls {
  //TODO - REFACTOR AXIOS CALLS HERE:

  // upload a picture to dB - works
  uploadPicture(item) {
    axios.post("http://localhost:8080/upload", item, {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
      },
    });
  }




// post picture ( backup ) to the current user
  addPictureToCurrentUser(url) {

//const picture = "https://photos.lci.fr/images/613/344/moundirw9-814829-0@1x.jpeg"

    axios.post("http://localhost:8080/picture-url",url, {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
        "Content-Type": "text/plain"
      },
    });
  }




  // POST //
  addLike(pictureId) {
    return axios.post("http://localhost:8080/likes/" + pictureId, "", {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
      },
    });
  }

  addDislike(pictureId) {
    return axios.post("http://localhost:8080/dislikes/" + pictureId, "", {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
      },
    });
  }


// GET  //
getCurrentUser() {
  return axios.get("http://localhost:8080/current-user", {
    headers: {
      Authorization: Auth.getAuthorizationHeader(),
    },
  });
}

  getAllUsers() {
    return axios.get("http://localhost:8080/users", {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
      },
    });
  }


  getLikes(pictureId) {
    return axios.get("http://localhost:8080/likes/" + pictureId, {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
      },
    });
  }


  getDislikes(pictureId) {
    return axios.get("http://localhost:8080/dislikes/" + pictureId, {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
      },
    });
  }



  // PUT //
  updateUsername(string) {
    return axios.put("http://localhost:8080/current-user", string , {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
        "Content-Type": "text/plain"
      },
    });
  }





}

export default new ApiCalls();
