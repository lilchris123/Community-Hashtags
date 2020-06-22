import React, { Component } from "react";
import PropTypes from "prop-types";
import PostsContainer from "../../shared/components/PostsContainer/PostsContainer";

class SearchView extends Component {
    componentDidMount(){
        const { fetchPostsBySearch, location} = this.props;
        const params = new URLSearchParams(location.search);
        const search = params.get('name');
        if(search)
          fetchPostsBySearch(search);
    }
    componentDidUpdate(prevProps){
      const { fetchPostsBySearch, location} = this.props;
        if(location.search === prevProps.location.search)
          return;
        const params = new URLSearchParams(location.search);
        const search = params.get('name');
        fetchPostsBySearch(search);
    }

    handleCopy = (id) => {
        const { updateCopiedHashtags } = this.props;
        updateCopiedHashtags(id);
      };

      handleLike= (id) => {
        const { likePost }= this.props;
        likePost(id);
      }
      handleRemove = (id) => {
        const { removePost } = this.props;
        removePost(id);
      };
      handleUpdate = (post) => {
        const { updatePost } = this.props;
        updatePost(post);
      };

    render() {
        const {location} = this.props;
        const search=location.search ? location.search.split('=')[1]: '';
    return (
      <div className="content">
        <PostsContainer {...this.props} handleCopy={this.handleCopy} handleUpdate={this.handleUpdate} handleLike={this.handleLike} 
          handleRemove={this.handleRemove} title={`Search: "${search}"`}/>
      </div>
    );
  }
}
SearchView.propTypes = {
    posts: PropTypes.shape().isRequired,
    copiedHashtags: PropTypes.string,
    location: PropTypes.shape().isRequired,
    fetchPostsBySearch: PropTypes.func.isRequired,
    updateCopiedHashtags: PropTypes.func.isRequired,
    user: PropTypes.shape(),
    removePost: PropTypes.func.isRequired,
  };
  SearchView.defaultProps = {
    copiedHashtags: null,
    user: null
  };

export default SearchView;
