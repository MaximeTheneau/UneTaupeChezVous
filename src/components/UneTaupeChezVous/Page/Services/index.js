// == Import
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import "./styles.css";
import Taupe from "../../../../assets/svg/taupe.svg?url";
import Fouine from "../../../../assets/svg/fouine.svg?url";
import Ragondin from "../../../../assets/svg/ragondin.svg?url";
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
    </>
  );
}

// == Export
export default Services;

