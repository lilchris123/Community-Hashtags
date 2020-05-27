/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import "./Hashtags.scss";

const Post = (props) => {
  const { index, post, isCopied, onCopy } = props;
  const badgeColor = isCopied === false ? "badge-info" : "badge-danger";
  const copyBtnText = isCopied === false ? "copy" : "copied";
  return (
    <div key={index} className="hashtags-container col m-2">
      <i className='fa fa-user'> {post.createdBy}</i>
      <p className='description'>{post.description}</p>
      <p className='hashtags'>{post.hashtags.map((i) => `${i} `)}</p>
      <div className="hashtags-stat-container">
        <i className="fa fa-heart"> {post.likes}</i>
        <p className={`badge ${badgeColor}`} onClick={() => onCopy(index)}>
          {copyBtnText}
        </p>
      </div>
    </div>
  );
};

Post.propTypes = {
  index: PropTypes.number.isRequired,
  post: PropTypes.shape().isRequired,
  isCopied: PropTypes.bool.isRequired,
  onCopy: PropTypes.func,
};
Post.defaultProps = {
  onCopy: () => {},
};

export default Post;
