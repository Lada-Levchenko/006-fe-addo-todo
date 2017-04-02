import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import NotFound from './components/notfound';
import Menu from './menu';
import Auth from './auth';
import AuthStore from './auth/store';
import Tasks from './tasks';
import $ from 'jquery';

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: "",
      main_area: <Auth method={this.onAuthorized.bind(this)}/>
    }
    this.onUnauthorized = this.onUnauthorized.bind(this);
  }

  componentDidMount() {
    AuthStore.addEventListener('unauthorize', this.onUnauthorized);
  }

  componentWillUnmount() {
    AuthStore.addEventListener('unauthorize', this.onUnauthorized);
  }

  onAuthorized(username){
    this.setState({
      username: username,
      menu: <Menu />,
      main_area: <Tasks />
    });
    $("username").html(this.state.username);
  }

  onUnauthorized(){
    this.setState({
      username: "None",
      menu: "",
      main_area:<Auth method={this.onAuthorized.bind(this)}/>
    });
    $("username").html(this.state.username);
  }

  render() {
    return (
      <span>
        <div className="col-sm-1 bg-gray"></div>
        <div className="col-sm-2 bg-gray">
          {this.state.menu}
        </div>
        <div className="col-sm-6">
          <div className="container-fluid" id="main_area">
            {this.state.main_area}
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
