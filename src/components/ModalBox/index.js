// == Import
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleModal } from "../../action/modalBox";
import "./styles.css";

// == Import Img
import CardImg from "../../assets/svg/card-illustration.svg";
import CardImgWebp from "../../assets/webp/card-illustration.webp";

// == Composant
function ModalBox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
      dispatch(toggleModal());
    }, 7000);
  }, []);
  return (
    <>
      <div className="modal-blur" />
      <div className="modal">
        <div className="modal_img">
          <picture>
            <source
              srcSet={CardImg}
              type="image/webp"
            />
            <img
              src={CardImgWebp}
              alt="Illustration cards"
            />
          </picture>
        </div>
        <div className="modal_description">
          <h2>Bien reçu</h2>
          <p>L'équipe vous répond aux plus vite. </p>
          <Link to="/">
            <button
              type="button"
              className="modal_button"
              onClick={() => dispatch(toggleModal())}
            >
              Retour à l'accueil
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

// == Export
export default ModalBox;
