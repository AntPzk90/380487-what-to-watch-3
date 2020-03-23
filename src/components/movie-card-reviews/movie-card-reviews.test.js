import React from 'react';
import renderer from 'react-test-renderer';
import MovieCardReviews from './../movie-card-reviews/movie-card-reviews.jsx';
import {Provider} from "react-redux";
import store, {filmsMock} from '../../mock-service';

const reviewsMock = [
  {
    "id": 1,
    "user": {
      "id": 4,
      "name": "Kate Muir"
    },
    "rating": 8.9,
    "comment": "Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.",
    "date": "2019-05-08T14:13:56.569Z"
  },
  {
    "id": 1,
    "user": {
      "id": 4,
      "name": "Kate Muir"
    },
    "rating": 8.9,
    "comment": "Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.",
    "date": "2019-05-08T14:13:56.569Z"
  }
];

it(`SnapshotTest MovieCardReviews`, () => {
  const tree = renderer
  .create(
      <Provider store={store}>
        <MovieCardReviews
          reviews = {reviewsMock}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
  .toJSON();

  expect(tree).toMatchSnapshot();
});
