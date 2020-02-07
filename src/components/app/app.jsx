import React from 'react';
import PropTypes from 'prop-types';
import Main from './../main/main.jsx';

const App = (props) => {

  const {title, genre, releaseDate, films} = props;

  return (
    <Main
      films = {films}
      title = {title}
      genre = {genre}
      releaseDate = {releaseDate}
    />
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.string
  )
};

export default App;
