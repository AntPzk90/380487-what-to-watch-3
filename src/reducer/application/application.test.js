
import {reducer, ActionType} from './application.js';

const genreMock = `Comedy`;

const showFilmCardMock = {
  name: `War of the Worlds`,
  poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/War_of_the_Worlds.jpg`,
  previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/war-of-the-worlds.jpg`,
  backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/War_of_the_Worlds.jpg`,
  backgroundColor: `#9B7E61`,
  description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`,
  rating: 9.3,
  scoresCount: 386834,
  director: `Steven Spielberg`,
  starring: [`Tom Cruise`, `Dakota Fanning`, `Tim Robbins`],
  runTime: 116,
  genre: `Adventure`,
  released: 2005,
  id: 1,
  isFavorite: false,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

describe(`Operation work correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      genre: `All genres`,
      showFilmCard: null,
    });
  });

  it(`Reducer should update genre`, () => {
    expect(reducer({
      genre: `Comedy`,
    }, {
      type: ActionType.FILTER_BY_NAME,
      payload: genreMock,
    })).toEqual({
      genre: genreMock,
    });
  });

  it(`Reducer should update showFilmCard`, () => {
    expect(reducer({
      showFilmCard: {},
    }, {
      type: ActionType.SHOW_FILM_CARD,
      payload: showFilmCardMock,
    })).toEqual({
      showFilmCard: showFilmCardMock,
    });
  });
});
