// == Import
import { MetaTags } from "react-meta-tags";
import { Link } from "react-router-dom";
import "./styles.css";

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
                <source
                  srcSet={require("../../../../assets/webp/taupe.webp")}
                  type="image/webp"
                />
                <img
                  src={require("../../../../assets/svg/taupe.svg?url")}
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
                <source
                  srcSet={require("../../../../assets/webp/fouine.webp")}
                  type="image/webp"
                />
                <img
                  src={require("../../../../assets/svg/fouine.svg?url")}
                  alt="illustration fouine"
                />
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
                <source
                  srcSet={require("../../../../assets/webp/ragondin.webp")}
                  type="image/webp"
                />
                <img
                  src={require("../../../../assets/svg/ragondin.svg?url")}
                  alt="illustration ragondin"
                />
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

