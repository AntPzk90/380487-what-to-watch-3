import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardOverview from './../movie-card-overview/movie-card-overview.jsx';

const film = {
  title: `Dardjeeling limited`,
  src: `dardjeeling-limited.jpg`,
  poster: `dardjeeling-limited.jpg`,
  titlePoster: `dardjeeling-limited.jpg`,
  genre: `Comedy`,
  releaseDate: `2016`,
};

it(`SnapshotTest MovieCardOverview`, () => {
  const tree = renderer
  .create(<MovieCardOverview
    film = {film}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
