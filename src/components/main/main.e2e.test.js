import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const films = [
  {
    title: `Midnight special`,
    src: `midnight-special.jpg`,
  },
  {
    title: `Revenant`,
    src: `revenant.jpg`,
  },
];

it(`Should cardTitle be pressed`, () => {
  const onMovieCardTitleMouseEnter = jest.fn();

  const MainComponent = shallow(
      <Main
        films = {films}
        title = {`Some title`}
        genre = {`some gemre`}
        releaseDate = {`some date`}
        onMovieCardTitleMouseEnter = {onMovieCardTitleMouseEnter}
      />
  );

  const cardTitle = MainComponent.find(`.movie-card__title`);

  cardTitle.simulate(`click`);

  expect(onMovieCardTitleMouseEnter).toHaveBeenCalledTimes(1);
});
