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
              imagesizes="(max-width: 100%) 100%"
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
          <h2>Comment se débarrasser des taupes dans sont jardins?</h2>
          <p>
            Pour se debarrasser des taupes, il faut d'abord comprendre le
            comportement de la taupe.
            <br />
            La taupe est un animal nocturne, elle sort la nuit pour creuser des
            galeries et des terriers.
            <br />
            Une Taupe chez vous vous propose des solutions naturelles et sans
            danger pour l'environnement pour lutter contre les taupes avec des
            pièges sans danger pour vos animaux de compagnie, sans produits
            chimiques chimiques ou nocifs pour l'environnement.
          </p>
        </div>
      </div>
    </>
  );
}

// == Export
export default Taupe;