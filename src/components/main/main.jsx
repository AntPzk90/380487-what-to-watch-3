import React from 'react';
import PropTypes from 'prop-types';
import FilmsList from '../films-list/films-list.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';
import {connect} from 'react-redux';
import {getAllFilms, getPoster} from '../../reducer/data/selectors.js';
import withMain from '../../hocs/with-main/with-main.jsx';
import history from '../../history.js';
import {AppRoute} from '../../const.js';
import {Operation} from '../../reducer/data/data.js';
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";

const Main = (props) => {
  const {
    promoFilm,
    films,
    count,
    isShowBtn,
    onShowMoreBtnClick,
    authorizationStatus,
    onMyListBtnClick
  } = props;

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <Logo/>

          <UserBlock/>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoFilm.poster} alt={`${promoFilm.name} poster`} width={218} height={327} />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button"
                  onClick={()=>{
                    history.push(`${AppRoute.PLAYER}/${promoFilm.id}`);
                  }}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button"
                  onClick={() => {
                    onMyListBtnClick(promoFilm, authorizationStatus);
                  }}
                >
                  {promoFilm.isFavorite ?
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList
            films={films}
          />
          <FilmsList
            count={count}
          />
          {isShowBtn
            ? <div className="catalog__more">
              <button className="catalog__button" type="button" onClick = {() => {
                onShowMoreBtnClick();
              }}>Show more</button>
            </div>
            : ``
          }
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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

Main.propTypes = {
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
  promoFilm: PropTypes.shape({
    name: PropTypes.string,
    poster: PropTypes.string,
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
  }).isRequired,
  onMyListBtnClick: PropTypes.func,
  onShowMoreBtnClick: PropTypes.func,
  count: PropTypes.number.isRequired,
  isShowBtn: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    films: getAllFilms(state),
    promoFilm: getPoster(state),
    authorizationStatus: getAuthorizationStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onMyListBtnClick(data, authorizationStatus) {
    if (authorizationStatus === `NO_AUTH`) {
      history.push(AppRoute.LOGIN);
    }
    let status = data.isFavorite ? 0 : 1;
    dispatch(Operation.changeFavoriteStatus(data, status));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withMain(Main));
