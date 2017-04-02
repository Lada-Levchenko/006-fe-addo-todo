import AjaxWrapper from "../helpers/ajaxwrapper";
import TasksActions from "./actions";
import $ from "jquery";

let serverURL = "http://127.0.0.1:5000";

class TasksApi {

  getTasks(filter) {
    AjaxWrapper({
      type: "GET",
      url: serverURL + "/api/tasks?" + filter,
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader ("Authorization", "JWT " + sessionStorage["access_token"]);
      },
      success: function(data){
          TasksActions.getTasks(data);
        }
      }
    );
  }

}

export default new TasksApi();
