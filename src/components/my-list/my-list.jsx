import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';
import {Operation as DataOperation} from '../../reducer/data/data.js';
import UserBlock from '../user-block/user-block.jsx';
import FavoriteFilmsList from '../favorite-films-list/favorite-films-list.jsx';
import {connect} from 'react-redux';


class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFavoriteFilms();
  }

  render() {
    return (
      <React.Fragment>
        <div className="user-page">
          <header className="page-header user-page__head">
            <Logo/>
            <h1 className="page-title user-page__title">My list</h1>
            <UserBlock/>
          </header>
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <FavoriteFilmsList/>
          </section>
          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

MyList.propTypes = {
  getFavoriteFilms: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  getFavoriteFilms() {
    dispatch(DataOperation.getFavoriteFilms());
  }
});

export default connect(null, mapDispatchToProps)(MyList);
