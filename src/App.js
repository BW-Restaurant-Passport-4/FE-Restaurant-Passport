import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import WelcomePage from "./components/WelcomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddForm from "./components/AddForm";
import UserProvider from "./providers/UserProvider";
import PassportProvider from "./providers/PassportProvider";

function App() {
  return (
    <UserProvider>
      <PassportProvider>
        <div className="App">
          <Route exact path="/" component={WelcomePage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/add_form" component={AddForm} />
        </div>
      </PassportProvider>
    </UserProvider>
  );
}

export default App;
