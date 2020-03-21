import {extend} from "../../utils.js";

const initialState = {
  films: [],
  favoriteFilms: [],
  promoFilm: {},
  reviews: [],
};

const adapter = (film) => {

  return {
    name: film[`name`],
    poster: film[`poster_image`],
    previewImage: film[`preview_image`],
    backgroundImage: film[`background_image`],
    backgroundColor: film[`background_color`],
    description: film[`description`],
    rating: film[`rating`],
    scoresCount: film[`scores_count`],
    director: film[`director`],
    starring: film[`starring`],
    runTime: film[`run_time`],
    genre: film[`genre`],
    released: film[`released`],
    id: film[`id`],
    isFavorite: film[`is_favorite`],
    videoLink: film[`video_link`],
    previewVideoLink: film[`preview_video_link`]
  };
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_FAVORITE_FILMS: `LOAD_FAVORITES_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_ALL_REVIEWS: `LOAD_ALL_REVIEWS`,
};

const ActionCreator = {
  loadFilms: (data) => ({type: ActionType.LOAD_FILMS, payload: data}),
  loadFavoriteFilms: (data) => ({type: ActionType.LOAD_FAVORITE_FILMS, payload: data}),
  loadPromoFilm: (data) => ({type: ActionType.LOAD_PROMO_FILM, payload: data}),
  loadAllReviews: (data) => ({type: ActionType.LOAD_ALL_REVIEWS, payload: data}),
};

const Operation = {
  getFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => dispatch(ActionCreator.loadFilms(response.data)));
  },
  getPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`).
      then((response) => dispatch(ActionCreator.loadPromoFilm(response.data)));
  },
  getFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => dispatch(ActionCreator.loadFavoriteFilms(response.data)));
  },
  changeFavoriteStatus: (data, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${data.id}/${status}`)
  },
  getAllReviews:(id) => (dispatch, getState, api) => {
    return api.get(`comments/${id}`)
    .then((response) => dispatch(ActionCreator.loadAllReviews(response.data)));
  },
  sendReview: (id, rating, comment) => (dispatch, getState, api) => {
    return api.post(`comments/${id}`, {rating, comment});
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload.map(adapter)});
    case ActionType.LOAD_FAVORITE_FILMS:
      return extend(state, {favoriteFilms: action.payload.map(adapter)});
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {promoFilm: adapter(action.payload)});
    case ActionType.LOAD_ALL_REVIEWS:
      return extend(state, {reviews: action.payload});
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
