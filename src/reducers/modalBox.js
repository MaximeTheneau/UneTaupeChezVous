import { TOGGLE_MODAL, TOGGLE_MODAL_ERROR } from "../action/modalBox";

export const initialState = {
  toggleModal: false,
  toggleModalError: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        toggleModal: !state.toggleModal,
      };
    case TOGGLE_MODAL_ERROR:
      return {
        ...state,
        toggleModalError: !state.toggleModalError,
      };
    default:
      return state;
  }
};

export default reducer;
