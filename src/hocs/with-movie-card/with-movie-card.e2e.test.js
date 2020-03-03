import React from "react";
import PropTypes from 'prop-types';
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withMovieCard from "./with-movie-card.jsx";

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

const MovieCard = (props) => {
  const {onCardMouseLeave, onCardMouseEnter} = props;
  return (
    <div>
      <div
        onMouseLeave = {onCardMouseLeave}
        onMouseEnter = {onCardMouseEnter}>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  onCardMouseLeave: PropTypes.func,
  onCardMouseEnter: PropTypes.func,
};

it(`Should video be mouseLeave`, () => {
  const HOC = withMovieCard(MovieCard);

  const onCardMouseLeave = jest.fn();
  const onCardMouseEnter = jest.fn();

  const wrapper = mount(
      <HOC
        film = {film}
        onCardMouseLeave = {onCardMouseLeave}
        onCardMouseEnter = {onCardMouseEnter}
      />
  );

  expect(wrapper.state().isPlay).toEqual(false);
});
