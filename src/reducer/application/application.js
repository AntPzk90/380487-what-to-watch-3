import {extend} from './../../utils.js';

const initialState = {
  genre: `All genres`,
  showFilmCard: null,
  activeTab: `overview`,
};

const ActionType = {
  FILTER_BY_NAME: `FILTER_BY_NAME`,
  SHOW_FILM_CARD: `SHOW_FILM_CARD`,
  ACTIVE_TAB: `ACTIVE_TAB`,
};

const ActionCreator = {
  filterByName: (filterGenre) => ({type: ActionType.FILTER_BY_NAME, payload: filterGenre}),
  showFilmCard: (film) => ({type: ActionType.SHOW_FILM_CARD, payload: film}),
  changeActiveTab: (activeTab) => ({type: ActionType.ACTIVE_TAB, payload: activeTab}),
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
