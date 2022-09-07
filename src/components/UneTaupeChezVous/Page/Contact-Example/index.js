// == Import
import "./styles.css";
import emailjs from "emailjs-com";
import TaupesVacances from "../../../../assets/svg/illustration-taupe-vacances.svg?url";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../../action/modalBox";

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
      install emailjs-com 
      ----> https://dashboard.emailjs.com <----
      */
    }
    emailjs
      .sendForm(
        "service_j890q4l",
        "template_xd1r1j3",
        evt.target,
        "1O8Ob4TeUeGNU_xaz"
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
    <>
      <img src={TaupesVacances} alt="illustration taupes Vacances" />
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
