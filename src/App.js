import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./components/users/Login"
import Register from "./components/users/Register"
import Dashboard from "./components/products/Dashboard"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
