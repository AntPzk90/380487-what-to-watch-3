import React from 'react';
import renderer from 'react-test-renderer';
import SimilarFilms from './similar-films.jsx';
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../history.js";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const filmsMock = [
  {
    name: `War of the Worlds`,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/War_of_the_Worlds.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/war-of-the-worlds.jpg`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/War_of_the_Worlds.jpg`,
    backgroundColor: `#9B7E61`,
    description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`,
    rating: 9.3,
    scoresCount: 386834,
    director: `Steven Spielberg`,
    starring: [`Tom Cruise`, `Dakota Fanning`, `Tim Robbins`],
    runTime: 116,
    genre: `Adventure`,
    released: 2005,
    id: 1,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
  {
    name: `War of the Worlds`,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/War_of_the_Worlds.jpg`,
    previewImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/war-of-the-worlds.jpg`,
    backgroundImage: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/War_of_the_Worlds.jpg`,
    backgroundColor: `#9B7E61`,
    description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`,
    rating: 9.3,
    scoresCount: 386834,
    director: `Steven Spielberg`,
    starring: [`Tom Cruise`, `Dakota Fanning`, `Tim Robbins`],
    runTime: 116,
    genre: `Adventure`,
    released: 2005,
    id: 1,
    isFavorite: false,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
];

it(`SnapshotTest SimilarFilms`, () => {

  const store = mockStore({
    DATA: {film: filmsMock, promoFilm: filmsMock[0]},
    APPLICATION: {genre: `drama`},
    USER: {authorizationStatus: `AUTH`}
  });

  const tree = renderer
  .create(
      <Provider store={store}>
        <Router
          history={history}
        >
          <SimilarFilms
            similarFilms = {filmsMock}
          />
        </Router>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
