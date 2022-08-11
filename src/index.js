
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import UneTaupeChezVous from './components/UneTaupeChezVous';
import store from './store';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <UneTaupeChezVous />
    </BrowserRouter>
  </Provider>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);