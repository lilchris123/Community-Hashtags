import React, { Component } from "react";
import PropTypes from "prop-types";
import {Container, Row} from 'react-bootstrap';
import Category from "../../shared/components/Category/Category";
// import style from './PostsPage.module.scss';

class PostsPageView extends Component {
  componentDidMount() {
    const { fetchHashtagsByCategory, getUserByToken, match } = this.props;
    fetchHashtagsByCategory(match.params.category);
    getUserByToken();
  }

  handleCopy = (id) => {
    const { updateCopiedHashtags } = this.props;
    updateCopiedHashtags(id);
  };

  handleRemove = (id) => {
    const { removePost } = this.props;
    removePost(id);
  };

  handleLike= (id) => {
    const { likePost }= this.props;
    likePost(id);
  } 

  render() {
    const { categoryData, copiedHashtags, user } = this.props;
    return (
      <div className="mainContent">
        <h3 className="display-5 d-flex justify-content-center text-capitalize">
          {categoryData.name}
        </h3>
        <Container>
          <Row className="my-3">
            <Category
              category={categoryData}
              copiedHashtags={copiedHashtags}
              handleLike={this.handleLike}
              handleCopy={this.handleCopy}
              handleRemove={this.handleRemove}
              currentUser={user && user.username}
            />
          </Row>
        </Container>
      </div>
    );
  }
}
PostsPageView.propTypes = {
  categoryData: PropTypes.shape().isRequired,
  copiedHashtags: PropTypes.string,
  match: PropTypes.shape().isRequired,
  fetchHashtagsByCategory: PropTypes.func.isRequired,
  updateCopiedHashtags: PropTypes.func.isRequired,
  getUserByToken: PropTypes.func.isRequired,
  user: PropTypes.shape(),
  likePost: PropTypes.func,
  removePost: PropTypes.func,
};
PostsPageView.defaultProps = {
  copiedHashtags: null,
  likePost: () => {},
  removePost: () => {},
  user: null,
};
export default PostsPageView;
