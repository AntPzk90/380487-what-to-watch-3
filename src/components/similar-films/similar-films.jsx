import React from 'react';
import {getAllFilms} from './../../reducer/data/selectors.js';
import {connect} from 'react-redux';
import withFilmsList from '../../hocs/with-films-list/with-films-list.jsx';
import MovieCard from '../movie-card/movie-card.jsx';


const SimilarFilmsList = (props) => {
  const {similarFilms, onCardMouseEnter} = props;
  console.log(props)

  return(
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__movies-list">
      {similarFilms.slice(0, 4).map((film) => {
        return (
          <MovieCard key={film.id}
            film={film}
            onCardMouseEnter={onCardMouseEnter}
          />
        );
      })}
      </div>
    </section>
  );
}

const mapStateToProps = (state, {genre}) => ({
  similarFilms: getAllFilms(state).filter((it) => it.genre === genre)
});

export default connect(mapStateToProps)(withFilmsList(SimilarFilmsList));
