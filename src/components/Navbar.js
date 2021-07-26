import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="back-grnd">
      <div className="contain-cls">
        <NavLink to="/" exact className="main-hme">
          Portfolio
        </NavLink>
        <ul className="nav-menu">
          <li>
            <NavLink to="/blog" className="nav-item">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-item">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
