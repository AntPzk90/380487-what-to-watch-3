import {extend} from './utils.js';
import posterMock from './mocks/poster.js';

const adapter = (film) => {

  return {
    name: film.name,
    poster: film[`poster_image`],
    previewImage: film[`preview_image`],
    backgroundImage: film[`background_image`],
    backgroundColor: film[`background_color`],
    decription: film[`description`],
    rating: film[`rating`],
    scoresCount: film[`scores_count`],
    director: film[`director`],
    starring: film[`starring`],
    genre: film[`genre`],
    released: film[`released`],
    id: film[`id`],
    isFavorite: film[`is_favorite`],
    videoLink: film[`video_link`],
    previewVideoLink: film[`preview_video_link`]
  };
};

const initialState = {
  poster: posterMock,
  genre: `All genres`,
  films: [],
  showFilmCard: null,
  activeTab: `overview`,
};

const ActionType = {
  FILTER_BY_NAME: `FILTER_BY_NAME`,
  SHOW_FILM_CARD: `SHOW_FILM_CARD`,
  ACTIVE_TAB: `ACTIVE_TAB`,
  LOAD_FILMS: `LOAD_FILMS`
};

const ActionCreator = {
  filterByName: (filterGenre) => ({type: ActionType.FILTER_BY_NAME, payload: filterGenre}),
  showFilmCard: (film) => ({type: ActionType.SHOW_FILM_CARD, payload: film}),
  changeActiveTab: (activeTab) => ({type: ActionType.ACTIVE_TAB, payload: activeTab}),
  loadFilms: (data) => ({type: ActionType.ADD_FILMS, payload: data}),
};

const Operation = {
  getFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then(response => dispatch(ActionCreator.loadFilms(response.data)));
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
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload.map(adapter)})
    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator, Operation};
