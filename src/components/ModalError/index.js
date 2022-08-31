// == Import
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { numberImg, numberImg2, toggleModalError } from "../../action/modalBox";
import illustration from "../../assets/svg/illustration-jardin-taupe.svg?url";
import illustrationWebp from "../../assets/webp/illustration-jardin-taupe.webp";
import taupiniere from "../../assets/svg/taupiniere.svg?url";
import taupiniereWebp from "../../assets/webp/taupiniere.webp";
import taupinieresWebp from "../../assets/webp/taupinieres.webp";
import taupinieres from "../../assets/svg/taupinieres.svg?url";


import Home from "../UneTaupeChezVous/Page/Home";
import "./styles.css";

// == Composant
function ModalError() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleError = useSelector((state) => state.modalBox.toggleModalError);

  const number110 = Array.from({ length: 7 }, () =>
    Math.floor(Math.random() * 110)
  );

  //const recipesSlice = number110.slice(0, 6);
  console.log(number110);
{/* 
  useEffect(() => {
    setInterval(() => {
      const number11 = Math.random() * 110;
      const number2 = Math.random() * 60;
      dispatch(numberImg(number11));
      dispatch(numberImg2(number2));
    }, 2000);
  }, []);
*/}


  useEffect(() => {
    setTimeout(() => {
      console.log("yep");
      navigate("/");
      dispatch(toggleModalError());
    }, 700000);
  }, []);

  return (
    <>
      {toggleError ? (
        ""
      ) : (
        <>
          <Home />
          <div className="modal-blur"></div>
          <div className="modal-error-animation">
            {/*numberImg1.map((item) =>
              number.map((item2) => (
                <>
                  <picture
                    className="modal-error-animation_img"
                    style={{ left: `${item}%`, top: `${item2}%` }}
                  >
                    <source srcSet={taupiniereWebp} type="image/webp" />
                    <img
                      src={taupiniere}
                      alt="Illustration d'une taupe dans un jardin avec une tondeuse"
                      title="illustration Une taupe chez vous"
                    />
                  </picture>
                  <picture
                    className="modal-error-animation_img"
                    style={{ right: `${item2}%`, top: `${item}%` }}
                  >
                    <source srcSet={taupinieresWebp} type="image/webp" />
                    <img
                      src={taupinieres}
                      alt="Illustration d'une taupe dans un jardin avec une tondeuse"
                      title="illustration Une taupe chez vous"
                    />
                  </picture>
                </>
              ))
              )*/}
          </div>
          <div className="modal">
            <picture>
              <source srcSet={illustrationWebp} type="image/webp" />
              <img
                width="1000"
                height="1000"
                src={illustration}
                alt="Illustration d'une taupe dans un jardin avec une tondeuse"
                title="illustration Une taupe chez vous" />
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
