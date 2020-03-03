import React from "react";
import PropTypes from 'prop-types';
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withFilmsList from "./with-films-list.jsx";

configure({adapter: new Adapter()});

const film = {
  title: `Shutter island`,
  src: `shutter-island.jpg`,
  poster: `shutter-island.jpg`,
  titlePoster: `shutter-island.jpg`,
  genre: `Drama`,
  releaseDate: `2019`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
};

const WithFilmsList = (props) => {
  const {onCardClick} = props;
  return (
    <div>
      <article
        onClick = {onCardClick}>
      </article>
    </div>
  );
};

WithFilmsList.propTypes = {
  onCardClick: PropTypes.func,
};

it(`Should FilmsLisy be Click`, () => {
  const HOC = withFilmsList(WithFilmsList);

  const onCardClick = jest.fn();

  const filmsList = mount(
      <HOC
        film = {film}
        onCardClick = {onCardClick}
      />
  );

  const itemActive = filmsList.find(`article`);

  itemActive.simulate(`click`);

  expect(onCardClick).toHaveBeenCalledTimes(1);
});
