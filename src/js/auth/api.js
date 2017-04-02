import AuthActions from "./actions";
import $ from "jquery";

let serverURL = "http://127.0.0.1:5000";


class AuthApi {

  getUsername(){
    $.ajax({
      type: "GET",
      url: serverURL + "/api/user",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader ("Authorization", "JWT " + sessionStorage["access_token"]);
      },
      success: function(user){
          AuthActions.authorize(user["username"]);
        }
      }
    );
  }

  getUsernameWithToken(response){
    sessionStorage["access_token"] = response["access_token"];
    this.getUsername();
  }

  signIn(authData){
    this.getUsernameWithToken = this.getUsernameWithToken.bind(this);
    $.ajax({
      type: "POST",
      url: serverURL + "/authenticate",
      data: JSON.stringify(authData),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
      },
      success: this.getUsernameWithToken,
      failure: function(errMsg) {
          alert(errMsg);
      }
    });
  }

  signInAfterCreated(){
    this.signIn(this.authData);
  }


  signUp(authData){
    this.authData = authData;
    this.signInAfterCreated = this.signInAfterCreated.bind(this);
    $.ajax({
      type: "POST",
      url: serverURL + "/api/user",
      data: JSON.stringify(authData),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
      },
      success: this.signInAfterCreated,
      failure: function(errMsg) {
          alert(errMsg);
      }
    });
  }

}

export default new AuthApi();
