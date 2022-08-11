import { SHOW_SIDEBAR, HIDE_SIDEBAR } from '../action/header';

export const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default reducer;
