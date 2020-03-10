import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';

export const getAllFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getGenre = (state) => {
  return state[NameSpace.APPLICATION].genre;
};


export const getFilteredFilms = createSelector(
    getGenre,
    getAllFilms,
    (genre, films) => {
      if (genre === `All genres`) {
        return films;
      } else {
        return films.filter((it) => it.genre === genre);
      }
    }
);

