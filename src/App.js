import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./views/LoginPage/LoginPage.jsx";
import HomePage from "./views/HomePage/HomePage.jsx";

function App() {
  return (
    <Router>  
      <Switch>
        <Route exact path="/" render={() => (
          <Redirect to="/login"/>
        )}/>
        <Route path={'/login'} component={LoginPage} exact />;
        <Route path={'/home'} component={HomePage} />;
      </Switch>
    </Router>
  );
}

export default App;
