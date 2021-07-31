import { NavLink } from "react-router-dom";
import Greeting from "../../components/greeting";
import './header.css';

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/"><img src="/lip-logo.png" alt="logo" width="40" /></NavLink>
        <NavLink to="/">JokJok</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/start">start</NavLink>
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
