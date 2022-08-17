import { combineReducers } from "redux";
import header from "./header";
import contact from "./contact";
import modalBox from "./modalBox";

const rootReducer = combineReducers({
  header: header,
  contact: contact,
  modalBox: modalBox,
});

export default rootReducer;
