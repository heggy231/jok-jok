import { NavLink } from "react-router-dom";
import Greeting from "../../components/greeting";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">
          <img src="/lip-logo.png" alt="logo" width="40" />
          JokJok
        </NavLink>
        {/* <NavLink to="/"></NavLink> */}
      </div>
      <ul>
      <li>
          <NavLink to="/helloworld">helloWorld</NavLink>
        </li>
        <li>
          <NavLink to="/">login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">signup</NavLink>
        </li>
        <li>
          <NavLink to="/gender">gender</NavLink>
        </li>
        <li>
          <NavLink to="/decide">decide</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/chat">chat</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
