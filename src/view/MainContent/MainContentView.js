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
      fetchHashtagsByCategory,
      getUserByToken,
    } = this.props;
    fetchCategories();
    fetchHashtagsByCategory("popular");
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

  handleLike = (id) => {
    const { likePost } = this.props;
    likePost(id);
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
            Top HashTags
          </h3>
          {(isLoadingMainContent.length > 0 || isLoadingUser.length > 0) && (
          <LoadingOverlay />
        )}
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
        <CategoriesContainer />
      </>
    );
  }
}
MainContentView.propTypes = {
  isLoadingMainContent: PropTypes.arrayOf(String),
  isLoadingUser: PropTypes.arrayOf(String),
  categoryData: PropTypes.shape().isRequired,
  copiedHashtags: PropTypes.string,
  fetchCategories: PropTypes.func.isRequired,
  fetchHashtagsByCategory: PropTypes.func.isRequired,
  updateCopiedHashtags: PropTypes.func.isRequired,
  getUserByToken: PropTypes.func.isRequired,
  user: PropTypes.shape(),
  likePost: PropTypes.func,
  removePost: PropTypes.func,
};
MainContentView.defaultProps = {
  copiedHashtags: null,
  isLoadingMainContent: () => {},
  isLoadingUser: () => {},
  likePost: () => {},
  removePost: () => {},
  user: {},
};
