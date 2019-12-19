import React from "react";

const WelcomePage = props => {
  return (
    <div>
      <h2>Restaurant Passport</h2>
      <button onClick={() => props.history.push("/login")} >Login</button>
      <button onClick={() => props.history.push("/register")}>Register</button>
    </div>
  );
};

export default WelcomePage;
