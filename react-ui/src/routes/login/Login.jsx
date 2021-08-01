import React, { useState, useReducer } from "react";
import { login } from "./utils";
import "./Login.css";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case "success":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "error":
      return {
        ...state,
        error: "Incorrect credentials",
        showLoader: false,
        setUsername: "",
        setPassword: "",
      };
    default:
      break;
  }

  return state;
};

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

const Login = () => {
  const [state, dispatch] = useReducer(loginReducer);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const formSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "login" }); //user behavior of logging in
    try {
      await login({ username, password });

      dispatch({ type: "success" });
      // once logged in, reset password
      setPassword("");
      setError("");
    } catch (error) {
      dispatch({ type: "error" });
      /**
       * when error I want to do
       * 1. showLoader(false)
       * 2. setUsername('')
       * 3. setPassword('')
       */
      setError("Incorrect credentials");
    }

    setIsLoading(false); // done login-In
  };

  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Hello, {username}!</h1>
            <button
              className="btn btn-primary"
              onClick={() => setIsLoggedIn(false)}
            >
              Log Out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={formSubmit}>
            {/* if there is error then show error */}
            {error && <h2 className="error">{error}</h2>}
            <h2>Login:</h2>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* when login is in process disable the button */}
            <button
              className="submit btn btn-primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging in, wait" : "Login"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;

// refer to: digitalCraft/react/lynda-react/hello-react/src/LoginPlain.js
// radio button: https://app.pluralsight.com/guides/how-to-use-radio-buttons-in-reactjs
