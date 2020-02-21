import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const films = [
  {
    title: `Midnight special`,
    src: `midnight-special.jpg`
  },
  {
    title: `Revenant`,
    src: `revenant.jpg`,
  },
];

it(`SnapshotTest App`, () => {
  const tree = renderer
  .create(<App
    films = {films}
    title = {`Some title`}
    genre = {`some gemre`}
    releaseDate = {`some date`}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});