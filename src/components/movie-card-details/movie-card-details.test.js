import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardDetails from './../movie-card-details/movie-card-details.jsx';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const filmMock = {
  title: `Dardjeeling limited`,
  src: `dardjeeling-limited.jpg`,
  poster: `dardjeeling-limited.jpg`,
  titlePoster: `dardjeeling-limited.jpg`,
  genre: `Comedy`,
  releaseDate: `2016`,
};

it(`SnapshotTest MovieCardDetails`, () => {

  const store = mockStore({
    films: filmMock,
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <MovieCardDetails
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
