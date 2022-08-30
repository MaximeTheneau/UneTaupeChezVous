// == Import
import RagondinSvg from "../../../../../assets/svg/ragondin.svg?url";
import RagondinWebp from "../../../../../assets/webp/ragondin.webp";


// == Composant
function Ragondin() {
  return (
    <>
      <h1>Ragondin </h1>
      <div className="service-card">
        <div className="service-card_img">
        <picture>
            <source srcSet={RagondinWebp} type="image/webp" />
            <img src={RagondinSvg} alt="illustration ragondin" />
          </picture>
        </div>
        <div className="service-card_content">
          <p>Les taupes jouent un rôle dans l'écosystème.</p>
          <p>
            L'objectif est de limiter la prolifération des taupes, fouines ou
            autres animaux nuisibles dans les Yvelines grâce à des méthodes
            naturelles de piégeage, sans produits chimiques ou nocifs pour
            l'environnement.
          </p>
        </div>
      </div>
    </>
  );
}

// == Export
export default Ragondin;