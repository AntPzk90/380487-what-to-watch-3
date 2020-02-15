import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from './../main/main.jsx';
import MovieCardDetails from '../movie-card-details/movie-card-details.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      film: null,
    };
  }

  renderApp() {
    const {title, genre, releaseDate, films} = this.props;
    const {film} = this.state;
    if (film === null) {
      return (
        <Main
          films={films}
          title={title}
          genre={genre}
          releaseDate={releaseDate}
          onMovieCardTitleMouseEnter={() => { }}

          showCardDetails = {(filmData) => {
            this.setState({
              film: filmData
            });
          }}
        />
      );
    }
    if (film) {
      return (
        <MovieCardDetails
          film = {film}
        />
      );
    }
    return null;
  }

  render() {

    const {film} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this.renderApp()}
          </Route>
          <Route exact path="/dev-film">
            <MovieCardDetails
              film = {film}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      }).isRequired
  ),
  onMovieCardTitleMouseEnter: PropTypes.func
};

export default App;
