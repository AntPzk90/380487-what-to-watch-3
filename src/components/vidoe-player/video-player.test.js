import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './../vidoe-player/video-player.jsx';

const film = {
  title: `Shutter island`,
  src: `shutter-island.jpg`,
  poster: `shutter-island.jpg`,
  titlePoster: `shutter-island.jpg`,
  genre: `Drama`,
  releaseDate: `2019`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`SnapshotTest VideoPlayer`, () => {
  const tree = renderer
  .create(<VideoPlayer
    film = {film}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
