import React from 'react';
import renderer from 'react-test-renderer';
import withAddReviewPage from './with-add-review-page.jsx';


it(`SnapshotTest withAddReviewPage`, () => {

  const tree = renderer
  .create(
      <withAddReviewPage
        onFormSubmit={() => {}}
        isBlocked={false}
        isShowMassege = {false}
        isBlockedForm = {false}
        isError = {false}
        onInputComment = {() => {}}
        onChangeRating = {() => {}}
        rating = {0}
        comment = {``}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
