// == Import
import { Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import IllustrationHome from "./IllustrationHome";
import Contact from "./Page/Contact";
import "./styles.css";

function UneTaupeChezVous() {
  return (
    <>
      <IllustrationHome />
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<h1>Une taupe chez vous</h1>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

// == Export
export default UneTaupeChezVous;
