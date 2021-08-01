import React, { useState } from "react";
import { login } from "./utils";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    alert("login form submitted!");
  };

  return (
    <div className="App">
      <div className="login-container">
        <form className="form" onSubmit={formSubmit}>
          <h2>Login:</h2>
          <input 
            type="text" 
            placeholder="username" 
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input 
            type="password"
            placeholder="password"
            autoComplete="new-password"
          />
          <button className="submit btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// refer to: digitalCraft/react/lynda-react/hello-react/src/LoginPlain.js
// radio button: https://app.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
