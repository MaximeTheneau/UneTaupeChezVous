// == Import
import { Link } from "react-router-dom";
import Illustration from "../../../../assets/svg/illustraion-taupe-jardin.svg";
import "./styles.css";
import homeData from "../../../../Data/home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../../../../action/card";
import Environment from "../../../../assets/svg/icon-environment.svg";
import Certified from "../../../../assets/svg/icon-certified.svg";
import Trap from "../../../../assets/svg/icon-trap.svg";
import MapSvg from "../../../../assets/svg/carte-ile-de-france.svg";
import Taupe from "../../../../assets/svg/taupe.svg";
import Fouine from "../../../../assets/svg/fouine.svg";
import Ragondin from "../../../../assets/svg/ragondin.svg";
import Logo from "../../../../assets/svg/logo-une-taupe-chez-vous.svg";


// == Composant
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCard(homeData));
  }, [dispatch]);
  const homeList = useSelector((state) => state.card.home);
  // console.log(imgcard);
  // const homeListArray = Array(homeList);

  return (
    <>
      <Illustration />
      <Logo alt="logo une Taupe Chez Vous" />
      <h1 className="home-title">Une Taupe Chez vous</h1>
      <h2 className="home-subtitle">Artisans Taupiers piégeurs</h2>
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
          <div className="home-card">
            <Link to="/services/nuisibles/taupe">
              <div className="home-list-services_list_img">
                <Taupe />
              </div>
              <h3 className="home-list-services_list_title">Taupes</h3>
            </Link>
          </div>
          {/*--home-service--*/}
          <div className="home-card">
            <Link to="/services/nuisibles/fouine">
              <div className="home-list-services_list_img">
                <Fouine />
              </div>
              <h3 className="home-list-services_list_title">Fouines</h3>
            </Link>
          </div>
          {/*--home-service--*/}
          <div className="home-card">
            <Link to="/services/nuisibles/ragondin">
              <div className="home-list-services_list_img">
                <Ragondin />
              </div>
              <h3 className="home-list-services_list_title">Ragondins</h3>
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
