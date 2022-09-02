// == Import

import "./styles.css";

// == Composant
function CreateImg() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * 3) + 1;
  }
  console.log(getRandomInt());
  return (
    <>
      <picture
        className="modal-error-animation_img"
        style={{
          left: `${Math.floor(Math.random() * 110)}%`,
          top: `${Math.floor(Math.random() * 110)}%`,
        }}
      >
        <source
          srcSet={require(`../../assets/svg/illustration-taupe-${getRandomInt()}.svg?url`)}
          type="image/webp"
        />
        <img
          width="1000"
          height="1000"
          alt="Illustration d'une taupe dans un jardin avec une tondeuse"
          title="illustration Une taupe chez vous" />
      </picture>
    </>
  );
}

// == Export
export default CreateImg;
