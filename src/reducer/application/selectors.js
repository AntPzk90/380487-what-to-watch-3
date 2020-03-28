import NameSpace from '../name-space.js';

export const getShowFilmsCard = (state) => {
  return state[NameSpace.APPLICATION].showFilmCard;
};

export const getErrorStatus = (state) => {
  return state[NameSpace.APPLICATION].error;
};
