// == Import
import { NavLink } from "react-router-dom";
// import Signature from ".src/assets/svg/theneau-maxime.svg?url";
// import SignatureWebp from ".src/assets/webp/theneau-maxime.webp";
import Signature from "../../assets/svg/theneau-maxime.svg?url";
import SignatureWebp from "../../assets/webp/theneau-maxime.webp";
import "./styles.css";

// == Composant
function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li className="footer-link">
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className="footer-link">
          <NavLink to="/services">Services</NavLink>
        </li>
        <li className="footer-link">
          <NavLink to="/contact">Contact</NavLink>
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
          <i className="signature" />
        </a>
      </div>
    </footer>
  );
}

// == Export
export default Footer;
