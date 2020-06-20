import React, { Component } from "react";
import PropTypes from "prop-types";
import PostsContainer from "../../shared/components/PostsContainer/PostsContainer";
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

  handleUpdate = (post) => {
    const { updatePost } = this.props;
    updatePost(post);
  };

  render() {
    const { posts} = this.props;
    return (
      <div className="content">
        <PostsContainer {...this.props} handleUpdate= {this.handleUpdate} handleLike={this.handleLike} handleCopy={this.handleCopy}
          handleRemove={this.handleRemove} title={posts.name}/>
      </div>
    );
  }
}
PostsPageView.propTypes = {
  isLoading: PropTypes.arrayOf(String).isRequired,
  posts: PropTypes.shape().isRequired,
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
