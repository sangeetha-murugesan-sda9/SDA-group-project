import Api from "./Api";
import axios from "axios";
import Auth from "../services/Auth";

class ApiCalls { 

// POST ENDPOINTS //

addVotedPictureToCurrentUser(pictureId) {
  return axios.post("http://localhost:8080/voted/" + pictureId, "", {
    headers: {
      Authorization: Auth.getAuthorizationHeader(),
    },
  });
}





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

return  axios.post("http://localhost:8080/picture-url",url, {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
        "Content-Type": "text/plain"
      },
    });
  }

  
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


   // add a comment to picture by pictureId
    addComment(pictureId, body ) {
      var url = "http://localhost:8080/picture/"+ pictureId +"/comment"
      return axios.post(url, body, {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
        "Content-Type": "text/plain"
      },
    });
  }





// GET ENDPOINTS //

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

    // get all comments by pictureId
    getCommentsById(pictureId) {

      return axios.get("http://localhost:8080/comments/" + pictureId , {
        headers: {
          Authorization: Auth.getAuthorizationHeader(),
          
        },
      });
    }

      // get all voted pictures of the current user
      getVotedPictures() {

        return axios.get("http://localhost:8080/voted", {
          headers: {
            Authorization: Auth.getAuthorizationHeader(),            
          },
        });
      }


  // PUT ENDPOINTS //
  updateUsername(string) {
    return axios.put("http://localhost:8080/current-user", string , {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
        "Content-Type": "text/plain"
      },
    });
  }

  updateInstagram(string) {
    return axios.put("http://localhost:8080/current-instagram", string , {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
        "Content-Type": "text/plain"
      },
    });
  }

  updateAvatar(string) {
    return axios.put("http://localhost:8080/avatar-url", string , {
      headers: {
        Authorization: Auth.getAuthorizationHeader(),
        "Content-Type": "text/plain"
      },
    });
  }



// DELETE ENDPOINTS //

deletePictureById(pictureId) {
  return axios.delete("http://localhost:8080/picture/" + pictureId,  {
    headers: {
      Authorization: Auth.getAuthorizationHeader()      
    },
  });
}

 // delete all comments by his id

 deleteComment(commentId) {

  return axios.delete("http://localhost:8080/comments/" + commentId, {
    headers: {
      Authorization: Auth.getAuthorizationHeader()      
    },
  });
}



}

export default new ApiCalls();
