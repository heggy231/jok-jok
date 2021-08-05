import React, { useReducer } from "react";
import { login } from "./utils";
import "./Login.css";
import { NavLink } from "react-router-dom";

const loginReducer = (state, action) => {
  switch (action.type) {
    case "field":
      return {
        ...state,
        // create field key programmatically es6 interpolation property name [action.field]. ex) action obj field is field: "username" => [action.field] = username key is created. Then set its value to `e.target.value`
        [action.field]: action.value,
      };
    case "login":
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        error: "",
      };
    case "logout":
      return {
        ...state,
        isLoading: false,
        username: "",
        password: "",
      };
    case "success":
      return {
        ...state,
        isLoggedIn: true,
        password: "",
      };
    case "error":
      return {
        ...state,
        error: "Incorrect credentials",
        isLoading: false,
        username: "",
        password: "",
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
  const [state, dispatch] = useReducer(loginReducer, initialState);

  // let username = state.username; Destructuring keys out of values when we do {username} = state;
  const { username, password, isLoading, error, isLoggedIn } = state;

  const formSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "login" }); //user behavior of logging in
    try {
      await login({ username, password }); // login function takes in object with username and password
      dispatch({ type: "success" });
    } catch (error) {
      /**
       * when error I want to do
       * 1. showLoader(false)
       * 2. setUsername('')
       * 3. setPassword('')
       * 4. error: 'Incorrect credentials'
       */
      dispatch({ type: "error" });
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Hello, {username}! 🎉</h1>
            <button
              className="btn btn-primary"
              onClick={() => dispatch({ type: "logout" })}
            >
              Log Out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={formSubmit}>
            {/* if error => show error */}
            {error && <h2 className="error">{error}</h2>}
            <h2>Login:</h2>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "username",
                  value: e.target.value,
                })
              }
            />
            <input
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "password",
                  value: e.target.value,
                })
              }
            />
            {/* when login is in process disable the button */}
            <button
              className="submit btn btn-primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Logging in, wait ⏳" : "Login"}
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
