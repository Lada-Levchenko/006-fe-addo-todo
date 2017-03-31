import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import NotFound from './components/notfound';
import Menu from './menu';
import Auth from './auth';

class TodoApp extends React.Component {
  constructor() {
    super();
  }

  onAuthorized(){
    this.forceUpdate();
  }

  render() {
    let menu = "";
    let main_area = "";
    if(sessionStorage['access_token']){
      menu = <Menu />;
      main_area = (
        <div className="alert alert-info" role="alert">
          Choose one of your projects or date to see the TODO list.
        </div>
      );
    }
    else{
      main_area = <Auth method={this.onAuthorized.bind(this)}/>;
    }
    return (
      <span>
        <div className="col-sm-1 bg-gray"></div>
        <div className="col-sm-2 bg-gray">
          {menu}
        </div>
        <div className="col-sm-6">
          <div className="container-fluid" id="main_area">
            {main_area}
          </div>
        </div>
        <div className="col-sm-3 bg-gray"></div>
      </span>
    );
  }
}

const router = (
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={TodoApp} />
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
);

function renderApp(){
  ReactDOM.render(
    router,
    document.getElementById('app')
  );
}
renderApp();
