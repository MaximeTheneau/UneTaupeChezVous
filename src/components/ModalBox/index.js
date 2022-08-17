// == Import
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleModal } from "../../action/modalBox";
import "./styles.css";

// == Composant
function ModalBox() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const toggleModal = useSelector((state) => state.modalBox.toggleModal);

  useEffect(() => {
    setTimeout(() => {
      console.log("yep");
      dispatch(toggleModal());
      navigate("/");
    }, 7000,);
  }, []);
  return (
    <>
      <div className="modal">
        <div className="modal_img">ezzeez</div>
        <div className="modal_description">ezzee</div>
      </div>
    </>
  );
}

// == Export
export default ModalBox;
