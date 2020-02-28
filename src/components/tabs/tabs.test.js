import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './tabs.jsx';

const activeTab = `overview`;

it(`SnapshotTest Tabs`, () => {
  const tree = renderer
  .create(<Tabs
    changeActivePage = {() => {}}
    activeTab = {activeTab}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
