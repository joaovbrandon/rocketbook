import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './style.scss';

const PostHeader = ({ author, timestamp }) => {
  const { profileImage, name } = author;

  return (
    <div className="post-header">
      <img src={profileImage} alt={name} />
      <div className="infos">
        <span className="name">{name}</span>
        <span className="timestamp">{timestamp}</span>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  author: PropTypes.shape({
    profileImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  timestamp: PropTypes.string.isRequired,
};

export default PostHeader;
