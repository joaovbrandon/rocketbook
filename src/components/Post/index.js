import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './style.scss';

// Components
import PostHeader from '../PostHeader';

const Post = ({ postData }) => {
  const { author, timestamp, content } = postData;

  return (
    <div className="post-content">
      <PostHeader author={author} timestamp={timestamp} />
      <p>{content}</p>
    </div>
  );
};

Post.propTypes = {
  postData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.shape({
      profileImage: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    timestamp: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
