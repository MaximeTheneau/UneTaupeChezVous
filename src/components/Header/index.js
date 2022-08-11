// == Import
import { NavLink } from "react-router-dom";
import "./styles.css";

// == Composant
function Header() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <ul>
            <li className="navbar-item">
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/services">Services</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

// == Export
export default Header;
