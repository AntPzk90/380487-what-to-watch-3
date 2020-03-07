import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tabs from './tabs';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

const mockEvent = {
  preventDefault() {}
};

it(`Should tabs be click`, () => {

  const store = mockStore({
    APPLICATION: {activePage: 'overview'},
  });

  const changeActivePage = jest.fn();

  const tabs = mount(
      <Provider store={store}>
        <Tabs
          changeActivePage={changeActivePage}
          activeTab={store.activePage}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  );

  const tabsLink = tabs.find(`.movie-nav__link`).at(0);

  tabsLink.simulate(`click`, mockEvent);

  expect(changeActivePage).toHaveBeenCalledTimes(1);
});
