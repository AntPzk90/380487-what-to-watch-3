import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardDetails from './../movie-card-details/movie-card-details.jsx';
import {Provider} from "react-redux";
import store, {filmsMock} from '../../mock-service';

it(`SnapshotTest MovieCardDetails`, () => {

  const tree = renderer
  .create(
      <Provider store={store}>
        <MovieCardDetails
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
