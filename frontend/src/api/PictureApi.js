import Api from "./Api";

class PictureApi {

upload(file) {
    return Api.post("/upload", file);
  }

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
