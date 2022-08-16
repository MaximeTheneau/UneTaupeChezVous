import { combineReducers } from 'redux';
import header from "./header";
import contact from "./contact";


const rootReducer = combineReducers({
  header: header,
  contact: contact,
});

export default rootReducer;
