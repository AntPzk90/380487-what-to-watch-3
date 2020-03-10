import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import App from './app.jsx';
import store, {filmsMock} from '../../mock-service';

it(`SnapshotTest App`, () => {


  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            films = {filmsMock}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
  .toJSON();

  expect(tree).toMatchSnapshot();
});
