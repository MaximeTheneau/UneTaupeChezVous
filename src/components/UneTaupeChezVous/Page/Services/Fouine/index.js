// == Import
import FouineSvg from "../../../../../assets/svg/fouine.svg?url";

// == Composant
function Fouine() {
  return (
    <>
      <h1>Fouine </h1>
      <div className="service-card">
        <div className="service-card_img">
          <img src={FouineSvg} alt="illustration fouine" />
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
export default Fouine;