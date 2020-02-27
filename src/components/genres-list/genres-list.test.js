import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list.jsx';

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

it(`SnapshotTest GenresList`, () => {

  const tree = renderer
    .create(
        <GenresList
          films = {films}
          genreToFilter = {genreToFilter}
          onGenreClick={() => {}}
        />

    ).toJSON();

  expect(tree).toMatchSnapshot();
});
