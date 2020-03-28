import React from 'react';
import renderer from 'react-test-renderer';
import withSignIn from './with-sign-in.jsx';


it(`SnapshotTest withSignIn`, () => {

  const tree = renderer
  .create(
      <withSignIn
        onSendForm={() => {}}
        onSubmitBtnClick={() => {}}
        isEmailInputValid={true}
        loginRef={() => {}}
        password={() => {}}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
