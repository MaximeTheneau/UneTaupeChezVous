import { CONTACT_FORM } from "../action/contact";

export const initialState = {

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONTACT_FORM:
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
