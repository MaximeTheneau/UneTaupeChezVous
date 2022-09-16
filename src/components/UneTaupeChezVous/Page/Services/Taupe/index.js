// == Import
import TaupeSvg from "../../../../../assets/svg/taupe.svg";
import TaupeWebp from "../../../../../assets/webp/taupe.webp";

// == Composant
function Taupe() {
  return (
    <div className="service-card">
      <div className="service-card_img">
        <picture>
          <source
            srcSet={TaupeWebp}
            type="image/webp"
            />
          <img
            src={TaupeSvg}
            alt="illustration de taupe"
            title="illustration de taupe"
            />
        </picture>
      </div>
      <div className="service-card_content">
        <h1>La taupe a un odorat et l'ouïe très développés</h1>
        <p>
          Les taupes jouent un rôle dans l'écosystème.
          <br />
          La taupe est insectivore, pèse de 60 à 130 g. Elle a un
          odorat et l'ouïe très développés, ce qui lui permet de repérer
          sous terre les insectes et verres. Elle n'est pas hémophile comme on le dit souvent.
          <br />
          Elle vit seule, ne supporte ses congénères qu'au moment de la reproduction, qui a
          lieu une fois par an. Les portées se composent de 3 à 6 petits.
          <br />
          Elle se déplace sous terre, dans les galeries qu'elle construit avec ses 2 pattes avant.
          Elle parcourt ses galeries toutes les 4 heures environ à la recherche de sa nourriture.
          Son espérance de vie est de 5 ans.
        </p>
        <h2>Comment se débarrasser des taupes dans son jardin?</h2>
        <p>
          <em>Une Taupe Chez Vous</em> vous propose des solutions naturelles et sans
          danger pour l'environnement pour lutter contre les taupes avec des
          pièges sans danger pour vos animaux de compagnie, sans produits
          chimiques chimiques ou nocifs pour l'environnement.
          <br />
          L'objectif est de limiter la prolifération des taupes, dans votre
          jardin, terrain de foot, piste d'aérodrome, golf, etc...
          <br />
          Nous utilisons des méthodes naturelles de piégeage, sans produits
          chimiques ou nocifs pour l'environnement.
        </p>
      </div>
    </div>
  );
}

// == Export
export default Taupe;
