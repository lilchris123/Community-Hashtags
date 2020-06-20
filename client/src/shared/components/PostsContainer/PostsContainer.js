import React from "react";
import {Container, Row} from "react-bootstrap";
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';
import PostList from '../../components/PostList/PostList';
import NoPosts from '../NoPosts/NoPosts';

const PostsContainer = (props) => {
    const {posts, copiedHashtags, user,
        isLoading,handleCopy, handleLike, handleRemove, handleUpdate, title
      } = props;
  return (
    <>
      <h3 className="display-5 d-flex justify-content-center text-capitalize"> {title}</h3>
      {(isLoading.filter((item) => !/LIKE/i.test(item)).length > 0 ) && <LoadingOverlay />}
      <Container>
      { posts.posts && posts.posts.length ?
        <Row className="my-3">
          <PostList
            posts={posts}
            copiedHashtags={copiedHashtags}
            handleLike={handleLike}
            handleUpdate={handleUpdate}
            handleCopy={handleCopy}
            handleRemove={handleRemove}
            currentUser={user && user.username}
          />
        </Row>
        :
        <NoPosts text='No Post Available'/>}
      </Container>
    </>
  );
};

export default PostsContainer;
