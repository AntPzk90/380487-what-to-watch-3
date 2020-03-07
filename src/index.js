import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from "react-redux";
import reducer from './reducer/reducer.js';
import thunk from 'redux-thunk';
import {DataOperation} from './reducer/data/data.js';
import {createAPI} from './api.js';

const api = createAPI();

const store = createStore(
  reducer,
    applyMiddleware(thunk.withExtraArgument(api)),
);

store.dispatch(DataOperation.getFilms());

ReactDOM.render(
    <Provider store={store}>
      <App
      />
    </Provider>,
    document.querySelector(`#root`)
);
