import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = props => (
  <Fragment>
    <article>
      <PostHeader avatar={props.posts.avatar} name={props.posts.name} time={props.posts.time} />
      <p>{props.posts.post}</p>
    </article>
  </Fragment>
);

Post.propTypes = {
  posts: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
