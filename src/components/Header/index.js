// == Import
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toogleNavbar } from "../../action/header";
import "./styles.css";

// == Composant
function Header() {
  const dispatch = useDispatch()
  const t = useSelector((state) => state.header.toogleNavbar);
  return (
    <>
      <header className="header">
        {t ? (
          <button
            className="header__button"
            onClick={() => dispatch(toogleNavbar())}
          >
            xx
          </button>
        ) : (
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
              <li className="navbar-item">
                <button
                  className="header__button"
                  onClick={() => dispatch(toogleNavbar())}
                >
                  x
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

// == Export
export default Header;
