import React from 'react';
import renderer from 'react-test-renderer';
import FilmsList from './films-list.jsx';
import {Provider} from "react-redux";
import store, {filmsMock} from '../../mock-service';

it(`SnapshotTest FilmList`, () => {


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
