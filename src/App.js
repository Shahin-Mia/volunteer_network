import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AdminPanel from './component/AdminPanel/AdminPanel';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import TaskManager from './component/TaskManager/TaskManager';
import PrivateRoute from './PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <AdminPanel />
          </Route>
          <PrivateRoute path="/register/:title/:id">
            <Register />
          </PrivateRoute>
          <PrivateRoute path="/allRegisteredActivities">
            <TaskManager />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
