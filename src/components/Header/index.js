// == Import
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toogleNavbar, toogleNavbarSubtitle } from "../../action/header";
import Logo from "../../assets/svg/logo-une-taupe-chez-vous.svg";
import "./styles.css";

// == Composant
function Header() {
  const dispatch = useDispatch();
  const toggleNav = useSelector((state) => state.header.toogleNavbar);
  const toggleNavSubtitle = useSelector(
    (state) => state.header.toogleNavbarSubtitle
  );
  const handleSubtitle = () => {
    dispatch(toogleNavbarSubtitle());
    dispatch(toogleNavbar());
  };
  return (
    <>
      <header className="header">
        {toggleNav ? (
          <div className="header-navbar-toggle">
            <div className="header-logo">
              <NavLink to="/">
                <Logo />
              </NavLink>
            </div>
            <div className="header-button_close">
              <button className="" onClick={() => dispatch(toogleNavbar())}>
                x
              </button>
            </div>
          </div>
        ) : (
          <nav className="navbar">
            <div className="header-navbar-toggle">
              <div className="header-logo">
                <NavLink to="/">
                  <Logo />
                </NavLink>
              </div>
              <div className="header-button_close">
                <button onClick={() => dispatch(toogleNavbar())}>x</button>
              </div>
            </div>
            <ul>
              <li className="navbar-item">
                <NavLink to="/" onClick={() => dispatch(toogleNavbar())}>
                  Accueil
                </NavLink>
              </li>
              <li className="navbar-item">
                <div
                  className="navbar-item_subtittle"
                  onClick={() => dispatch(toogleNavbarSubtitle())}
                >
                  Services
                  <i className="icon"> dsds </i>
                </div>
                {toggleNavSubtitle ? (
                  ""
                ) : (
                  <ul className="navbar-subitem">
                    <li className="navbar-subitem-item">
                      <NavLink
                        to="/services/nuisibles/taupe"
                        onClick={handleSubtitle}
                      >
                        Taupe
                      </NavLink>
                    </li>
                    <li className="navbar-subitem-item">
                      <NavLink
                        to="/services/nuisibles/fouines"
                        onClick={handleSubtitle}
                      >
                        Fouine
                      </NavLink>
                    </li>
                    <li className="navbar-subitem-item">
                      <NavLink
                        to="/services/nuisibles/Ragondin"
                        onClick={handleSubtitle}
                      >
                        Ragondin
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li className="navbar-item">
                <NavLink to="/contact" onClick={() => dispatch(toogleNavbar())}>
                  Contact
                </NavLink>
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
