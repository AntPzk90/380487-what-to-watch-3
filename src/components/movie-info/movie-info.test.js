import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfo from './movie-info.jsx';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const showFilmCardMock = {
  title: `Bohemian rhapsody`,
  src: `bohemian-rhapsody.jpg`,
  poster: `bohemian-rhapsody.jpg`,
  titlePoster: `bohemian-rhapsody.jpg`,
  genre: `Comedy`,
  releaseDate: `2015`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`SnapshotTest MovieInfo`, () => {

  const store = mockStore({
    showFilmCard: showFilmCardMock,
    activePage: `overview`,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <MovieInfo
            film = {store.showFilmCard}
            activePage = {store.activePage}
            onTabClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
