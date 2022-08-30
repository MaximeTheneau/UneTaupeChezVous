// == Import
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import "./styles.css";
import Taupe from "../../../../assets/svg/taupe.svg?url";
import TaupeWebp from "../../../../assets/webp/taupe.webp";
import Fouine from "../../../../assets/svg/fouine.svg?url";
import FouineWebp from "../../../../assets/webp/fouine.webp";
import Ragondin from "../../../../assets/svg/ragondin.svg?url";
import RagondinWebp from "../../../../assets/webp/ragondin.webp";
// == Composant
function Services() {
  return (
    <>
      <MetaTags>
        <title>Services </title>
        <meta
          name="description"
          content="Une Taupe Chez Vous, intervient pour vous aider à lutter contre les nuisibles comme les taupes, fouines et ragondins en yvelines (78), essones(91), Paris (75)."
        />
      </MetaTags>
      <h1>Services</h1>
      <div className="home-cards">
        {/*--home-service--*/}
        <div className="home-card-service">
          <Link to="/services/nuisibles/taupe">
            <div className="home-list-services_list_img">
              <picture>
                <source srcSet={TaupeWebp} type="image/webp" />
                <img
                  src={Taupe}
                  alt="illustration de taupe"
                  title="illustration de taupe"
                />
              </picture>
            </div>
            <h3 className="home-card-service_title">Taupes</h3>
          </Link>
        </div>
        {/*--home-service--*/}
        <div className="home-card-service">
          <Link to="/services/nuisibles/fouine">
            <div className="home-list-services_list_img">
              <picture>
                  <source srcSet={FouineWebp} type="image/webp" />
                  <img src={Fouine} alt="illustration fouine" />
                </picture>
            </div>
            <h3 className="home-card-service_title">Fouines</h3>
          </Link>
        </div>
        {/*--home-service--*/}
        <div className="home-card-service">
          <Link to="/services/nuisibles/ragondin">
            <div className="home-services_list_img">
              <picture>
                <source srcSet={RagondinWebp} type="image/webp" />
                <img src={Ragondin} alt="illustration ragondin" />
              </picture>
            </div>
            <h3 className="home-card-service_title">Ragondins</h3>
        </Link>
        </div>
      </div>
    </>
  );
}

// == Export
export default Services;

