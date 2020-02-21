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
    const {films} = this.props;
    const {showCardOverview} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
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
  showCardOverview: PropTypes.func
};
export default FilmsList;
