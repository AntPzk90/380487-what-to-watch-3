import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from './../main/main.jsx';
import MovieCardOverview from '../movie-card-overview/movie-card-overview.jsx';
import MovieCardDetails from '../movie-card-details/movie-card-details.jsx';
import MovieCardReviews from '../movie-card-reviews/movie-card-reviews.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      film: null,
      activePage: `overview`,
    };
  }

  renderApp() {
    const {title, genre, releaseDate, films} = this.props;
    const {film, activePage} = this.state;
    if (film === null) {
      return (
        <Main
          films={films}
          title={title}
          genre={genre}
          releaseDate={releaseDate}
          onMovieCardTitleMouseEnter={() => { }}
          showCardOverview = {(filmData) => {
            this.setState({
              film: filmData
            });
          }}
        />
      );
    }
    if (activePage === `overview`) {
      return (
        <MovieCardOverview
          film = {film}
          changeActivePage = {(innerPage) =>{
            this.setState({
              activePage: innerPage
            });
          }}
        />
      );
    }
    if (activePage === `details`) {
      return (
        <MovieCardDetails
          film = {film}
          changeActivePage = {(innerPage) =>{
            this.setState({
              activePage: innerPage
            });
          }}
        />
      );
    }
    if (film && activePage === `reviews`) {
      return (
        <MovieCardReviews
          film = {film}
          changeActivePage = {(innerPage) =>{
            this.setState({
              activePage: innerPage
            });
          }}
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
            <MovieCardOverview
              film = {film}
              changeActivePage={() => {}}
            />
          </Route>
          <Route exact path="/dev-film-details">
            <MovieCardDetails
              film = {film}
              changeActivePage={() => {}}
            />
          </Route>
          <Route exact path="/dev-film-reviews">
            <MovieCardReviews
              film = {film}
              changeActivePage={() => {}}
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
