// == Import
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { imgStickyFalse, toogleNavbar, toogleNavbarSubtitle } from "../../action/header";
import Logo from "../../assets/svg/logo-une-taupe-chez-vous.svg?url";
import LogoWebp from "../../assets/webp/logo-une-taupe-chez-vous.webp";
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
  useEffect(() => {
    console.log(window.scrollY);
}, []);
  return (
    <>
      {imgSticky ? (
        <picture>
          <source
            srcSet={require("../../assets/webp/illustration-jardin-taupe.webp")}
            type="image/webp"
          />
          <img
            src={require("../../assets/svg/illustration-jardin-taupe.svg?url")}
            alt="Illustration d'une taupe dans un jardin avec une tondeuse"
            title="illustration Une taupe chez vous" />
        </picture>
      ) : (
        ""
      )}
      <header  className="header">
        {toggleNav ? (
          <div className="header-navbar-toggle">
            <div className="header-logo">
              <NavLink to="/">
                <picture>
                  <source srcSet={LogoWebp} type="image/webp" />
                  <img
                    src={Logo}
                    alt="Logo Une Taupe Chez Vous"
                    title="Logo Une taupe chez vous"
                  />
                </picture>
              </NavLink>
            </div>
            <div className="header-button_close">
              <button
                className=""
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
                    <source srcSet={LogoWebp} type="image/webp" />
                    <img
                      src={Logo}
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
                    <i className="icon-angle rotate-90" />
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
