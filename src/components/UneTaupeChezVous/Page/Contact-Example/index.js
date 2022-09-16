// == Import
import "./styles.css";
import emailjs from "emailjs-com";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../../action/modalBox";
import { contactForm } from "../../../../action/contact";

// == Import Img
import ImgTaupeWebp from "../../../../assets/webp/illustration-taupe-vacances.webp"
import ImgTaupe from "../../../../assets/svg/illustration-taupe-vacances.svg"
// == Composant
function Contact() {
  const dispatch = useDispatch();
  const nameValue = useSelector((state) => state.contact.name);
  const emailValue = useSelector((state) => state.contact.email);
  const messageValue = useSelector((state) => state.contact.message);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
    {
      /* 
      emailjs-com 
      ----> https://dashboard.emailjs.com <----
      */
    }
    emailjs
      .sendForm(
        "service_{ID_SERVICE}",
        "template_{TEMPLATE_SERVICE}",
        evt.target,
        "{KEY_PUBLIC}",
      )
      .then(
        (result) => {
          dispatch(toggleModal());
          // console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-img">
        <picture>
          <source
            srcSet={ImgTaupeWebp}
            type="image/webp"
          />
          <img
            src={ImgTaupe}
            alt="Illustration d'une taupe dans un jardin avec une tondeuse"
            title="illustration Une taupe chez vous"
          />
        </picture>
      </div>
      <h1>Contact</h1>
      <h2>Formulaire</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="Name">
          <div className="contact-form_title">Nom / Prénom*</div>
          <input
            type="text"
            className="contact-form-input"
            name="user_name"
            value={nameValue}
            onChange={(evt) => dispatch(contactForm(evt.target.value, "name"))}
            required
          />
        </label>
        <label htmlFor="email">
          <div className="contact-form_title">Email*</div>
          <input
            name="user_email"
            type="email"
            value={emailValue}
            className="contact-form-input"
            onChange={(evt) => dispatch(contactForm(evt.target.value, "email"))}
            required
          />
        </label>
        <label htmlFor="message">
          <div className="contact-form_title">Message*</div>
          <textarea
            name="message"
            className="contact-form-input"
            value={messageValue}
            onChange={(evt) => dispatch(contactForm(evt.target.value, "message"))}
            required
          />
        </label>
        <div className="contact-form_button">
          <button type="submit">
            <i className="icon-submit" value="send" />
            Envoyer
          </button>
          <div className="contact-list">
            <div className="contact-list-item">
              <a href="tel:+33232264958">
                <i className="icon-phone" />
                02 32 26 49 58
              </a>
            </div>
            <div className="contact-list-item">
              <a href="mailto:laurent.theneau@unetaupechezvous.fr">
                <i className="icon-email" />
                laurent.theneau @ unetaupechezvous.fr
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

// == Export
export default Contact;
