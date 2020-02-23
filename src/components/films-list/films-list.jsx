import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from './../movie-card/movie-card.jsx';

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      film: null
    };

    this.onCardMouseEnter = this.onCardMouseEnter.bind(this);
  }

  onCardMouseEnter(film) {
    this.setState({film});
  }

  render() {

    const {films} = this.props;
    const {showCardDetails} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => {
          return (
            <MovieCard key={film.title}
              film={film}
              onCardMouseEnter={this.onCardMouseEnter}
              showCardDetails={showCardDetails}
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
  showCardDetails: PropTypes.func
};
export default FilmsList;
