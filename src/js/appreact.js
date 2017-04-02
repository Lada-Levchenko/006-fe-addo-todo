import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import NotFound from './components/notfound';
import Menu from './menu';
import Auth from './auth';
import AuthActions from './auth/actions';
import AuthStore from './auth/store';
import Tasks from './tasks';
import $ from 'jquery';

class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: "",
      main_area: <Auth />
    }
    this.onAuthorized = this.onAuthorized.bind(this);
    this.onUnauthorized = this.onUnauthorized.bind(this);
  }

  componentDidMount() {
    AuthStore.addEventListener(AuthActions.AUTHORIZED, this.onAuthorized);
    AuthStore.addEventListener(AuthActions.UNAUTHORIZED, this.onUnauthorized);
  }

  componentWillUnmount() {
    AuthStore.removeEventListener(AuthActions.AUTHORIZED, this.onAuthorized);
    AuthStore.removeEventListener(AuthActions.UNAUTHORIZED, this.onUnauthorized);
  }

  onAuthorized(){
    console.log("here");
    this.setState({
      username: AuthStore.getUsername(),
      menu: <Menu />,
      main_area: <Tasks />
    });
    $("username").html(this.state.username);
  }

  onUnauthorized(){
    console.log("here");
    this.setState({
      username: "None",
      menu: "",
      main_area: <Auth />
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
