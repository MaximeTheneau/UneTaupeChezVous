// == Import
import TaupeSvg from "../../../../../assets/svg/taupe.svg?url";
import TaupeWebp from "../../../../../assets/webp/taupe.webp";

// == Composant
function Taupe() {
  return (
    <>
      <h1>Taupe</h1>
      <div className="service-card">
        <div className="service-card_img">
          <picture>
            <source srcSet={TaupeWebp} type="image/webp" />
            <img
              src={TaupeSvg}
              alt="illustration de taupe"
              title="illustration de taupe"
            />
          </picture>
        </div>
        <div className="service-card_content">
          <p>
            Les <em>taupes</em> jouent un rôle dans l'écosystème.
            <br />
            L'objectif est de limiter la prolifération des taupes, dans votre
            jardin, terrain de foot, piste d'aérodrome, golf, etc...
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