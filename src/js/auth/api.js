import Data from "./../projects-data";
import AuthActions from "./actions";
import $ from "jquery";

let serverURL = "http://127.0.0.1:5000";

class AuthApi {

  signIn(authData){
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
      success: function(response){
          sessionStorage["access_token"] = response["access_token"];
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
      },
      failure: function(errMsg) {
          alert(errMsg);
      }
    });
  }

}

export default new AuthApi();
