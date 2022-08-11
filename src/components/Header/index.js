// == Import

import { NavLink } from 'react-router-dom';
import './styles.css';

// == Composant
function Header() {
  return (
    <div className="header">
    // -- Navbar
    <nav class="navbar">
      <div class="navbar-brand">
        <NavLink class="navbar-item" to="#home">
          <img src="#" alt="Logo Une Taupe Chez Vous" width="112" height="28" />
        </NavLink>
        <div class="navbar-burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <NavLink class="navbar-item" to="#home">Accueil</NavLink>
          <NavLink class="navbar-item" to="#home">Intervention</NavLink>
          <NavLink class="navbar-item" to="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
    <nav class="navbar">
      <div class="navbar-brand">
        <NavLink class="navbar-item" to="#home">
          <img src="#" alt="Logo Une Taupe Chez Vous" width="112" height="28"/>
        </NavLink>
        <div class="navbar-burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
        </div>
      </div>
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <NavLink class="navbar-item" to="#home">Accueil</NavLink>
          <NavLink class="navbar-item" to="#home">Intervention</NavLink>
          <NavLink class="navbar-item" to="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
    </div>
  );
}

// == Export
export default Header;
