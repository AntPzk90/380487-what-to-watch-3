import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardReviews from './../movie-card-reviews/movie-card-reviews.jsx';

const film = {
  title: `Dardjeeling limited`,
  src: `dardjeeling-limited.jpg`,
  poster: `dardjeeling-limited.jpg`,
  titlePoster: `dardjeeling-limited.jpg`,
  genre: `Comedy`,
  releaseDate: `2016`,
};

it(`SnapshotTest MovieCardReviews`, () => {
  const tree = renderer
  .create(<MovieCardReviews
    film = {film}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
