import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './../movie-card/movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {title: `Revenant`, src: `revenant.jpg`};

it(`Should cardMovie be mouseEnter`, () => {
  const onCardMouseEnter = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film = {film}
        onCardMouseEnter = {onCardMouseEnter}
      />
  );

  const catalogMovieCard = movieCard.find(`.catalog__movies-card`);

  catalogMovieCard.simulate(`mouseEnter`);

  expect(onCardMouseEnter).toHaveBeenCalledTimes(1);
  expect(onCardMouseEnter.mock.calls[0][0]).toMatchObject(film);
});
