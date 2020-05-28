/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import "./Post.scss";

const Post = (props) => {
  const { post, isCopied, onCopy } = props;
  const badgeColor = isCopied === false ? "badge-info" : "badge-danger";
  const copyBtnText = isCopied === false ? "copy" : "copied";
  let isReported= false;

  return (
    <div className="hashtags-container col m-2">
      <i className="fa fa-user"> {post.createdBy}</i>
      <p className="description">{post.description}</p>
      <p className="hashtags">{post.hashtags.map((i) => `${i} `)}</p>
      <div className="hashtags-stat-container">
        <i className="fa fa-heart"> {post.likes}</i>
        <div>
          <p className={`badge ${badgeColor} mr-2`} onClick={() => onCopy(post.id)}>
            {copyBtnText}
          </p>
          <p className="badge badge-danger" onClick={() => {isReported= !isReported}}>
            {isReported === false ? 'report' : 'reported'}
          </p>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape().isRequired,
  isCopied: PropTypes.bool.isRequired,
  onCopy: PropTypes.func,
};
Post.defaultProps = {
  onCopy: () => {},
};

export default Post;
