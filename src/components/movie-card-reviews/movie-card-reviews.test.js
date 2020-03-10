import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardReviews from './../movie-card-reviews/movie-card-reviews.jsx';
import {Provider} from "react-redux";
import store, {filmsMock} from '../../mock-service';

it(`SnapshotTest MovieCardReviews`, () => {
  const tree = renderer
  .create(
      <Provider store={store}>
        <MovieCardReviews
          film = {filmsMock[0]}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
  .toJSON();

  expect(tree).toMatchSnapshot();
});
