// == Import
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import "./styles.css";
import Taupe from "../../../../assets/svg/taupe.svg";
import Fouine from "../../../../assets/svg/fouine.svg";
import Ragondin from "../../../../assets/svg/ragondin.svg";
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
    </>
  );
}

// == Export
export default Services;

