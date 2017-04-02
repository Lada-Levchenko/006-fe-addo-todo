import AjaxWrapper from "../helpers/ajaxwrapper";
import MenuActions from "./actions";
import $ from "jquery";

let serverURL = "http://127.0.0.1:5000";

class MenuApi {

  getProjects() {
    AjaxWrapper({
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

  createProject(projectData) {
    AjaxWrapper({
      type: "POST",
      url: serverURL + "/api/project",
      data: JSON.stringify(projectData),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader ("Authorization", "JWT " + sessionStorage["access_token"]);
      },
      success: function(data){
          MenuActions.changed();
        }
      }
    );
  }

}

export default new MenuApi();
