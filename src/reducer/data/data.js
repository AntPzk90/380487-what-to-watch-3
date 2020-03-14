import {extend} from "../../utils.js";

const initialState = {
  films: [],
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
  LOAD_FILMS: `LOAD_FILMS`
};

const ActionCreator = {
  loadFilms: (data) => ({type: ActionType.LOAD_FILMS, payload: data}),
};

const Operation = {
  getFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => dispatch(ActionCreator.loadFilms(response.data)));
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {films: action.payload.map(adapter)});
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};
