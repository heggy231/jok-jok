import { NavLink } from "react-router-dom";
import Greeting from "../../components/greeting";

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">home</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/start">start</NavLink>
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
      <Greeting someName="June"/>
    </header>
  );
};

export default Header;
