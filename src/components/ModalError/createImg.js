// == Import
import "./styles.css";


// == Composant
function CreateImg() {
  function getRandomInt() {
    return Math.floor(Math.random() * 3) + 1;
  }
  // console.log(getRandomInt());
  const newLocal = "Illustration Taupe Jardin"
  return (
    <picture
      className="modal-error-animation_img"
      style={{
        left: `${Math.floor(Math.random() * 110)}%`,
        top: `${Math.floor(Math.random() * 110)}%`,
      }}
    >
      <source
        srcSet={require(`../../assets/webp/illustration-taupe-${getRandomInt()}.webp`)}
        type="image/webp"
      />
      <img
        width="1000"
        height="1000"
        srcSet={require(`../../assets/svg/illustration-taupe-${getRandomInt()}.svg?url`)}
        alt="Illustration d'une taupe dans un jardin avec une tondeuse"
        title={newLocal}
      />
    </picture>
  );
}

// == Export
export default CreateImg;
