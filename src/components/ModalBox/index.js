// == Import
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleModal } from "../../action/modalBox";
import CardImg from "../../assets/svg/card-illustration.svg";
import "./styles.css";

// == Composant
function ModalBox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      console.log("yep");
      navigate("/");
      dispatch(toggleModal());
    }, 7000,);
  }, []);
  return (
    <>
      <div className="modal-blur"></div>
      <div className="modal">
        <div className="modal_img">
          <CardImg />
        </div>
        <div className="modal_description">
          <h2>Bien reçu</h2>
          <p>On vous répond aux plus vite </p>
          <Link to="/">
            <button
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
