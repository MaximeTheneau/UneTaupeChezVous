// == Import
import TaupeSvg from "../../../../../assets/svg/taupe.svg";

// == Composant
function Taupe() {
  return (
    <>
      <h1>Taupe</h1>
      <div className="service-card">
        <div className="service-card_img">
          <TaupeSvg />
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
export default Taupe;