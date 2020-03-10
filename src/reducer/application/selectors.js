import NameSpace from '../name-space.js';

export const getPoster = (state) => {
  return state[NameSpace.APPLICATION].poster;
};

export const getShowFilmsCard = (state) => {
  return state[NameSpace.APPLICATION].showFilmCard;
};

export const getActiveTab = (state) => {
  return state[NameSpace.APPLICATION].activeTab;
};


