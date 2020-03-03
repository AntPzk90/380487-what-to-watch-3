import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardReviews from './../movie-card-reviews/movie-card-reviews.jsx';
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

it(`SnapshotTest MovieCardReviews`, () => {

  const store = mockStore({
    films: filmMock,
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <MovieCardReviews
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
