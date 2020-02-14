import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './../movie-card/movie-card.jsx';

const film = {title: `Revenant`, src: `revenant.jpg`};

it(`SnapshotTest MovieCard`, () => {
  const tree = renderer
  .create(<MovieCard
    film = {film}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
