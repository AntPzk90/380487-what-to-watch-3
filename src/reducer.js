import {extend} from './utils.js';
import filmsMock from './mocks/films.js';
import posterMock from './mocks/poster.js';

const initialState = {
  poster: posterMock,
  genre: `All genres`,
  films: filmsMock,
  showFilmCard: null,
  activeTab: `overview`,
};

const changeGenre = (newGenre) => {
  return newGenre;
};
const changeShowingFilmCard = (film) => {
  return film;
};
const changeActiveTab = (activeTab) => {
  return activeTab;
};

const ActionType = {
  FILTER_BY_NAME: `FILTER_BY_NAME`,
  SHOW_FILM_CARD: `SHOW_FILM_CARD`,
  ACTIVE_TAB: `ACTIVE_TAB`,
};

const ActionCreator = {
  filterByName: (filterGenre) => {
    return {
      type: ActionType.FILTER_BY_NAME,
      payload: changeGenre(filterGenre)
    };
  },
  showFilmCard: (film) => {
    return {
      type: ActionType.SHOW_FILM_CARD,
      payload: changeShowingFilmCard(film)
    };
  },
  changeActiveTab: (activeTab) => {
    return {
      type: ActionType.ACTIVE_TAB,
      payload: changeActiveTab(activeTab),
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_BY_NAME:
      return extend(state, {genre: action.payload});
    case ActionType.SHOW_FILM_CARD:
      return extend(state, {showFilmCard: action.payload});
    case ActionType.ACTIVE_TAB:
      return extend(state, {activeTab: action.payload});
    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
