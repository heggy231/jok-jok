import { NavLink } from "react-router-dom";
import Greeting from "../../components/greeting";

const Header = () => {
  return (
    <header>
      <div className="nav">
        <img src="/lip-logo.png" alt="logo" width="40" />
        <h1>JokJok</h1>
      </div>
      <div className="nav">
        <NavLink to="/">home</NavLink>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <NavLink class="nav-link" to="/start">start</NavLink>
        </li>
        <li className="nav-item">
          <NavLink class="nav-link" to="/decide">decide</NavLink>
        </li>
        <li className="nav-item">
          <NavLink class="nav-link" to="/dashboard">dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink class="nav-link" to="/chat">chat</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
