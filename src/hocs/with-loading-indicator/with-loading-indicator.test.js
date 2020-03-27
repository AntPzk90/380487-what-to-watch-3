import React from 'react';
import renderer from 'react-test-renderer';
import withLoadingIndicatior from './with-loading-indicator.jsx';


it(`SnapshotTest withloadingIndicator`, () => {

  const tree = renderer
  .create(
      <withLoadingIndicatior/>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
