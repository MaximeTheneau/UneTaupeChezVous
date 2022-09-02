// == Import
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { numberImg, toggleModalError } from "../../action/modalBox";
import illustration from "../../assets/svg/illustration-jardin-taupe.svg?url";
import illustrationWebp from "../../assets/webp/illustration-jardin-taupe.webp";

import Home from "../UneTaupeChezVous/Page/Home";
import "./styles.css";
import CreateImg from "./createImg";

// == Composant
function ModalError() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleError = useSelector((state) => state.modalBox.toggleModalError);
  const numberCounter = useSelector((state) => state.modalBox.numberImg);
  const numberCounterArray = numberCounter.slice(0, 22);
  console.log(numberCounterArray);
  useEffect(() => {
    setInterval(() => {
      dispatch(numberImg());
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
      dispatch(toggleModalError());
    }, 15000);
  }, []);

  return (
    <>
      {toggleError ? (
        ""
      ) : (
        <>
          <Home />

          <div className="modal-blur"></div>
          <div className="modal-error-animation" >
            {numberCounterArray.map((number) => (
              <CreateImg key={number} />
            ))}
          </div>
          <div className="modal">
            <picture>
              <source srcSet={illustrationWebp} type="image/webp" />
              <img
                width="1000"
                height="1000"
                src={illustration}
                alt="Illustration d'une taupe dans un jardin avec une tondeuse"
                title="illustration Une taupe chez vous"
              />
            </picture>
            <h1 className="modal-error_title">404</h1>
            <p>Oups</p>
            <Link to="/">
              <button
                className="modal_button"
                onClick={() => dispatch(toggleModalError())}
              >
                Retour à l'accueil
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}

// == Export
export default ModalError;
