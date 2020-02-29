import React from 'react';
import renderer from 'react-test-renderer';
import withMovieCard from './with-movie-card.jsx';

const isPlayMock = false;

it(`SnapshotTest withMovieCard`, () => {

  const tree = renderer
  .create(
      <withMovieCard
        isPlay = {isPlayMock}
        onCardMouseHove = {() => {}}
        onCardMouseLeave = {() => {}}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
