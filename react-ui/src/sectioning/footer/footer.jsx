import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="nav">
        <li className="nav-item copyright">Copyright 2021</li>
        <li className="nav-item">
          <a
            href="https://github.com/heggy231"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
        </li>
        <li className="nav-item">
          <NavLink to="/credits" className="nav-link">Credits</NavLink>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
