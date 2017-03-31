import MenuActions from "./actions";
import $ from "jquery";

let serverURL = "http://127.0.0.1:5000";

class MenuApi {

  getProjects() {
    $.ajax({
      type: "GET",
      url: serverURL + "/api/projects",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader ("Authorization", "JWT " + sessionStorage["access_token"]);
      },
      success: function(data){
          MenuActions.getProjects(data);
        }
      }
    );
  }

}

export default new MenuApi();
