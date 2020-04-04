import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';

export const getAllFilms = (state) => {
  return state[NameSpace.DATA].films;
};

const getIdFilm = (_, id) => {
  return id;
};

export const getGenre = (state) => {
  return state[NameSpace.APPLICATION].genre;
};

export const getFavoriteFilms = (state) => {
  return state[NameSpace.DATA].favoriteFilms;
};

export const getPoster = (state) => {
  return state[NameSpace.DATA].promoFilm;
};

export const getReviews = (state) => {
  return state[NameSpace.DATA].reviews;
};

export const getFilmForId = createSelector(
    getAllFilms,
    getIdFilm,
    (one, two) => {
      return one.find((film) => film.id === Number(two));
    }
);

export const getFilteredFilms = createSelector(
    getGenre,
    getAllFilms,
    (genre, films) => {
      if (genre === `All genres`) {
        return films;
      } else {
        return films.filter((film) => film.genre === genre);
      }
    }
);


