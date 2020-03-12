import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Calculator } from './pages';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  );
}

export default App;
