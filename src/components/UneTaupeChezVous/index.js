// == Import
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import Taupe from "./Page/Services/Taupe";

import MentionsLegal from "./Page/MentionsLegal";
import Services from "./Page/Services";
import Ragondin from "./Page/Services/Ragondin";
import Fouine from "./Page/Services/Fouine";
import ModalBox from "../ModalBox";
import { useDispatch, useSelector } from "react-redux";
import ModalBoxError from "../ModalError";


function UneTaupeChezVous() {
  const dispatch = useDispatch();
  const toggleModal = useSelector((state) => state.modalBox.toggleModal);
  const toggleError = useSelector((state) => state.modalBox.toggleModalError);

  console.log(toggleModal);
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/" element={<Services />} />
          <Route path="/services/nuisibles/taupe" element={<Taupe />} />
          <Route path="/services/nuisibles/ragondin" element={<Ragondin />} />
          <Route path="/services/nuisibles/fouine" element={<Fouine />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legal" element={<MentionsLegal />} />
          <Route path="*" element={<ModalBoxError />} />
        </Routes>
        {toggleModal ? <ModalBox /> : ""}
      </main>
      <Footer />
    </>
  );
}

// == Export
export default UneTaupeChezVous;
