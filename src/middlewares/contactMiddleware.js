import axios from 'axios';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {

    default:
      return next(action);
  }
};

export default contactMiddleware;
