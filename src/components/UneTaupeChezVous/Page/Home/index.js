// == Import
import "./styles.css";
import { Link } from "react-router-dom";
import Illustration from "../../../../assets/svg/illustration-jardin-taupe.svg";
import Environment from "../../../../assets/svg/illustration-environment.svg";
import Certified from "../../../../assets/svg/illustration-certified.svg";
import Trap from "../../../../assets/svg/illustration-trap.svg";
import MapSvg from "../../../../assets/svg/carte-ile-de-france.svg";
import Taupe from "../../../../assets/svg/taupe.svg";
import Fouine from "../../../../assets/svg/fouine.svg";
import Ragondin from "../../../../assets/svg/ragondin.svg";
import Logo from "../../../../assets/svg/logo-une-taupe-chez-vous.svg";
import { MetaTags } from "react-meta-tags";

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
      <Illustration />
      <Logo alt="logo une Taupe Chez Vous" className="home-logo"/>
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
            <Environment />
          </div>
          <div className="home-card_description">
            <h3>Sans danger pour l'environnement</h3>
          </div>
        </div>
        {/*--home-card--*/}
        <div className="home-card">
          <div className="home-card_img">
            <Certified />
          </div>
          <div className="home-card_description">
            <h3>Piégeur Agréé</h3>
          </div>
        </div>
        {/*--home-card--*/}
        <div className="home-card">
          <div className="home-card_img">
            <Trap />
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
                <Taupe />
              </div>
              <h3 className="home-card-service_title">Taupes</h3>
            </Link>
          </div>
          {/*--home-service--*/}
          <div className="home-card-service">
            <Link to="/services/nuisibles/fouine">
              <div className="home-list-services_list_img">
                <Fouine />
              </div>
              <h3 className="home-card-service_title">Fouines</h3>
            </Link>
          </div>
          {/*--home-service--*/}
          <div className="home-card-service">
            <Link to="/services/nuisibles/ragondin">
              <div className="home-services_list_img">
                <Ragondin />
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
        </div>
        <div className="home-map_img">
          <MapSvg />
        </div>
      </div>
    </>
  );
}

// == Export
export default Home;
