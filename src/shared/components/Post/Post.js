/* eslint-disable no-alert */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import { Badge, FormGroup, FormControl } from "react-bootstrap";
import PostModal from '../PostModal/PostModal';
import style from "./Post.module.scss";

const Post = (props) => {
  const { post, isCopied, onCopy, handleUpdate, handleCreate, onRemove, currentUser } = props;
  const isEditable = post.createdBy === currentUser;
  const badgeColor = isCopied === false ? "info" : "danger";
  const copyBtnText = isCopied === false ? "copy" : "copied";
  let isReported = false;

  return (
    <>
        <div className={`${style['hashtags-container']} col m-2`}>
          { isEditable ?
          <div className="d-flex justify-content-between mt-1">
            <i className="fa fa-user"> {post.createdBy}</i>
            <PostModal isUpdate onUpdate={handleUpdate} onCreate={handleCreate} post={post}/>
          </div>  
          :
          <i className="fa fa-user"> {post.createdBy}</i>
          }
          <p className={style.description}>{post.description}</p>
      
          <FormGroup controlId={`tags${post._id}`}>
                  <FormControl
                    name={`tags${post._id}`}
                    size="sm"
                    as="textarea"
                    rows={3}
                    value={post.hashtags.map((i) => `${i} `)}
                    className={style.textarea}
                    readOnly
                  />
          </FormGroup>
          <div className={`${style['hashtags-stat-container']}`}>
            <i className="fa fa-heart"> {post.likes}</i>
            <div>
              <Badge
                variant={badgeColor}
                className="mr-2"
                onClick={() => onCopy(post._id)}
              >
                {copyBtnText}
              </Badge>
              {currentUser && !isEditable &&
              <Badge
                variant="warning"
                onClick={() => {
                  isReported = !isReported;
                }}
              >
                {isReported === false ? "report" : "reported"}
              </Badge>
              }
              { isEditable &&
              <Badge 
              variant="danger"
              onClick={() => onRemove(post._id)}
              >remove</Badge>
              }
            </div>
          </div>
        </div>
    </>
  );
};

Post.propTypes = {
  post: PropTypes.shape().isRequired,
  isCopied: PropTypes.bool.isRequired,
  onCopy: PropTypes.func,
  currentUser: PropTypes.string,
  onRemove: PropTypes.func,
  handleUpdate: PropTypes.func,
  handleCreate: PropTypes.func
};
Post.defaultProps = {
  onCopy: () => {},
  onRemove: () => {},
  handleUpdate: () => {},
  handleCreate: () => {},
  currentUser: null
};

export default Post;
