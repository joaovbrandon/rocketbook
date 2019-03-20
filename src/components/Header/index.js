import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './style.scss';

const Header = ({ title }) => (
  <header>
    <h1>{title}</h1>
  </header>
);

Header.defaultProps = {
  title: null,
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
