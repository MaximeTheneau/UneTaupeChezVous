// == Import
import "./styles.css";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { useEffect } from "react";
import { imgSticky, imgStickyFalse } from "../../../../action/header";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../Spinner";
// == Composant
function Home() {
  const dispatch = useDispatch();
  const spinnerLoad = useSelector((state) => state.header.spinner);
  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(imgSticky());
    } else {
      dispatch(imgStickyFalse());
    }
  }, []);



  return (
    <div>
      {spinnerLoad ? (<Spinner /> ) : (
        <>
        <MetaTags>
          <title>Une Taupe Chez Vous</title>
          <meta
            name="description"
            content="Une Taupe Chez Vous Artisant Maître Taupiers depuis presque 30 ans. Intervient en yvelynes (78), pour les nuisibles comme les taupes, ragondin, fouines, etc..."
          />
        </MetaTags>
        <picture>
          <source
            srcSet={`${require("../../../../assets/webp/logo-une-taupe-chez-vous.webp")} 1x`}
            type="image/webp"
          />
          <img
            src={require("../../../../assets/svg/logo-une-taupe-chez-vous.svg?url")}
            alt="Logo Une Taupe Chez Vous"
            className="logo"
            width="100%"
            height="100%"
          />
        </picture>
        <h1 className="home-title">Une Taupe Chez vous</h1>
        <h2 className="home-subtitle">Artisan Maitre Taupier piégeur</h2>
        <p className="home-paragrah">
          Nous mettons à vrote service plus de 25 ans d'expérience dans la
          destruction des <Link to="/services/nuisibles/taupe">taupes</Link>,
          <Link to="/services/nuisibles/fouines"> fouines</Link>,
          <Link to="/services/nuisibles/ragondin"> ragondins</Link> et autres
          nuisibles qui envahissent votre jardin.
        </p>
        {/*--home-list--*/}
        <div className="home-cards">
          {/*--home-card--*/}
          <div className="home-card">
            <div className="home-card_img">
              <picture>
                <source
                  srcSet={require("../../../../assets/webp/illustration-environment.webp")}
                  type="image/webp"
                />
                <img
                  src={require("../../../../assets/svg/illustration-environment.svg?url")}
                  alt="Illustration Environment"
                  title="illustration Environment"
                  width="100%"
                  height="100%"
                />
              </picture>
            </div>
            <div className="home-card_description">
              <h3>Sans danger pour l'environnement</h3>
            </div>
          </div>
          {/*--home-card--*/}
          <div className="home-card">
            <div className="home-card_img">
              <picture>
                <source
                  srcSet={require("../../../../assets/webp/illustration-certified.webp")}
                  type="image/webp"
                />
                <img
                  src={require("../../../../assets/svg/illustration-certified.svg?url")}
                  alt="illustration certified"
                  title="illustration certified"
                  width="100%"
                  height="100%"
                />
              </picture>
            </div>
            <div className="home-card_description">
              <h3>Piégeur Agréé</h3>
            </div>
          </div>
          {/*--home-card--*/}
          <div className="home-card">
            <div className="home-card_img">
              <picture>
                <source
                  srcSet={require("../../../../assets/webp/illustration-trap.webp")}
                  type="image/webp"
                />
                <img
                  src={require("../../../../assets/svg/illustration-trap.svg?url")}
                  alt="illustration trap"
                  title="illustraion trap"
                  width="100%"
                  height="100%"
                />
              </picture>
            </div>
            <div className="home-card_description">
              <h3>Piéges sans danger pour les animaux de compagnie</h3>
            </div>
          </div>
        </div>
        {/*--home-list-services--*/}
        <div className="home-list-services">
          <h2 className="home-list-services_title">Nos services</h2>
          <div className="home-cards">
            {/*--home-service--*/}
            <div className="home-card-service">
              <Link to="/services/nuisibles/taupe">
                <div className="home-list-services_list_img">
                  <picture>
                    <source
                      srcSet={`${require("../../../../assets/webp/taupe.webp")} 1x`}

                      type="image/webp"
                    />
                    <img
                      src={require("../../../../assets/svg/taupe.svg?url")}
                      alt="illustration de taupe"
                      title="illustration de taupe"
                      width="100%"
                      height="100%"
                    />
                  </picture>
                </div>
                <h3 className="home-card-service_title">Taupe</h3>
              </Link>
            </div>
            {/*--home-service--*/}
            <div className="home-card-service">
              <Link to="/services/nuisibles/fouine">
                <div className="home-list-services_list_img">
                  <picture>
                    <source
                      srcSet={require("../../../../assets/webp/fouine.webp")}
                      type="image/webp"
                    />
                    <img
                      src={require("../../../../assets/svg/fouine.svg?url")}
                      alt="illustration fouine"
                      width="100%"
                      height="100%"
                    />
                  </picture>
                </div>
                <h3 className="home-card-service_title">Fouine</h3>
              </Link>
            </div>
            {/*--home-service--*/}
            <div className="home-card-service">
              <Link to="/services/nuisibles/ragondin">
                <div className="home-services_list_img">
                  <picture>
                    <source srcSet={require("../../../../assets/webp/ragondin.webp")} type="image/webp" />
                    <img src={require("../../../../assets/svg/ragondin.svg?url")} 
                      alt="illustration ragondin" width="100%"
                  height="100%" />
                  </picture>
                </div>
                <h3 className="home-card-service_title">Ragondin</h3>
            </Link>
            </div>
          </div>
        </div>
        {/*--home-Map--*/}
        <h3>Interventions en Yvelynes (78)</h3>
        <div className="home-map">
          <div className="home-map_description">
            <div>
              Pour toute demande de devis ou demande de renseignement
              <Link to="/contact"> contactez-nous</Link>
            </div>
            <div>
              <i className="icon-phone" />
              <a href="tel:+33232264958">02 32 26 49 58</a>
            </div>
          </div>
          <div className="home-map_img">
            <picture>
              <source srcSet={require("../../../../assets/webp/carte-ile-de-france.webp")} type="image/webp" />
              <img src={require("../../../../assets/svg/carte-ile-de-france.svg?url")} alt="map" width="100%" height="100%" alt="illustration dessins carte ile de france"
              title="illustration dessins carte ile de france" />
            </picture>
          </div>
        </div>
        </>
        )}
    </div>
  );
}

// == Export
export default Home;
