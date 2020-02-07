import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const Settings = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
};

const films = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

ReactDOM.render(
    <App
      films = {films}
      title = {Settings.title}
      genre = {Settings.genre}
      releaseDate = {Settings.releaseDate}
    />,
    document.querySelector(`#root`)
);
