import React from 'react';
import renderer from 'react-test-renderer';
import FilmsList from './../films-list/films-list.jsx';

const films = [
  {
    title: `Midnight special`,
    src: `midnight-special.jpg`,
  },
  {
    title: `Revenant`,
    src: `revenant.jpg`,
  },
];

it(`SnapshotTest FilmList`, () => {
  const tree = renderer
  .create(<FilmsList
    films = {films}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
