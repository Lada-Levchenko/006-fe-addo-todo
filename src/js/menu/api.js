import Data from "./../projects-data";
import MenuActions from "./actions";

class MenuApi {

  getProjects() {
    setTimeout(
      ()=> {
        //replace with request
        MenuActions.getProjects(Data)
      },
    );
  }

}

export default new MenuApi();
