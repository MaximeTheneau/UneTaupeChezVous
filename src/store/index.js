import { createStore, applyMiddleware, compose } from 'redux';
import reducer from "src/reducers";
import contactMiddleware from "../middlewares/contactMiddleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(contactMiddleware));

const store = createStore(reducer, enhancers);

export default store;