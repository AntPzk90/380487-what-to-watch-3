import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from './../movie-card/movie-card.jsx';

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      film: null,
    };

    this.onCardMouseEnter = this.onCardMouseEnter.bind(this);
  }

  onCardMouseEnter(film) {
    this.setState({
      film
    });
  }

  render() {

    const {films, showCardOverview, genreToFilter} = this.props;

    const filteredFilms = (filterFilms, filterGenre) => {
      switch (filterGenre) {
        case `All genres`:
          return filterFilms;
        default:
          return filterFilms.filter((it) => it.genre === filterGenre);
      }
    };

    return (
      <div className="catalog__movies-list">
        {filteredFilms(films, genreToFilter).map((film) => {
          return (
            <MovieCard key={film.title}
              film={film}
              onCardMouseEnter={this.onCardMouseEnter}
              showCardOverview={showCardOverview}
            />
          );
        })}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      }).isRequired
  ),
  showCardOverview: PropTypes.func,
  genreToFilter: PropTypes.string.isRequired,
};


export default FilmsList;
