export const CONTACT_FORM = "CONTACT_FORM";

export function contactForm(value, field) {
  return {
    type: CONTACT_FORM,
    value: value,
    field: field,
  };
}
