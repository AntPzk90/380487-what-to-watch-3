import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from './../main/main.jsx';
import {connect} from 'react-redux';
import MovieInfo from '../movie-info/movie-info.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import {getAllFilms} from '../../reducer/data/selectors.js';
import {getShowFilmsCard} from '../../reducer/application/selectors.js';
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderApp() {

    const {
      // authorizationStatus,
      poster,
      films,
      showFilmCard,
    } = this.props;

    if (showFilmCard === null) {

      return (
        <Main
          films={films}
          title={poster.title}
          genre={poster.genre}
          releaseDate={poster.releaseDate}
        />
      );
    } else
    if (showFilmCard) {
      return (
        <MovieInfo/>
      );
    } else {
      return null;
    }
  }

  render() {

    const {login} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MovieInfo/>
          </Route>
          <Route exact path="/sign">
            <SignIn
              onSubmit={login}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  poster: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.string,
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        previewImage: PropTypes.string,
        backgroundImage: PropTypes.string,
        backgroundColor: PropTypes.string,
        decription: PropTypes.string,
        rating: PropTypes.number,
        scoresCount: PropTypes.number,
        director: PropTypes.string,
        starring: PropTypes.array,
        genre: PropTypes.string,
        released: PropTypes.number,
        id: PropTypes.number,
        isFavorite: PropTypes.bool,
        videoLink: PropTypes.string,
        previewVideoLink: PropTypes.string
      }).isRequired
  ),
  showFilmCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previewImage: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    decription: PropTypes.string,
    rating: PropTypes.number,
    scoresCount: PropTypes.number,
    director: PropTypes.string,
    starring: PropTypes.array,
    genre: PropTypes.string,
    released: PropTypes.number,
    id: PropTypes.number,
    isFavorite: PropTypes.bool,
    videoLink: PropTypes.string,
    previewVideoLink: PropTypes.string
  }),
  login: PropTypes.func,

};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
    poster: state.APPLICATION.poster,
    films: getAllFilms(state),
    showFilmCard: getShowFilmsCard(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login(authData) {
      dispatch(UserOperation.login(authData));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
