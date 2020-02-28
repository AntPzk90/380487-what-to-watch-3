import React from 'react';
import renderer from 'react-test-renderer';
import FilmsList from './films-list.jsx';

const films = [
  {
    title: `Bohemian rhapsody`,
    src: `bohemian-rhapsody.jpg`,
    poster: `bohemian-rhapsody.jpg`,
    titlePoster: `bohemian-rhapsody.jpg`,
    genre: `Comedy`,
    releaseDate: `2015`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
];

const genreToFilter = `All genres`;

it(`SnapshotTest FilmList`, () => {
  const tree = renderer
  .create(<FilmsList
    films = {films}
    showCardOverview = {() => {}}
    genreToFilter = {genreToFilter}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
