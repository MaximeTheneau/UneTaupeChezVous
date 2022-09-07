// == Import

// == Composant
function Ragondin() {
  return (
    <>
      <h1>Ragondin </h1>
      <div className="service-card">
        <div className="service-card_img">
          <picture>
            <source
              srcSet={require("../../../../../assets/svg/ragondin.svg?url")}
              type="image/webp"
            />
            <img
              src={require("../../../../../assets/svg/ragondin.svg?url")}
              alt="illustration ragondin"
            />
          </picture>
        </div>
        <div className="service-card_content">
          <p>
            Les ragondins sont reconnaissable à ses quatres grandes incisives
            rouge-orange, d'un taille de 40 à 60 cm, il peut peser jusqu'à 9
            kilos.
            <br />
            Le ragondin privilie les milieux aquatiques, il creuse des terriers
            le long des berges, ce qui participent à la dégradation et des 
            rives.
          </p>
          <h2>Inscrit sur la liste des animaux nuisibles</h2>
          <p>
            Classé comme animal nuisible, le ragondin est un prédateur de la
            faune aquatique, il est responsable de la destruction des berges et
            des rives, il est également responsable de la destruction des
            cultures.
          </p>
          <h2>Comment lutter contre le ragondin ?</h2>
          <p>
            Une Taupes chez vous vous propose des solutions naturelles et sans
            danger pour l'environnement pour lutter contre le ragondin avec des
            pièges sans danger pour vos animaux de compagnie, sans produits
            chimiques chimiques ou nocifs pour l'environnement.
            <br />
            Nous vous proposons également des solutions de prévention pour
            éviter que les ragondins ne reviennent sur votre terrain.
          </p>
        </div>
      </div>
    </>
  );
}

// == Export
export default Ragondin;
