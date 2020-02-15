import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardDetails from './../movie-card-details/movie-card-details.jsx';

const film = {
  title: `Dardjeeling limited`,
  src: `dardjeeling-limited.jpg`,
  poster: `dardjeeling-limited.jpg`,
  titlePoster: `dardjeeling-limited.jpg`,
  genre: `Comedy`,
  releaseDate: `2016`,
};

it(`SnapshotTest MovieCard`, () => {
  const tree = renderer
  .create(<MovieCardDetails
    film = {film}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
