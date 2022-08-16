// == Import
import "./styles.css";
import emailjs from "emailjs-com";
import TaupesVacances from "../../../../assets/svg/illustration-taupe-vacances.svg";
import Unchecked from "../../../../assets/svg/checked.svg";
import Checked from "../../../../assets/svg/checked-validate.svg";
import { useDispatch, useSelector } from "react-redux";
import { contactForm, postContact } from "../../../../action/contact";
import { useRef } from "react";

// == Composant
function Contact() {
  const form = useRef();
  const nameValue = useSelector((state) => state.contact.name);
  const email = useSelector((state) => state.contact.email);
  const message = useSelector((state) => state.contact.message);
  const checkDevis = useSelector((state) => state.contact.checkDevis);
  const checkMessage = useSelector((state) => state.contact.checkMessage);
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
    emailjs
      .sendForm(
        "service_948w3jq",
        "template_83yo2gf",
        evt.target,
        "1O8Ob4TeUeGNU_xaz"
      )
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };
  return (
    <>
      <TaupesVacances />
      <h1>Contact</h1>
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
            value={message}
            onChange={(evt) =>
              dispatch(contactForm(evt.target.value, "message"))
            }
            required
          />
        </label>
        <div className="contact-form_button">
          <button type="submit">
            <i className="icon-submit" value="send"></i>
            Envoyer
          </button>
        </div>
      </form>
    </>
  );
}

// == Export
export default Contact;
