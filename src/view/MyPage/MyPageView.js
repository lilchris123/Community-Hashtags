import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import Category from "../../shared/components/Category/Category";
import PostModal from "../../shared/components/PostModal/PostModal";
import LoadingOverlay from "../../shared/components/LoadingOverlay/LoadingOverlay";
import style from "./MyPage.module.scss";

const MyPageView = (props) => {
  const {
    isLoading,
    user,
    isLoggedIn,
    getUserFromToken,
    logoutUser,
    copiedHashtags,
    fetchUserPosts,
    posts,
  } = props;
  const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn) getUserFromToken();
    fetchUserPosts();
  }, [isLoggedIn, getUserFromToken, fetchUserPosts]);

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
  return (
    <>
      <div className={`mainContent ${style.padding}`}>
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
        {isLoading.length > 0 && (
          <LoadingOverlay />
        )}
        <Container>
          <Row className="my-3">
            <Category
              category={posts}
              copiedHashtags={copiedHashtags}
              handleUpdate={handleUpdate}
              handleCopy={handleCopy}
              handleRemove={handleRemove}
              currentUser={user && user.username}
            />
          </Row>
        </Container>
      </div>
    </>
  );
};

MyPageView.propTypes = {
  isLoading: PropTypes.arrayOf(String).isRequired,
  user: PropTypes.shape().isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  getUserFromToken: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  updateCopiedHashtags: PropTypes.func.isRequired,
  copiedHashtags: PropTypes.string,
  fetchUserPosts: PropTypes.func.isRequired,
  posts: PropTypes.shape().isRequired,
  createPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
};
MyPageView.defaultProps = {
  copiedHashtags: null,
};

export default MyPageView;
