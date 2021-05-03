import Api from "./Api";
import axios from "axios";

class PictureApi {


//https://my.api.mockaroo.com/user.json?key=ae007e80

  getAllpictures() {
    return Api.get("/files");
  }
/* 
  getPostById(id) {
    return Api.get("/posts/" + id);
  }
  
  updatePost(id, post) {
    return Api.put(`/posts/${id}`, post);
  }

  deletePost(id) {
    return Api.delete("/posts/" + id);
  } */









  
}

export default new PictureApi();
