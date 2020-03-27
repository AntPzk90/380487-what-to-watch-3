import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list.jsx';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const filmsMock = [
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
    title: `Bohemian rhapsody`,
    src: `bohemian-rhapsody.jpg`,
    poster: `bohemian-rhapsody.jpg`,
    titlePoster: `bohemian-rhapsody.jpg`,
    genre: `Comedy`,
    releaseDate: `2015`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
];

it(`SnapshotTest GenresList`, () => {

  const store = mockStore({
    DATA: {films: filmsMock, promoFilm: filmsMock[0]},
    APPLICATION: {genre: `drama`},
    USER: {authorizationStatus: `AUTH`}
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <GenresList
            films = {filmsMock}
            genreToFilter = {store.genreToFilter}
            onGenreClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
