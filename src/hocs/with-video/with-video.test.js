import React from 'react';
import renderer from 'react-test-renderer';
import withVideo from './with-video.jsx';

const isPlayMock = false;
const isPauseMock = false;
const isAutoplayMock = true;
const isMutedMock = true;

it(`SnapshotTest withVideo`, () => {

  const tree = renderer
  .create(
      <withVideo
        isPlay = {isPlayMock}
        isPause = {isPauseMock}
        isAutopla = {isAutoplayMock}
        isMutedMock = {isMutedMock}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
