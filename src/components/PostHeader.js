import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
  const src = `assets/images/${props.avatar}`;
  return (
    <Fragment>
      <div>
        <img src={src} alt="avatar" />
        <div className="header">
          <h4>{props.name}</h4>
          <p>
            há
            {props.time}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
