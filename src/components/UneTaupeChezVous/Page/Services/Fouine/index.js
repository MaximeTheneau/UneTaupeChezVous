// == Import
import FouineWebp from "../../../../../assets/webp/fouine.webp";
import FouineSvg from "../../../../../assets/svg/fouine.svg";

// == Composant
function Fouine() {
  return (
    <div className="service-card">
      <div className="service-card_img">
        <picture>
          <source
            srcSet={FouineWebp}
            type="image/svg"
            />
          <img
            src={FouineSvg}
            alt="illustration fouine"
            />
        </picture>
      </div>
      <div className="service-card_content">
        <h1>
          La fouine aime les conduits
          électriques, gaines dans les voitures.
        </h1>
        <p>
          La fouine est un animal de taille moyenne, elle mesure entre 40 et
          60 cm. Elle est reconnaissable à sa tache blanche couvrant la gorge et le
          haut des pattes.
          <br />
          Carnivore, elle mange des rongeurs, des oiseaux, des œufs, aussi
          des fruits, des déchets ménagers, et elle aime les conduits
          électriques, gaines dans les voitures.
          <br />
          Elle vit près de l'homme, dans les greniers, granges, principalement la nuit,
          pour rechercher sa nourriture, c'est pourquoi on l'entend dans les greniers la nuit.
          <br />
          Elle a une espérance de vie de 3 à 10 ans et a une portée en mars avril,
          composée de 2 à 5 petits.
        </p>
        <h2>Utile ou nuisible ?</h2>
        <p>
          La fouine est un animal utile, elle est un prédateur chassant de
          nombreux rongeurs.
        </p>
        <h2>Comment se débarrasser d'une fouine dans le grenier ?</h2>
        <p>
          <em>Une Taupe Chez Vous</em> vous propose des solutions naturelles et sans
          danger pour l'environnement pour lutter contre la fouine avec des
          pièges sans danger pour vos animaux de compagnie, sans produits
          chimiques chimiques ou nocifs pour l'environnement.
          <br />
          En prévention, il faut colmater tous les trous d'une toiture, porte
          d'entrée pour s'installer dans le grenier, c'est très une bonne grimpeuse.
          Elle va être dérangée par de la lumière ou une radio.
        </p>
      </div>
    </div>
  );
}

// == Export
export default Fouine;
