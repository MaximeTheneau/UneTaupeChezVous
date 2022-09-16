// == Import
import RagondinSvg from "../../../../../assets/svg/ragondin.svg";
import RagondinWebp from "../../../../../assets/webp/ragondin.webp";
// == Composant
function Ragondin() {
  return (
    <div className="service-card">
      <div className="service-card_img">
        <picture>
          <source
            srcSet={RagondinWebp}
            type="image/webp"
            />
          <img
            src={RagondinSvg}
            alt="illustration ragondin"
            />
        </picture>
      </div>
      <div className="service-card_content">
        <h1>Le ragondin détruit les berges et l'écosystème</h1>
        <p>
          D'une taille de 40 à 60 cm, il est reconnaissable à ses
          quatre grandes incisives rouge-orange, il peut peser jusqu'à 9
          kilos et vit en moyenne 10 ans.
          <br />
          La femelle peut avoir 2 à 3 portées par an, de 5 à 7 petits.
          Il sort principalement au crépuscule, et la nuit.
          <br />
          Herbivore, semi aquatique, il mange des céréales, gland, plantes aquatiques,
          mais aussi des moules d'eau douce et des écrevisses.
        </p>
        <h2>Inscrit sur la liste des animaux nuisibles</h2>
        <p>
          Classé comme animal nuisible, le ragondin est un prédateur de la
          faune aquatique, il est responsable de la destruction des berges et
          des rives, il est également responsable de la destruction des
          cultures.
          <br />
          Il détruit les berges, en construisant des terriers de 6 à 7 mètres de long,
          détruit l'écosystème en mangeant les plantes aquatiques, et en détruisant les
          nids d'oiseaux.
          <br />
          Le ragondin est porteur de la leptospirose (douve du foie), maladie 
          transmissible à l’homme.
        </p>
        <h2>Comment lutter contre le ragondin ?</h2>
        <p>
          <em>Une Taupes Chez Vous</em> vous propose des solutions naturelles et sans
          danger pour l'environnement pour lutter contre le ragondin avec des
          pièges sans danger pour vos animaux de compagnie, sans produits
          chimiques chimiques ou nocifs pour l'environnement.
        </p>
      </div>
    </div>
  );
}

// == Export
export default Ragondin;
