/* eslint-disable no-console */
import React, { Component } from "react";
import PropTypes from "prop-types";
import CategoriesContainer from "../Categories/CategoriesContainer";
import PostsContainer from '../../shared/components/PostsContainer/PostsContainer';
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
    return (
      <>
        <div className={`${style.content}`}>
          <PostsContainer {...this.props} handleUpdate= {this.handleUpdate} handleLike={this.handleLike} handleCopy={this.handleCopy}
                handleRemove={this.handleRemove} title='Top Hashtags'/>
        </div>
        <CategoriesContainer />
      </>
    );
  }
}
MainContentView.propTypes = {
  isLoading: PropTypes.arrayOf(String).isRequired,
  posts: PropTypes.shape().isRequired,
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
