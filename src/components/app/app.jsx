import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from './../main/main.jsx';
import {connect} from 'react-redux';
import MovieInfo from '../movie-info/movie-info.jsx';


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  renderApp() {

    const {
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

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MovieInfo/>
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
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        titlePoster: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        releaseDate: PropTypes.string.isRequired,
      }).isRequired
  ),
  showFilmCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    titlePoster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  })
};

const mapStateToProps = (state) => ({
  poster: state.poster,
  films: state.films,
  showFilmCard: state.showFilmCard,
});

export default connect(mapStateToProps)(App);
