import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import PostModal from "../../shared/components/PostModal/PostModal";
import PostsContainer from '../../shared/components/PostsContainer/PostsContainer';
import style from "./MyPage.module.scss";

const MyPageView = (props) => {
  const {
    user,
    logoutUser,
    fetchUserPosts,
  } = props;
  const history = useHistory();

  useEffect(() => {
    fetchUserPosts();
  },[fetchUserPosts]);

  const logout = () => {
    logoutUser();
    history.push("/");
  };

  const handleCopy = (id) => {
    const { updateCopiedHashtags } = props;
    updateCopiedHashtags(id);
  };

  const handleRemove = (id) => {
    const { removePost } = props;
    removePost(id);
  };
  const handleCreate = (post) => {
    const { createPost } = props;
    createPost(post);
  };
  const handleUpdate = (post) => {
    const { updatePost } = props;
    updatePost(post);
  };

  const handleLike = (id) => {
    const { likePost } = props;
    likePost(id);
  };

  return (
      <div className={`content ${style.padding}`}>
        <Container>
          <Row>
            <Col xs={12} sm={6}>
              <h3 className='display-5'>Welcome {user.username}</h3>
              </Col>
            <Col xs={12} sm={6} className='d-flex justify-content-around'>
                <Button variant='outline-danger' onClick={() => logout()}>Logout</Button>
                <PostModal onCreate={handleCreate} />
            </Col>
          </Row>
        </Container>

        <PostsContainer {...props} handleUpdate= {handleUpdate} handleLike={handleLike} handleCopy={handleCopy}
                handleRemove={handleRemove} title='My Posts'/>
      </div>
  );
};

MyPageView.propTypes = {
  isLoading: PropTypes.arrayOf(String).isRequired,
  user: PropTypes.shape().isRequired,
  logoutUser: PropTypes.func.isRequired,
  updateCopiedHashtags: PropTypes.func.isRequired,
  copiedHashtags: PropTypes.string,
  fetchUserPosts: PropTypes.func.isRequired,
  posts: PropTypes.shape().isRequired,
  likePost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
};
MyPageView.defaultProps = {
  copiedHashtags: null,
};

export default MyPageView;
