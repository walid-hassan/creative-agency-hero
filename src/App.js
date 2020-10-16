import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddService from './Components/AddService';
import Order from './Components/Order';
import ServiceList from './Components/ServiceList';
import MakeReview from './Components/MakeReview';
import MakeAdmin from './Components/MakeAdmin';
import Orders from './Components/Orders';
import Login from './Components/Login';
import { createContext } from 'react';
import { useState } from 'react';
import MyProfile from './Components/MyProfile';
import PrivateRoute from './Components/PrivateRoute';

export const userContext = createContext();

function App() {
  const [loggedUser, setLoggedUser] = useState({});

  return (
    <userContext.Provider value={[loggedUser, setLoggedUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/dashboard/my-profile">
            <MyProfile />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/add-service">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/place-order/:id">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/place-order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/service-list">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/review">
            <MakeReview />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/make-admin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/orders">
            <Orders />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
