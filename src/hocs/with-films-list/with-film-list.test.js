import React from 'react';
import renderer from 'react-test-renderer';
import withFilmsList from './with-films-list.jsx';

const filmMock = {
  title: `Bohemian rhapsody`,
  src: `bohemian-rhapsody.jpg`,
  poster: `bohemian-rhapsody.jpg`,
  titlePoster: `bohemian-rhapsody.jpg`,
  genre: `Comedy`,
  releaseDate: `2015`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`SnapshotTest withFilmsList`, () => {

  const tree = renderer
  .create(
      <withFilmsList
        film = {filmMock}
        onCardMouseEnter = {() => {}}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
