import React from 'react';
import PropTypes from 'prop-types';

const Tabs = (props) => {

  const {onTabClick, activePage} = props;

  return (
    <ul className="movie-nav__list">
      <li className={`movie-nav__item ${activePage === `overview` ? `movie-nav__item--active` : ``}`}>
        <a href="#" className="movie-nav__link" onClick={(evt) => {
          evt.preventDefault();
          onTabClick(`overview`);
        }}>Overview</a>
      </li>
      <li className={`movie-nav__item ${activePage === `details` ? `movie-nav__item--active` : ``}`}>
        <a href="#" className="movie-nav__link" onClick={(evt) => {
          evt.preventDefault();
          onTabClick(`details`);
        }}>Details</a>
      </li>
      <li className={`movie-nav__item ${activePage === `reviews` ? `movie-nav__item--active` : ``}`}>
        <a href="#" className="movie-nav__link" onClick={(evt) => {
          evt.preventDefault();
          onTabClick(`reviews`);
        }}>Reviews</a>
      </li>
    </ul>
  );
};

Tabs.propTypes = {
  onTabClick: PropTypes.func,
  activePage: PropTypes.string,
};

export default Tabs;
