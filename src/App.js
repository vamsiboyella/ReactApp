import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import {Switch, Route} from 'react-router';
import CreateUser from './components/createUser';
import EditUser from './components/editUser';
import DisplayUsers from './components/displayUsers';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                {/* <li className="nav-item">
                  <Link to={'/index'} className="nav-link">DisplayUsers</Link>
                </li> */}
              </ul>
            </div>
          </nav>
          <Switch>
              <Route path='/index' component={ DisplayUsers } />
              <Route exact path='/' component={ DisplayUsers } />
              <Route exact path='/create' component={ CreateUser } />
              <Route path='/edit/:id' component={ EditUser } />             
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

