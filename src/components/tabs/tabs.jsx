import React from 'react';
import PropTypes from 'prop-types';


const Tabs = (props) => {

  const {changeActivePage, activeTab} = props;

  return (
    <ul className="movie-nav__list">
      <li className={`movie-nav__item ${activeTab === `overview` ? `movie-nav__item--active` : ``}`}>
        <a href="#" className="movie-nav__link" onClick={(evt) => {
          evt.preventDefault();
          changeActivePage(`overview`);
        }}>Overview</a>
      </li>
      <li className={`movie-nav__item ${activeTab === `details` ? `movie-nav__item--active` : ``}`}>
        <a href="#" className="movie-nav__link" onClick={(evt) => {
          evt.preventDefault();
          changeActivePage(`details`);
        }}>Details</a>
      </li>
      <li className={`movie-nav__item ${activeTab === `reviews` ? `movie-nav__item--active` : ``}`}>
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
  activeTab: PropTypes.string,
};

export default Tabs;
