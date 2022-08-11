// == Import
import "./styles.css";

// == Composant
function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <form action="" className="contact-form">
        <input type="text" className="contact-form-input" />
        <input type="email" className="contact-form-input" />
        <textarea className="contact-form-input" />
      </form>
    </>
  );
}

// == Export
export default Contact;
