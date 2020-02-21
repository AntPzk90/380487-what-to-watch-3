import React from 'react';
import PropTypes from 'prop-types';


const Tabs = (props) => {

  const {changeActivePage} = props;
  console.log(changeActivePage)
  return (
    <ul className="movie-nav__list">
      <li className="movie-nav__item movie-nav__item--active">
        <a href="#" className="movie-nav__link" onClick={(evt) => {
          evt.preventDefault();
          changeActivePage(`overview`);
        }}>Overview</a>
      </li>
      <li className="movie-nav__item">
        <a href="#" className="movie-nav__link" onClick={(evt) => {
          evt.preventDefault();
          changeActivePage(`details`);
        }}>Details</a>
      </li>
      <li className="movie-nav__item">
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
};

export default Tabs;
