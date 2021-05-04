import Api from "./Api";

class AuthApi {
  authenticate({ email, password }) {
    
    sessionStorage.setItem("loggedUser", email);    
    return Api.post("/authenticate", { email, password });
      }

  register({ name, email, password }) {
    sessionStorage.setItem("loggedUser", email); 
    return Api.post("/register", { name, email, password });
  }

  getCurrentUser() {
    return sessionStorage.getItem("loggedUser");
  } 

// TODO - getCurrentUserName by fetching the API


}

export default new AuthApi();