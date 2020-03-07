import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

it(`SnapshotTest Tabs`, () => {

  const store = mockStore({
    APPLICATION: {activePage: 'overview'}
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <Tabs
          changeActivePage = {() => {}}
          activeTab = {store.APPLICATION}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
  .toJSON();

  expect(tree).toMatchSnapshot();
});
