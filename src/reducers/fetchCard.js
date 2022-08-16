import { FETCH_CARD } from "../action/card";

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CARD:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
