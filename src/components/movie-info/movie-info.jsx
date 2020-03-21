import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/application/application';
import MovieInfoContent from './../movie-info-content/movie-info-content.jsx';
import Tabs from './../tabs/tabs.jsx';
import {Operation} from '../../reducer/data/data.js';
import {getActiveTab} from '../../reducer/application/selectors.js';
import {getFilmForId} from '../../reducer/data/selectors';
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';
import {AppRoute} from '../../const';
import history from '../../history.js';
import AddReviewBtn from '../add-review-btn/add-review-btn.jsx';
import withLoadingIndicator from '../../hocs/with-loading-indicator/with-loading-indicator.jsx';

const MovieInfo = (props) => {

  const {activePage, showFilmCard, onTabClick, changeFavoriteStatus, authorizationStatus} = props;
  const {name, poster, backgroundImage, genre, released, isFavorite, id} = showFilmCard;


  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <Logo/>
            <UserBlock/>
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button"
                  onClick={() => {
                    changeFavoriteStatus(showFilmCard, authorizationStatus);
                  }}
                >
                  {isFavorite ?
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"/>
                    </svg>
                    :
                    <svg viewBox="0 0 19 20" width={19} height={20}>
                      <use xlinkHref="#add" />
                    </svg>
                  }
                  <span>My list</span>
                </button>
                <AddReviewBtn
                  id={id}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${name} poster`} width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <nav className="movie-nav movie-card__nav">
                <Tabs
                  changeActivePage={onTabClick}
                  activePage={activePage}
                />
              </nav>
              <MovieInfoContent
                film={showFilmCard}
                activePage={activePage}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__movies-list">
            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175} />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>
            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width={280} height={175} />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>
            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width={280} height={175} />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
              </h3>
            </article>
            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width={280} height={175} />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
              </h3>
            </article>
          </div>
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
};

MovieInfo.propTypes = {
  showFilmCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    isFavorite: PropTypes.bool
  }),
  changeFavoriteStatus: PropTypes.func,
  activePage: PropTypes.string.isRequired,
  onTabClick: PropTypes.func,
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = (state, {id}) => ({
  activePage: getActiveTab(state),
  showFilmCard: getFilmForId(state, id),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTabClick(activeTab) {
    dispatch(ActionCreator.changeActiveTab(activeTab));
  },
  changeFavoriteStatus(data, authorizationStatus) {
    if (authorizationStatus === `NO_AUTH`) {
      history.push(AppRoute.LOGIN);
    }
    let status = data.isFavorite ? 0 : 1;
    dispatch(Operation.changeFavoriteStatus(data, status));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withLoadingIndicator(MovieInfo));
