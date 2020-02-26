import {extend} from './utils.js';
import filmsMock from './mocks/films.js';

const initialState = {
  genre: `All genres`,
  films: filmsMock,
};

const changeGenre = (newGenre) => {
  return newGenre;
};

const ActionType = {
  FILTER_BY_NAME: `FILTER_BY_NAME`
};

const ActionCreator = {
  filterByName: (filterGenre) => {
    return {
      type: ActionType.FILTER_BY_NAME,
      payload: changeGenre(filterGenre)
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FILTER_BY_NAME:
      return extend(state, {genre: action.payload});
    default:
      return state;
  }
};


export {reducer, ActionType, ActionCreator};
