import {extend} from './../../utils.js';

const initialState = {
  genre: `All genres`,
  showFilmCard: null,
};

const ActionType = {
  FILTER_BY_NAME: `FILTER_BY_NAME`,
  SHOW_FILM_CARD: `SHOW_FILM_CARD`,
};

const ActionCreator = {
  filterByName: (filterGenre) => ({type: ActionType.FILTER_BY_NAME, payload: filterGenre}),
  showFilmCard: (film) => ({type: ActionType.SHOW_FILM_CARD, payload: film}),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_BY_NAME:
      return extend(state, {genre: action.payload});
    case ActionType.SHOW_FILM_CARD:
      return extend(state, {showFilmCard: action.payload});
    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
