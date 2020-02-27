import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from './../main/main.jsx';
import MovieCardOverview from '../movie-card-overview/movie-card-overview.jsx';
import MovieCardDetails from '../movie-card-details/movie-card-details.jsx';
import MovieCardReviews from '../movie-card-reviews/movie-card-reviews.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      film: null,
      activePage: `overview`,
    };
  }

  renderApp() {
    const {title, genre, releaseDate, onGenreClick, genreToFilter, films} = this.props;
    const {film, activePage} = this.state;

    if (film === null) {
      return (
        <Main
          films={films}
          onGenreClick={onGenreClick}
          title={title}
          genre={genre}
          genreToFilter={genreToFilter}
          releaseDate={releaseDate}
          onMovieCardTitleMouseEnter={() => { }}

          showCardOverview = {(filmData) => {
            this.setState({
              film: filmData
            });
          }}
        />
      );
    } else
    if (activePage === `overview`) {
      return (
        <MovieCardOverview
          film = {film}
          activeTab = {this.state.activePage}
          changeActivePage = {(innerPage) =>{
            this.setState({
              activePage: innerPage
            });
          }}
        />
      );
    } else
    if (activePage === `details`) {
      return (
        <MovieCardDetails
          film = {film}
          activeTab = {this.state.activePage}
          changeActivePage = {(innerPage) =>{
            this.setState({
              activePage: innerPage
            });
          }}
        />
      );
    } else
    if (activePage === `reviews`) {
      return (
        <MovieCardReviews
          film = {film}
          activeTab = {this.state.activePage}
          changeActivePage = {(innerPage) =>{
            this.setState({
              activePage: innerPage
            });
          }}
        />
      );
    } else {
      return null;
    }
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
  onMovieCardTitleMouseEnter: PropTypes.func,
  onGenreClick: PropTypes.func,
  genreToFilter: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  films: state.films,
  genreToFilter: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(filterGenre) {
    dispatch(ActionCreator.filterByName(filterGenre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
