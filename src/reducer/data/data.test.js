import {reducer, ActionType} from './data.js';

const films = [
  {
    name: `War of the Worlds`,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/War_of_the_Worlds.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/war-of-the-worlds.jpg`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/War_of_the_Worlds.jpg`,
    backgroundColor: `#9B7E61`,
    description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`,
    rating: 9.3,
    scoresCount: 386834,
    director: `Steven Spielberg`,
    starring: (3) [`Tom Cruise`, `Dakota Fanning`, `Tim Robbins`],
    runTime: 116,
    genre: `Adventure`,
    released: 2005,
    id: 1,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    name: `Matrix`,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/matrix.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/matrix.jpg`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/matrix.jpg`,
    backgroundColor: `#B9B27E`,
    description: `A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.`,
    rating: 4.4,
    scoresCount: 1503092,
    director: `Wachowski Brothers`,
    starring: (3) [`Keanu Reeves`, `Laurence Fishburne`, `Carrie-Anne Moss`],
    runTime: 136,
    genre: `Action`,
    released: 1999,
    id: 2,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }
];


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
  });
});

it(`Reducer should update films by load films`, () => {
  expect(reducer({
    films: [],
  }, {
    type: ActionType.LOAD_FILMS,
    payload: films,
  })).toEqual({
    films,
  });
});
