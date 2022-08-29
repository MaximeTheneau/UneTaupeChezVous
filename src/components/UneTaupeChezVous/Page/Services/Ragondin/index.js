// == Import
import RagondinSvg from "../../../../../assets/svg/ragondin.svg?url";

// == Composant
function Ragondin() {
  return (
    <>
      <h1>Ragondin </h1>
      <div className="service-card">
        <div className="service-card_img">
          <img src={RagondinSvg} alt="illustration ragondin" />
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