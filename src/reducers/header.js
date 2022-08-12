import { SHOW_SIDEBAR, HIDE_SIDEBAR, TOGGLE_NAVBAR } from "../action/header";

export const initialState = {
  toogleNavbar: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_NAVBAR:
      return {
        ...state,
        toogleNavbar: !state.toogleNavbar,
      };
    default:
      return state;
  }
};

export default reducer;
