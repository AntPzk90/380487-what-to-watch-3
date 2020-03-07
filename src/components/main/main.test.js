import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
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


it(`SnapshotTest Main`, () => {

  const store = mockStore({
    films: filmsMock,
    APPLICATION: {genre: 'drama'}
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <Main
          films = {filmsMock}
          title = {`Some title`}
          genre = {store.genre}
          releaseDate = {`some date`}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
  .toJSON();

  expect(tree).toMatchSnapshot();
});
