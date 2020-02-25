import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './../movie-card/movie-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  title: `Dardjeeling limited`,
  src: `dardjeeling-limited.jpg`,
  poster: `dardjeeling-limited.jpg`,
  titlePoster: `dardjeeling-limited.jpg`,
  genre: `Comedy`,
  releaseDate: `2016`,
};

const mockEvent = {
  preventDefault() {}
};

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

it(`Should cardMovie be click on Card`, () => {
  const showCardDetails = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film = {film}
        showCardDetails = {showCardDetails}
      />
  );

  const catalogMovieCard = movieCard.find(`.catalog__movies-card`);

  catalogMovieCard.simulate(`click`);

  expect(showCardDetails).toHaveBeenCalledTimes(1);
  expect(showCardDetails.mock.calls[0][0]).toMatchObject(film);
});

it(`Should cardMovie be click on CardTitle`, () => {
  const showCardDetails = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film = {film}
        showCardDetails = {showCardDetails}
      />
  );

  const catalogMovieCardTitle = movieCard.find(`.small-movie-card__title`);
  catalogMovieCardTitle.simulate(`click`, mockEvent);

  expect(showCardDetails).toHaveBeenCalledTimes(1);
  expect(showCardDetails.mock.calls[0][0]).toMatchObject(film);
});

