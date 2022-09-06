// == Import
import { NavLink } from "react-router-dom";
import "./styles.css";

// == Composant
function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li className="footer-link">
          <NavLink to="/">Accueil 1</NavLink>
        </li>
        <li className="footer-link">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="footer-link">
          <NavLink to="/contact"> Contact</NavLink>
        </li>
        <li className="footer-link">
          <NavLink to="/mentions-legal">Mentions-légal</NavLink>
        </li>
      </ul>
      <div className="footer-author">
        Site réaliser par
        <a
          href="https://github.com/MaximeTheneau"
          target="blank"
          className="footer-author_signature"
        >
          <i className="theneau-maxime" />
        </a>
      </div>
    </footer>
  );
}

// == Export
export default Footer;
