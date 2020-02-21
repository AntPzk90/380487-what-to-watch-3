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
  const showCardOverview = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film = {film}
        showCardOverview = {showCardOverview}
      />
  );

  const catalogMovieCard = movieCard.find(`.catalog__movies-card`);

  catalogMovieCard.simulate(`click`);

  expect(showCardOverview).toHaveBeenCalledTimes(1);
  expect(showCardOverview.mock.calls[0][0]).toMatchObject(film);
});

it(`Should cardMovie be click on CardTitle`, () => {
  const showCardOverview = jest.fn();

  const movieCard = shallow(
      <MovieCard
        film = {film}
        showCardOverview = {showCardOverview}
      />
  );

  const catalogMovieCardTitle = movieCard.find(`.small-movie-card__title`);
  catalogMovieCardTitle.simulate(`click`, mockEvent);

  expect(showCardOverview).toHaveBeenCalledTimes(1);
  expect(showCardOverview.mock.calls[0][0]).toMatchObject(film);
});

