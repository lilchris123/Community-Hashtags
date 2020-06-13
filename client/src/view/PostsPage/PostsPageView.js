import React, { Component } from "react";
import PropTypes from "prop-types";
import {Container, Row} from 'react-bootstrap';
import Category from "../../shared/components/Category/Category";
import LoadingOverlay from "../../shared/components/LoadingOverlay/LoadingOverlay";
// import style from './PostsPage.module.scss';

class PostsPageView extends Component {
  componentDidMount() {
    const { fetchHashtagsByCategory, match } = this.props;
    fetchHashtagsByCategory(match.params.category);
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
    const { categoryData, copiedHashtags, user, isLoading } = this.props;
    return (
      <div className="mainContent">
        <h3 className="display-5 d-flex justify-content-center text-capitalize">
          {categoryData.name}
        </h3>
        {isLoading.filter(item => !/LIKE/i.test(item)).length > 0 && (
          <LoadingOverlay />)}
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
  isLoading: PropTypes.arrayOf(String).isRequired,
  categoryData: PropTypes.shape().isRequired,
  copiedHashtags: PropTypes.string,
  match: PropTypes.shape().isRequired,
  fetchHashtagsByCategory: PropTypes.func.isRequired,
  updateCopiedHashtags: PropTypes.func.isRequired,
  user: PropTypes.shape(),
  likePost: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired,
};
PostsPageView.defaultProps = {
  copiedHashtags: null,
  user: null,
};
export default PostsPageView;
