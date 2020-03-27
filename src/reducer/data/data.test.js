import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation} from "./data.js";

const api = createAPI(() => {});

const filmsMock = [
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
    starring: [`Tom Cruise`, `Dakota Fanning`, `Tim Robbins`],
    runTime: 116,
    genre: `Adventure`,
    released: 2005,
    id: 1,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
    favoriteFilms: [],
    promoFilm: {},
    reviews: [],
  });
});

it(`Reducer should update films by load films`, () => {
  expect(reducer({
    films: [],
  }, {
    type: ActionType.LOAD_FILMS,
    payload: filmsMock,
  })).toEqual({
    films: filmsMock,
  });
});

it(`Reducer should update films by load favoriteFilms`, () => {
  expect(reducer({
    favoriteFilms: [],
  }, {
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: filmsMock,
  })).toEqual({
    favoriteFilms: filmsMock,
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.getFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [{fake: true}],
        });
      });
  });
});
