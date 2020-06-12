/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { Badge, FormGroup, FormControl, Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom'
import PostModal from "../PostModal/PostModal";
import style from "./Post.module.scss";

const Post = (props) => {
  const {
    post,
    isCopied,
    onCopy,
    onLike,
    handleUpdate,
    handleCreate,
    onRemove,
    currentUser,
  } = props;
  const history = useHistory();
  const isEditable = post.createdBy === currentUser;
  const badgeColor = isCopied === false ? "info" : "success";
  const copyBtnText = isCopied === false ? "copy" : "copied";
  let isReported = false;

  const canLike = () => {
    if (currentUser && post.likedBy.includes(currentUser)) {
      onLike(post._id);
      post.likedBy = post.likedBy.filter((user) => user !== currentUser);
    } else if (currentUser && !post.likedBy.includes(currentUser)) {
      onLike(post._id);
      post.likedBy = [...post.likedBy, currentUser];
    }
    else
      history.push('/login');
  };

  return (
    <Col xs={12} sm={6}>
      <div className={`${style["hashtags-container"]} col my-2`}>
        {isEditable ? (
          <div className="d-flex justify-content-between mt-1">
            <i className="fa fa-user"> {post.createdBy}</i>
            <PostModal
              isUpdate
              onUpdate={handleUpdate}
              onCreate={handleCreate}
              post={post}
            />
          </div>
        ) : (
          <i className="fa fa-user"> {post.createdBy}</i>
        )}
        <p className={style.description}>{post.description}</p>

        <FormGroup controlId={`tags${post._id}`}>
          <FormControl
            name={`tags${post._id}`}
            as="textarea"
            rows={3}
            value={post.hashtags.map((i) => `${i} `)}
            className={style.textarea}
            readOnly
          />
        </FormGroup>
        <div className={`${style["hashtags-stat-container"]}`}>
          {!post.likedBy.includes(currentUser) ? (
            <i className="fa fa-heart" role="button" onClick={() => canLike()}>
              {` ${post.likedBy.length}`}
            </i>
          ) : (
            <i
              className={`fa fa-heart ${style.liked}`}
              role="button"
              onClick={() => canLike()}
            >
             {` ${post.likedBy.length}`}
            </i>
          )}
          <div>
            <Badge
              variant={badgeColor}
              className={`${style.badge} mr-2`}
              onClick={() => onCopy(post._id)}
            >
              {copyBtnText}
            </Badge>
            {currentUser && !isEditable && (
              <Badge
                variant="warning"
                className={`${style.disabled}`}
                onClick={() => {
                  isReported = !isReported;
                }}
              >
                {isReported === false ? "report" : "reported"}
              </Badge>
            )}
            {isEditable && (
              <Badge
                variant="danger"
                className={`${style.badge}`}
                onClick={() => onRemove(post._id)}
              >
                remove
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

Post.propTypes = {
  post: PropTypes.shape().isRequired,
  isCopied: PropTypes.bool.isRequired,
  onCopy: PropTypes.func,
  currentUser: PropTypes.string,
  onLike: PropTypes.func.isRequired,
  onRemove: PropTypes.func,
  handleUpdate: PropTypes.func,
  handleCreate: PropTypes.func,
};
Post.defaultProps = {
  onCopy: () => {},
  onRemove: () => {},
  handleUpdate: () => {},
  handleCreate: () => {},
  currentUser: null,
};

export default Post;
