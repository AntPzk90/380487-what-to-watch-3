import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const films = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`
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
