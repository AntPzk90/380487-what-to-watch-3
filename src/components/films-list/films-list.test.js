import React from 'react';
import renderer from 'react-test-renderer';
import FilmsList from './films-list.jsx';
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

it(`SnapshotTest FilmList`, () => {

  const store = mockStore({
    films: filmsMock,
    genreToFilter: `All genres`
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <FilmsList
          films = {filmsMock}
          showCardOverview = {() => {}}
          genreToFilter = {store.genreToFilter}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
