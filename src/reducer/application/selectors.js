import NameSpace from '../name-space.js';

export const getShowFilmsCard = (state) => {
  return state[NameSpace.APPLICATION].showFilmCard;
};

export const getActiveTab = (state) => {
  return state[NameSpace.APPLICATION].activeTab;
};


