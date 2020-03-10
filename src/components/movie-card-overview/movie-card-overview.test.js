import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardOverview from './../movie-card-overview/movie-card-overview.jsx';
import {Provider} from "react-redux";
import store, {filmsMock} from '../../mock-service';


it(`SnapshotTest MovieCardOverview`, () => {


  const tree = renderer
  .create(
      <Provider store={store}>
        <MovieCardOverview
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
