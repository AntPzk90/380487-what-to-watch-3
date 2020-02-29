import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './../movie-card/movie-card.jsx';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const filmMock = {
  title: `Bohemian rhapsody`,
  src: `bohemian-rhapsody.jpg`,
  poster: `bohemian-rhapsody.jpg`,
  titlePoster: `bohemian-rhapsody.jpg`,
  genre: `Comedy`,
  releaseDate: `2015`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`SnapshotTest MovieCard`, () => {
  const store = mockStore({
    film: filmMock,
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <MovieCard
          film = {filmMock}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
