import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

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

it(`SnapshotTest Main`, () => {
  const tree = renderer
  .create(<Main
    films = {films}
    title = {`Some title`}
    genre = {`some gemre`}
    releaseDate = {`some date`}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
