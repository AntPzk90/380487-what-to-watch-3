import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs';

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {}
};

it(`Should tabs be click`, () => {
  const changeActivePage = jest.fn();

  const tabs = shallow(
      <Tabs
        changeActivePage={changeActivePage}
        activeTab={`overview`}
      />
  );

  const tabsLink = tabs.find(`.movie-nav__link`).at(0);

  tabsLink.simulate(`click`, mockEvent);

  expect(changeActivePage).toHaveBeenCalledTimes(1);
});
