// == Import
import taupiniere from "../../assets/svg/taupiniere.svg?url";
import taupiniereWebp from "../../assets/webp/taupiniere.webp";
import "./styles.css";

// == Composant
function CreateImg() {
  return (
    <>
      <picture
        className="modal-error-animation_img"
        style={{
          left: `${Math.floor(Math.random() * 110)}%`,
          top: `${Math.floor(Math.random() * 110)}%`,
        }}
      >
        <source srcSet={taupiniereWebp} type="image/webp" />
        <img
          width="1000"
          height="1000"
          src={taupiniere}
          alt="Illustration d'une taupe dans un jardin avec une tondeuse"
          title="illustration Une taupe chez vous" />
      </picture>
    </>
  );
}

// == Export
export default CreateImg;
