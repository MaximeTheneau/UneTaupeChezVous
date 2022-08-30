// == Import
import "./styles.css";
import { Link } from "react-router-dom";
import illustration from "../../../../assets/svg/illustration-jardin-taupe.svg?url";
import Environment from "../../../../assets/svg/illustration-environment.svg?url";
import Certified from "../../../../assets/svg/illustration-certified.svg?url";
import Trap from "../../../../assets/svg/illustration-trap.svg?url";
import MapSvg from "../../../../assets/svg/carte-ile-de-france.svg?url";
import Taupe from "../../../../assets/svg/taupe.svg?url";
import TaupeWebp from "../../../../assets/svg/taupe.webp";

import Fouine from "../../../../assets/svg/fouine.svg?url";
import Ragondin from "../../../../assets/svg/ragondin.svg?url";
import Logo from "../../../../assets/svg/logo-une-taupe-chez-vous.svg?url";
import MetaTags from "react-meta-tags";
// == Composant
function Home() {

  return (
    <>
      <MetaTags>
        <title>Une Taupe Chez Vous</title>
        <meta
          name="description"
          content="Une Taupe Chez Vous Artisant Maître Taupiers depuis presque 30 ans. Intervient en yvelynes (78), pour les nuisibles comme les taupes, ragondin, fouines, etc..."
        />
      </MetaTags>
      <picture>
        <source srcSet={TaupeWebp} type="image/webp" />
        <img
          src={Logo}
          alt="Logo Une Taupe Chez Vous"
          className="home-logo"
          title="Logo Une taupe chez vous"
        />
      </picture>
      <h1 className="home-title">Une Taupe Chez vous</h1>
      <h2 className="home-subtitle">Artisans Maitre Taupiers piégeurs</h2>
      <p className="home-paragrah">
        nous mettons à vote service plus de 25 ans d'expérience dans la
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
            <img src={Environment} alt="illustration environnement" />
          </div>
          <div className="home-card_description">
            <h3>Sans danger pour l'environnement</h3>
          </div>
        </div>
        {/*--home-card--*/}
        <div className="home-card">
          <div className="home-card_img">
            <img src={Certified} alt="illustration certified" />
          </div>
          <div className="home-card_description">
            <h3>Piégeur Agréé</h3>
          </div>
        </div>
        {/*--home-card--*/}
        <div className="home-card">
          <div className="home-card_img">
            <img src={Trap} alt="illustration trap" />
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
                <img src={Taupe} alt="illustration taupe" />
              </div>
              <h3 className="home-card-service_title">Taupes</h3>
            </Link>
          </div>
          {/*--home-service--*/}
          <div className="home-card-service">
            <Link to="/services/nuisibles/fouine">
              <div className="home-list-services_list_img">
                <img src={Fouine} alt="illustration fouine" />
              </div>
              <h3 className="home-card-service_title">Fouines</h3>
            </Link>
          </div>
          {/*--home-service--*/}
          <div className="home-card-service">
            <Link to="/services/nuisibles/ragondin">
              <div className="home-services_list_img">
                <img src={Ragondin} alt="illustration ragondin" />
              </div>
              <h3 className="home-card-service_title">Ragondins</h3>
          </Link>
          </div>
        </div>
      </div>
      {/*--home-Map--*/}
      <h3>Interventions en Yvelynes (78)</h3>
      <div className="home-map">
        <div className="home-map_description">
          <p>
            Pour tous demande de devis ou demande de renseignement
            <Link to="/contact"> contactez-nous</Link>
          </p>
          <p>
            <i className="icon-phone" />
            <a href="tel:+1-555-555-1212">555-555-1212</a>
          </p>
        </div>
        <div className="home-map_img">
          <img src={MapSvg} alt="illustration dessins carte ile de france" />
        </div>
      </div>
    </>
  );
}

// == Export
export default Home;
