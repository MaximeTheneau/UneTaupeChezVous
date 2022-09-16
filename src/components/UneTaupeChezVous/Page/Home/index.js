// == Import
import "./styles.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { imgSticky, imgStickyFalse } from "../../../../action/header";

// == Import Img
import Environment from "../../../../assets/svg/illustration-environment.svg";
import EnvironmentWebp from "../../../../assets/webp/illustration-environment.webp";
import Certified from "../../../../assets/svg/illustration-certified.svg";
import CertifiedWebp from "../../../../assets/webp/illustration-certified.webp";
import Trap from "../../../../assets/svg/illustration-trap.svg";
import TrapWebp from "../../../../assets/webp/illustration-trap.webp";
import Map from "../../../../assets/svg/carte-ile-de-france.svg";
import MapWebp from "../../../../assets/webp/carte-ile-de-france.webp";
import TaupeWebp from "../../../../assets/webp/taupe.webp";
import Taupe from "../../../../assets/svg/taupe.svg";
import Fouine from "../../../../assets/svg/fouine.svg";
import FouineWebp from "../../../../assets/webp/fouine.webp";
import Ragondin from "../../../../assets/svg/ragondin.svg";
import RagondinWebp from "../../../../assets/webp/ragondin.webp";
import Logo from "../../../../assets/svg/logo-une-taupe-chez-vous.svg";
import LogoWebp from "../../../../assets/webp/logo-une-taupe-chez-vous.webp";

// == Composant
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const windowLocation = window.location.pathname;
    if (windowLocation === "/") {
      dispatch(imgSticky());
    } else {
      dispatch(imgStickyFalse());
    }
  }, []);

  return (
    <div>
      <picture>
        <source
          srcSet={LogoWebp}
          type="image/webp"
        />
        <img
          src={Logo}
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
      {/* --home-list-- */}
      <div className="home-cards">
        {/* --home-card-- */}
        <div className="home-card">
          <div className="home-card_img">
            <picture>
              <source
                srcSet={EnvironmentWebp}
                type="image/webp"
              />
              <img
                src={Environment}
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
        {/* --home-card-- */}
        <div className="home-card">
          <div className="home-card_img">
            <picture>
              <source
                srcSet={CertifiedWebp}
                type="image/webp"
              />
              <img
                src={Certified}
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
        {/* --home-card-- */}
        <div className="home-card">
          <div className="home-card_img">
            <picture>
              <source
                srcSet={TrapWebp}
                type="image/webp"
              />
              <img
                src={Trap}
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
      {/* --home-list-services-- */}
      <div className="home-list-services">
        <h2 className="home-list-services_title">Nos services</h2>
        <div className="home-cards">
          {/* --home-service-- */}
          <div className="home-card-service">
            <Link to="/services/nuisibles/taupe">
              <div className="home-list-services_list_img">
                <picture>
                  <source
                    srcSet={TaupeWebp}

                    type="image/webp"
                  />
                  <img
                    src={Taupe}
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
          {/* --home-service-- */}
          <div className="home-card-service">
            <Link to="/services/nuisibles/fouine">
              <div className="home-list-services_list_img">
                <picture>
                  <source
                    srcSet={FouineWebp}
                    type="image/webp"
                  />
                  <img
                    src={Fouine}
                    alt="illustration fouine"
                    width="100%"
                    height="100%"
                  />
                </picture>
              </div>
              <h3 className="home-card-service_title">Fouine</h3>
            </Link>
          </div>
          {/* --home-service-- */}
          <div className="home-card-service">
            <Link to="/services/nuisibles/ragondin">
              <div className="home-services_list_img">
                <picture>
                  <source srcSet={RagondinWebp} type="image/webp" />
                  <img
                    src={Ragondin}
                    alt="illustration ragondin"
                    width="100%"
                    height="100%" />
                </picture>
              </div>
              <h3 className="home-card-service_title">Ragondin</h3>
            </Link>
          </div>
        </div>
      </div>
      {/* -home-Map-- */}
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
            <source srcSet={MapWebp} type="image/webp" />
            <img
              src={Map}
              width="100%"
              height="100%"
              alt="illustration dessins carte ile de france"
              title="illustration dessins carte ile de france"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

// == Export
export default Home;
