import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getActiveTab} from '../../reducer/application/selectors.js';

const Tabs = (props) => {

  const {changeActivePage, activePage} = props;

  return (
    <ul className="movie-nav__list">
      <li className={`movie-nav__item ${activePage === `overview` ? `movie-nav__item--active` : ``}`}>
        <a href="#" className="movie-nav__link" onClick={(evt) => {
          evt.preventDefault();
          changeActivePage(`overview`);
        }}>Overview</a>
      </li>
      <li className={`movie-nav__item ${activePage === `details` ? `movie-nav__item--active` : ``}`}>
        <a href="#" className="movie-nav__link" onClick={(evt) => {
          evt.preventDefault();
          changeActivePage(`details`);
        }}>Details</a>
      </li>
      <li className={`movie-nav__item ${activePage === `reviews` ? `movie-nav__item--active` : ``}`}>
        <a href="#" className="movie-nav__link" onClick={(evt) => {
          evt.preventDefault();
          changeActivePage(`reviews`);
        }}>Reviews</a>
      </li>
    </ul>
  );
};

Tabs.propTypes = {
  changeActivePage: PropTypes.func,
  activePage: PropTypes.string,
};

const mapStateToProps = (state) => ({
  activePage: getActiveTab(state)
});

export default connect(mapStateToProps)(Tabs);
