import React from 'react';
import renderer from 'react-test-renderer';
import withMovieInfo from './with-movie-info.jsx';


it(`SnapshotTest withMovieInfo`, () => {

  const tree = renderer
  .create(
      <withMovieInfo
        onTabClick={() => {}}
        activePage={`overview`}
        />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
