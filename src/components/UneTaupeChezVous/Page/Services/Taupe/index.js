// == Import
import TaupeSvg from "../../../../../assets/svg/taupe.svg?url";
import illustrationEnvironment from "../../../../../assets/svg/illustration-environment.svg?url";

// == Composant
function Taupe() {
  return (
    <>
      <h1>Taupe</h1>
      <div className="service-card">
        <div className="service-card_img">
          <img src={TaupeSvg} alt="illustration taupe" />
        </div>
        <div className="service-card_content">
          <p>
            Les <em>taupes</em> jouent un rôle dans l'écosystème.
            <br />
            L'objectif est de limiter la prolifération des taupes, dans votre
            jardin, terrain de foot, piste d'aérodrome, golf, etc...
            <img
              src={illustrationEnvironment}
              alt="illustration environnement"
              className="service-card_content_environment"
            />
          </p>
          <p>
            Nous utilisons des méthodes naturelles de piégeage, sans produits
            chimiques ou nocifs pour l'environnement.
          </p>
        </div>
      </div>
    </>
  );
}

// == Export
export default Taupe;