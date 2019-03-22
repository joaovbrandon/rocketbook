import React from 'react';
import PropTypes from 'prop-types';

// Assets
import logo from '../../assets/images/rocketbook-logo-light.png';

// Styles
import './style.scss';

const Header = ({ title }) => (
  <header>{title ? <h1>{title}</h1> : <img src={logo} height="40" alt="Rocketbook" />}</header>
);

Header.defaultProps = {
  title: null,
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
