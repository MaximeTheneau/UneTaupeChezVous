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
                <i className="icon-navbar" />
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
                <button onClick={() => dispatch(toogleNavbar())}>
                  <i className="icon-x" />
                </button>
              </div>
            </div>
            <ul className="header-navbar">
              <li className="header-navbar-item">
                <NavLink to="/" onClick={() => dispatch(toogleNavbar())}>
                  Accueil
                </NavLink>
              </li>
              <li>
                <div
                  className="header-navbar-item_subtitle"
                  onClick={() => dispatch(toogleNavbarSubtitle())}
                >
                  Services
                  {toggleNavSubtitle ? (
                    <i className="icon-angle" />
                  ) : (
                    <i className="icon-angle rotate-90" />
                  )}
                </div>
                {toggleNavSubtitle ? (
                  ""
                ) : (
                  <ul className="header-navbar-subitem">
                    <li className="header-navbar-subtitle-item">
                      <NavLink
                        to="/services/nuisibles/taupe"
                        onClick={handleSubtitle}
                      >
                        Taupe
                      </NavLink>
                    </li>
                    <li className="header-navbar-subtitle-item">
                      <NavLink
                        to="/services/nuisibles/fouine"
                        onClick={handleSubtitle}
                      >
                        Fouine
                      </NavLink>
                    </li>
                    <li className="header-navbar-subtitle-item">
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
              <li className="header-navbar-item">
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
