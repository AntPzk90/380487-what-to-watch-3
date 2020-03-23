import React, {PureComponent} from 'react';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';
import {connect} from 'react-redux';
import {getFilmForId} from '../../reducer/data/selectors';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import {Operation} from '../../reducer/data/data.js';
import {compose} from 'recompose';
import withAddRewiewPage from '../../hocs/with-add-review-page/with-add-review-page.jsx';
import withLoadingIndicator from '../../hocs/with-loading-indicator/with-loading-indicator.jsx';

class AddReviewPage extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {

    const {id, showFilmCard, isBlocked, isBlockedForm, isShowMassege, isError, onChangeRating, sendReview, onChangeComment, rating, comment} = this.props;
    const {name, poster, backgroundImage} = showFilmCard;

    return (
      <div>
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={name} />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <header className="page-header">
              <Logo/>
              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={`${AppRoute.FILM}/${id}`} className="breadcrumbs__link">{name}</Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>
              <UserBlock/>
            </header>
            <div className="movie-card__poster movie-card__poster--small">
              <img src={poster} alt={`${name} Hotel poster`} width={218} height={327} />
            </div>
          </div>
          <div className="add-review">
            <form action="#" className="add-review__form" onSubmit={(evt) => {sendReview(evt, id, rating, comment)}}>
              <div className="rating">
                <div className="rating__stars">
                  {new Array(5).fill(``).map((_, i) => {
                    let index = i + 1;
                    return(
                      <React.Fragment key={index}>
                        <input className="rating__input" id={`star-${index}`} type="radio" name="rating"
                         defaultValue={index}
                        onChange={() => {onChangeRating(index)}}/>
                        <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
                      </React.Fragment>
                    )
                  })}
                </div>
              </div>
              <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                  defaultValue={""}
                  disabled={isBlockedForm}
                  onInput={(evt) => {onChangeComment(evt)}}/>
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit"
                    disabled={isBlocked}
                    >Post</button>
                </div>
              </div>
              {isShowMassege
                ? <div className="add-review__text" style={{marginTop: `10px`, textAlign: `center`}}>
                  {isBlocked
                    ? <span> ups... min.length massege 50 letters max length 400 letters :(</span>
                    : <span> it`s OK my friend. You can send your review ;)</span>
                  }
                  {!isError
                    ? ``
                    :<span> Sorry we have a problem. try again later :(</span>
                  }
                </div>
                : ``
              }
            </form>
          </div>
        </section>
      </div>
    );
  }
};

const mapStateToProps = (state, {id}) => ({
  showFilmCard: getFilmForId(state, id),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (id, rating, comment) => dispatch(Operation.sendReview(id, rating, comment))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withLoadingIndicator,
  withAddRewiewPage
  )(AddReviewPage);
