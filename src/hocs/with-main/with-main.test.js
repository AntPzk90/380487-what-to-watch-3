import React from 'react';
import renderer from 'react-test-renderer';
import withMain from './with-main.jsx';


it(`SnapshotTest withMain`, () => {

  const tree = renderer
  .create(
      <withMain
        onShowMoreBtnClick={() => {}}
        count={8}
        isShowBtn={false}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
