export const CONTACT_FORM = "CONTACT_FORM";

export function contactForm(value, field) {
  return {
    type: CONTACT_FORM,
    value: value,
    field: field,
  };
}
export const POST_CONTACT = "POST_CONTACT";

export function postContact() {
  return {
    type: POST_CONTACT,
  };
}