import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index'

const store = createStore(rootReducer)
ReactDOM.render(
 <Provider store={store}>
     <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
