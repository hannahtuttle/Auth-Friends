import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import LoginForm from './components/loginForm.js'
import FormWithFormik from './components/FriendsListForm.js'
import PrivateRoute from './components/PrivateRoute.js'

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Link to= '/login' >Login</Link>
    <br/>
    <Link to= '/friendsList'>Friends List</Link>
    </div>
    <Route path= '/login' component={LoginForm}/>
    <PrivateRoute exact path='/friendsList' component={FormWithFormik}/>
    </Router>
  );
}

export default App;
