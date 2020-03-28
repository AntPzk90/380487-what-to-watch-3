import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';
import {reducer, ActionType, Operation} from './data.js';
import {adapter} from './data.js';

const api = createAPI(() => {});

const filmsMock = [
  {
    "id": 1,
    "name": `The Grand Budapest Hotel`,
    "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
    "preview_image": `img/the-grand-budapest-hotel.jpg`,
    "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
    "background_color": `#ffffff`,
    "video_link": `https://some-link`,
    "preview_video_link": `https://some-link`,
    "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    "rating": 8.9,
    "scores_count": 240,
    "director": `Wes Andreson`,
    "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
    "run_time": 99,
    "genre": `Comedy`,
    "released": 2014,
    "is_favorite": false
  }
];

const reviewsMock = [
  {
    "id": 1,
    "user": {
      "id": 4,
      "name": `Kate Muir`
    },
    "rating": 8.9,
    "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    "date": `2019-05-08T14:13:56.569Z`
  },
  {
    "id": 1,
    "user": {
      "id": 4,
      "name": `Kate Muir`
    },
    "rating": 8.9,
    "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    "date": `2019-05-08T14:13:56.569Z`
  }
];

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

  it(`Should make a correct API call to /fovirite`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = Operation.getFavoriteFilms();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return favoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_FILMS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoFilmLoader = Operation.getPromoFilm();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return promoFilmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = Operation.getAllReviews(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{fake: true}]);

    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_ALL_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

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
      films: filmsMock.map(adapter),
    });
  });

  it(`Reducer should update films by load favoriteFilms`, () => {
    expect(reducer({
      favoriteFilms: [],
    }, {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: filmsMock,
    })).toEqual({
      favoriteFilms: filmsMock.map(adapter),
    });
  });

  it(`Reducer should update films by load promoFilm`, () => {
    expect(reducer({
      promoFilm: {},
    }, {
      type: ActionType.LOAD_PROMO_FILM,
      payload: filmsMock[0],
    })).toEqual({
      promoFilm: adapter(filmsMock[0]),
    });
  });

  it(`Reducer should update films by load revievs`, () => {
    expect(reducer({
      reviews: [],
    }, {
      type: ActionType.LOAD_ALL_REVIEWS,
      payload: reviewsMock,
    })).toEqual({
      reviews: reviewsMock,
    });
  });
});
