import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import {Navbar} from './components/navbar/Nav'
import {Register} from './components/register/Register';
import {Login} from './components/login/Login';
import {Protected} from './components/protected/Protected';
import {PrivateRoute} from './components/private-route/private-route'

import './App.css'; 

import {store} from './store/root.store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute exact path="/protected" component={Protected}/>
      </Switch>
    </Router>
  </Provider>
)}
export default App;
