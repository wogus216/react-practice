import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from '../node_modules/react-router-dom/index';
import { Provider } from '../node_modules/react-redux/es/exports';
import { applyMiddleware, legacy_createStore } from '../node_modules/@reduxjs/toolkit/dist/index';
import { composeWithDevTools } from '../node_modules/redux-devtools-extension/index';
import rootReducer, { rootSaga } from './modules/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const root = ReactDOM.createRoot(document.getElementById('root'));

sagaMiddleware.run(rootSaga);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
