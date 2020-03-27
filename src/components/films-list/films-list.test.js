import React from 'react';
import renderer from 'react-test-renderer';
import FilmsList from './films-list.jsx';
import {Provider} from "react-redux";
import store, {filmsMock} from '../../mock-service';
import {Router} from "react-router-dom";
import history from "../../history.js";

it(`SnapshotTest FilmList`, () => {


  const tree = renderer
  .create(
      <Provider store={store}>
        <Router
          history={history}
        >
          <FilmsList
            films = {filmsMock}
            genreToFilter = {store.genreToFilter}
          />
        </Router>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
