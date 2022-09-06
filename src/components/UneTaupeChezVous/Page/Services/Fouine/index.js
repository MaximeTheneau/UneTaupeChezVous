// == Import
import FouineSvg from "../../../../../assets/svg/fouine.svg?url";
import FouineWebp from "../../../../../assets/webp/fouine.webp";


// == Composant
function Fouine() {
  return (
    <>
      <h1>Fouine</h1>
      <div className="service-card">
        <div className="service-card_img">
          <picture>
            <source srcSet={FouineWebp} type="image/svg" />
            <img src={FouineSvg} alt="illustration fouine" />
          </picture>
        </div>
        <div className="service-card_content">
          <p>
            La fouine est un animal de taille moyenne, elle mesure entre 40 et
            60 cm.
            <br />
            Elle est reconnaissable à sa tache blanche couvrant la gorge et le
            haut des pattes.
            <br />
          </p>
          <h2>Utile ou nuisible ?</h2>
          <p>
            La fouine est un animal utile, elle est un prédateur chassant les de
            nombreux rongeurs.
          </p>
          <h2>Comment se débarrasser d'une fouine dans le grenier ?</h2>
          <p>
            Une Taupes chez vous vous propose des solutions naturelles et sans
            danger pour l'environnement pour lutter contre la fouine avec des
            pièges sans danger pour vos animaux de compagnie, sans produits
            chimiques chimiques ou nocifs pour l'environnement.
            <br />
            Nous vous proposons également des solutions de prévention pour
            éviter que les fouines ne reviennent sur votre grenier.
          </p>
        </div>
      </div>
    </>
  );
}

// == Export
export default Fouine;
