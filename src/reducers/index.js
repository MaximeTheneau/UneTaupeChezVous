import { combineReducers } from 'redux';
import header from "./header";
import card from "./fetchCard";

const rootReducer = combineReducers({
  header: header,
  card: card,
});

export default rootReducer;
