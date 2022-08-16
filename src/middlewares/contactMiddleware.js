import { POST_CONTACT } from "../action/contact";
import emailjs from "@emailjs/browser";
const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_CONTACT: {
      const state = store.getState();
      const { name, email, checkDevis, checkMessage, message  } = state.contact;
      console.log(name, email, checkDevis, checkMessage, message);

      emailjs
        .sendForm(
          "service_948w3jq",
          "template_83yo2gf",
          name,
          "1O8Ob4TeUeGNU_xaz"
        )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      return next(action);
    }
    default:
      return next(action);
  }
};
export default contactMiddleware;
