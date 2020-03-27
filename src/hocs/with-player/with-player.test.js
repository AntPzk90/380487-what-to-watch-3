import React from 'react';
import renderer from 'react-test-renderer';
import withPlayer from './with-player.jsx';


it(`SnapshotTest withPlayer`, () => {

  const tree = renderer
  .create(
      <withPlayer
      isElepsed={0}
      isPlaying={true}
      isPause={false}
      fullTime={null}
      isFullScreen={false}
      onFullScreenCkick={() => {}}
      onPlayBtnClick={() => {}}
      playerRef={() => {}}
      onExitBtnClick={() => {}}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
