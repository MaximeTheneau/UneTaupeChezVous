// == Import
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  imgStickyFalse,
  toogleNavbar,
  toogleNavbarSubtitle,
} from "../../action/header";
import "./styles.css";


// == Composant
function Header() {
  const dispatch = useDispatch();
  const toggleNav = useSelector((state) => state.header.toogleNavbar);
  const imgSticky = useSelector((state) => state.header.imgSticky);
  const toggleNavSubtitle = useSelector(
    (state) => state.header.toogleNavbarSubtitle
  );
  const handleSubtitle = () => {
    dispatch(toogleNavbarSubtitle());
    dispatch(toogleNavbar());
  };
  return (
    <>
      {imgSticky ? (
        <div className="header-sticky">
          <picture className="header-sticky_img">
            <source
              srcSet={require("../../assets/webp/illustration-jardin-taupe-small.webp")}
              media="(max-width: 720px)"
              type="image/webp"
            />
            <source
              srcSet={require("../../assets/webp/illustration-jardin-taupe-middle.webp")}
              media="(max-width: 1024px)"
              type="image/webp"
            />
            <source
              srcSet={require("../../assets/webp/illustration-jardin-taupe-large.webp")}
              media="(max-width: 2000px)"
              type="image/webp"
            />
            <img
              src={require("../../assets/svg/illustration-jardin-taupe.svg?url")}
              alt="Illustration d'une taupe dans un jardin avec une tondeuse"
              title="illustration Une taupe chez vous"
            />
          </picture>
          <div
            className="header-sticky-content"
            onClick={() => dispatch(imgStickyFalse())}
          >
            <a href="#bienvenue">
              <i className="icon-angle-90" />
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
      <header className="header" id="bienvenue">
        {toggleNav ? (
          <div className="header-navbar-toggle">
            <div className="header-logo">
              <NavLink
                to="/"
                onClick={() => {
                  dispatch(toogleNavbar());
                  dispatch(imgStickyFalse());
                }}
              >
                <picture>
                  <source
                    srcSet={require("../../assets/webp/logo-une-taupe-chez-vous.webp")}
                    type="image/webp"
                  />
                  <img
                    src={require("../../assets/svg/logo-une-taupe-chez-vous.svg?url")}
                    alt="Logo Une Taupe Chez Vous"
                    title="Logo Une taupe chez vous"
                  />
                </picture>
              </NavLink>
            </div>
            <div className="header-button_close">
              <button
                onClick={() => {
                  dispatch(toogleNavbar());
                  dispatch(imgStickyFalse());
                }}
              >
                <i className="icon-navbar" />
              </button>
            </div>
          </div>
        ) : (
          <nav className="navbar">
            <div className="header-navbar-toggle">
              <div className="header-logo">
                <NavLink to="/">
                  <picture>
                    <source
                      srcSet={require("../../assets/webp/logo-une-taupe-chez-vous.webp")}
                      type="image/webp"
                    />
                    <img
                      src={require("../../assets/svg/logo-une-taupe-chez-vous.svg?url")}
                      alt="Logo Une Taupe Chez Vous"
                      title="Logo Une taupe chez vous"
                    />
                  </picture>
                </NavLink>
              </div>
              <div className="header-button_close">
                <button onClick={() => dispatch(toogleNavbar())}>
                  <i className="icon-x" />
                </button>
              </div>
            </div>
            <ul className="header-navbar">
              <NavLink to="/" onClick={() => dispatch(toogleNavbar())}>
                <li className="header-navbar-item">Accueil</li>
              </NavLink>
              <li>
                <div
                  className="header-navbar-item_subtitle"
                  onClick={() => dispatch(toogleNavbarSubtitle())}
                >
                  Services
                  {toggleNavSubtitle ? (
                    <i className="icon-angle" />
                  ) : (
                    <i className="icon-angle-90" />
                  )}
                </div>
                {toggleNavSubtitle ? (
                  ""
                ) : (
                  <ul className="header-navbar-subitem">
                    <NavLink
                      to="/services/nuisibles/taupe"
                      onClick={handleSubtitle}
                    >
                      <li className="header-navbar-subtitle-item">Taupe</li>
                    </NavLink>
                    <NavLink
                      to="/services/nuisibles/fouine"
                      onClick={handleSubtitle}
                    >
                      <li className="header-navbar-subtitle-item">Fouine</li>
                    </NavLink>
                    <NavLink
                      to="/services/nuisibles/Ragondin"
                      onClick={handleSubtitle}
                    >
                      <li className="header-navbar-subtitle-item">Ragondin</li>
                    </NavLink>
                  </ul>
                )}
              </li>
              <NavLink to="/contact" onClick={() => dispatch(toogleNavbar())}>
                <li className="header-navbar-item">Contact</li>
              </NavLink>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

// == Export
export default Header;
