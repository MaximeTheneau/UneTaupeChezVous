// == Import
import "./styles.css";

// == Composant
function Spinner() {
  return (
    <div className="spinner">
      <picture>
        <source
          srcSet={require("../../assets/webp/logo-une-taupe-chez-vous.webp")}
          type="image/webp"
        />
        <img
          src={require("../../assets/svg/logo-une-taupe-chez-vous.svg?url")}
          alt="Illustration d'une taupe dans un jardin avec une tondeuse"
          title="illustration Une taupe chez vous"
        />
      </picture>
    </div>
  );
}

// == Export
export default Spinner;
