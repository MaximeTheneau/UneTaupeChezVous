import { TOGGLE_MODAL } from "../action/modalBox";


export const initialState = {
  toggleModal: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        toggleModal: !state.toggleModal,
      };
    default:
      return state;
  }
};

export default reducer;
