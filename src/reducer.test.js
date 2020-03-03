import {reducer, ActionType} from "./reducer.js";
const posterMock = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: `2014`,
};
const filmsMock = [
  {
    title: `Grand budapest hotel`,
    src: `bg-the-grand-budapest-hotel.jpg`,
    poster: `bg-the-grand-budapest-hotel.jpg`,
    titlePoster: `bg-the-grand-budapest-hotel.jpg`,
    genre: `Drama`,
    releaseDate: `2014`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    title: `Bohemian rhapsody`,
    src: `bohemian-rhapsody.jpg`,
    poster: `bohemian-rhapsody.jpg`,
    titlePoster: `bohemian-rhapsody.jpg`,
    genre: `Comedy`,
    releaseDate: `2015`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Dardjeeling limited`,
    src: `dardjeeling-limited.jpg`,
    poster: `dardjeeling-limited.jpg`,
    titlePoster: `dardjeeling-limited.jpg`,
    genre: `Comedy`,
    releaseDate: `2016`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Pulp fiction`,
    src: `pulp-fiction.jpg`,
    poster: `pulp-fiction.jpg`,
    titlePoster: `pulp-fiction.jpg`,
    genre: `Detective`,
    releaseDate: `2017`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    title: `Macbeth`,
    src: `macbeth.jpg`,
    poster: `macbeth.jpg`,
    titlePoster: `macbeth.jpg`,
    genre: `Comedy`,
    releaseDate: `2018`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Shutter island`,
    src: `shutter-island.jpg`,
    poster: `shutter-island.jpg`,
    titlePoster: `shutter-island.jpg`,
    genre: `Drama`,
    releaseDate: `2019`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
  },
  {
    title: `Midnight special`,
    src: `midnight-special.jpg`,
    poster: `midnight-special.jpg`,
    titlePoster: `midnight-special.jpg`,
    genre: `Comedy`,
    releaseDate: `2020`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    title: `Revenant`,
    src: `revenant.jpg`,
    poster: `revenant.jpg`,
    titlePoster: `revenant.jpg`,
    genre: `Detective`,
    releaseDate: `2012`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void `All genres`, {})).toEqual({
    poster: posterMock,
    genre: `All genres`,
    films: filmsMock,
    showFilmCard: null,
    activeTab: `overview`,
  });
});

it(`Reducer current step by a given value`, () => {
  expect(reducer({
    poster: posterMock,
    genre: `All genres`,
    films: filmsMock,
    showFilmCard: null,
    activeTab: `overview`,
  }, {
    type: ActionType.FILTER_BY_NAME,
    payload: `Drama`,
  })).toEqual({
    poster: posterMock,
    genre: `Drama`,
    films: filmsMock,
    showFilmCard: null,
    activeTab: `overview`,
  });
});

it(`Reducer current step by a given value`, () => {
  expect(reducer({
    poster: posterMock,
    genre: `All genres`,
    films: filmsMock,
    showFilmCard: null,
    activeTab: `overview`,
  }, {
    type: ActionType.ACTIVE_TAB,
    payload: `details`,
  })).toEqual({
    poster: posterMock,
    genre: `All genres`,
    films: filmsMock,
    showFilmCard: null,
    activeTab: `details`,
  });
});
