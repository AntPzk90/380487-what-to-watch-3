import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './../vidoe-player/video-player.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  title: `Shutter island`,
  src: `shutter-island.jpg`,
  poster: `shutter-island.jpg`,
  titlePoster: `shutter-island.jpg`,
  genre: `Drama`,
  releaseDate: `2019`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

it(`Should video be mouseLeave`, () => {
  const onCardMouseLeave = jest.fn();

  const videoPlayer = shallow(
      <VideoPlayer
        film = {film}
        onCardMouseLeave = {onCardMouseLeave}
      />
  );

  expect(videoPlayer.state().isPlay).toEqual(false);
  expect(videoPlayer.state().isPause).toEqual(false);
});
