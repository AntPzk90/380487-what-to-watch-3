import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const films = [
  `Fantastic Beasts`,
  `Bohemian Rhapsody`,
  `Macbeth`
];

it(`Should cardTitle be pressed`, () => {
  const movieCardTitleHandler = jest.fn();

  const MainComponent = shallow(
      <Main
        films = {films}
        title = {`Some title`}
        genre = {`some gemre`}
        releaseDate = {`some date`}
        movieCardTitleHandler = {movieCardTitleHandler}
      />
  );

  const cardTitle = MainComponent.find(`.movie-card__title`);

  cardTitle.simulate(`click`);

  expect(movieCardTitleHandler).toHaveBeenCalledTimes(1);
});
