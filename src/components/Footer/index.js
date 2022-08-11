// == Import
import "./styles.css";

// == Composant
function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li className="footer-link">Accueil</li>
        <li className="footer-link">Services</li>
        <li className="footer-link">Contact</li>
        <li className="footer-link">
          Site réaliser par <a href="#github">Theneau Maxime</a>
        </li>
      </ul>
    </footer>
  );
}

// == Export
export default Footer;
