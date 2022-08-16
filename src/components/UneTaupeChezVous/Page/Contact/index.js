// == Import
import "./styles.css";

// == Composant
function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <form action="" className="contact-form">
        <label htmlFor="Name">
          <div className="contact-form_title">Nom / Prénom*</div>
          <input type="text" className="contact-form-input" required />
        </label>
        <label htmlFor="email">
        <div className="contact-form_title">Email*</div>
          <input type="email" className="contact-form-input" required />
        </label>
        <div className="contact-form_radio">
        <div className="contact-form_title">Ma demande concerne</div>
          <label>
            Message
            <input type="checkbox" name="radio" value="Message" />
          </label>
          <label>
            Demande de devis
            <input type="checkbox" name="radio" value="Devis" />
          </label>
        </div>
        <label htmlFor="message">
        <div className="contact-form_title">Message*</div>
          <textarea className="contact-form-input" />
        </label>
      </form>
    </>
  );
}

// == Export
export default Contact;
