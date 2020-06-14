/* eslint-disable no-console */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import Category from "../../shared/components/Category/Category";
import CategoriesContainer from "../Categories/CategoriesContainer";
import LoadingOverlay from "../../shared/components/LoadingOverlay/LoadingOverlay";
import style from "./MainContent.module.scss";

export default class MainContentView extends Component {
  // fetch all the hashtags after mounting the component
  componentDidMount() {
    const {
      fetchCategories,
      fetchHashtagsByCategory
    } = this.props;
    fetchCategories();
    fetchHashtagsByCategory("popular");
  }

  handleCopy = (id) => {
    const { updateCopiedHashtags } = this.props;
    updateCopiedHashtags(id);
  };

  handleRemove = (id) => {
    const { removePost } = this.props;
    removePost(id);
  };

  handleLike = (id) => {
    const { likePost } = this.props;
    likePost(id);
  };

  handleUpdate = (post) => {
    const { updatePost } = this.props;
    updatePost(post);
  };

  render() {
    const {
      categoryData,
      copiedHashtags,
      user,
      isLoadingMainContent,
      isLoadingUser,
    } = this.props;
    return (
      <>
        <div className={`${style.content}`}>
          <h3 className="display-5 d-flex justify-content-center">
            {" "}
            Top Hashtags
          </h3>
          {(isLoadingMainContent.filter(item => !/LIKE/i.test(item)).length > 0 || isLoadingUser.length > 0) && (
          <LoadingOverlay />
        )}
          <Container>
            <Row className="my-3">
              <Category
                category={categoryData}
                copiedHashtags={copiedHashtags}
                handleLike={this.handleLike}
                handleUpdate={this.handleUpdate}
                handleCopy={this.handleCopy}
                handleRemove={this.handleRemove}
                currentUser={user && user.username}
              />
            </Row>
          </Container>
        </div>
        <CategoriesContainer />
      </>
    );
  }
}
MainContentView.propTypes = {
  isLoadingMainContent: PropTypes.arrayOf(String).isRequired,
  isLoadingUser: PropTypes.arrayOf(String).isRequired,
  categoryData: PropTypes.shape().isRequired,
  copiedHashtags: PropTypes.string,
  fetchCategories: PropTypes.func.isRequired,
  fetchHashtagsByCategory: PropTypes.func.isRequired,
  updateCopiedHashtags: PropTypes.func.isRequired,
  user: PropTypes.shape(),
  likePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  removePost: PropTypes.func.isRequired
};
MainContentView.defaultProps = {
  copiedHashtags: null,
  user: {},
};
