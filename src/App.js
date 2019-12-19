import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddForm from "./components/AddForm";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={WelcomePage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/add_form" component={AddForm} />
    </div>
  );
}

export default App;
