import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import films from './mocks/films.js';

const Settings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
};

ReactDOM.render(
    <App
      films = {films}
      title = {Settings.title}
      genre = {Settings.genre}
      releaseDate = {Settings.releaseDate}
    />,
    document.querySelector(`#root`)
);
