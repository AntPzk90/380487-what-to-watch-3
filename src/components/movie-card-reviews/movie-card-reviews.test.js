import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardReviews from './movie-card-reviews.jsx';
import {Provider} from "react-redux";
import reducer from '../../reducer/reducer.js';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from '../../api.js';

const reviewsMock = [
  {
    "id": 1,
    "user": {
      "id": 4,
      "name": `Kate Muir`
    },
    "rating": 8.9,
    "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    "date": `2019-05-08T14:13:56.569Z`
  },
  {
    "id": 1,
    "user": {
      "id": 4,
      "name": `Kate Muir`
    },
    "rating": 8.9,
    "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    "date": `2019-05-08T14:13:56.569Z`
  }
];

const filmMock = {
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
};

it(`SnapshotTest MovieCardReviews`, () => {

  const api = createAPI();

  const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));
  const tree = renderer
  .create(
      <Provider store={store}>
        <MovieCardReviews
          reviews = {reviewsMock}
          film = {filmMock}
        />
      </Provider>
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
