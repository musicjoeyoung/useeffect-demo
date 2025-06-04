import "./Navbar.scss";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li>
          <NavLink to="/">Profiles</NavLink>
        </li>
        <li>
          <NavLink to="/examples">Examples</NavLink>
        </li>
        <li>
          <NavLink to="/multiple-requests">Multiple Requests</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
