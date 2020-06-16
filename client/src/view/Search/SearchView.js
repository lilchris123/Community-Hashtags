import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row } from 'react-bootstrap';
import Category from "../../shared/components/Category/Category";
import NoPosts from "../../shared/components/NoPosts/NoPosts";
import LoadingOverlay from "../../shared/components/LoadingOverlay/LoadingOverlay";
import _ from 'lodash';

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
        console.log(location.search);
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
    
      handleRemove = (id) => {
        const { removePost } = this.props;
        removePost(id);
      };

    render() {
        const { posts, copiedHashtags, user, location, isLoading } = this.props;
        const search=location.search ? location.search.split('=')[1]: '';
    return (
      <div className="content">
        <h3 className="display-5 d-flex justify-content-center">
          {`Search: "${search}"`}
        </h3>
        <Container>
          {!_.isEmpty(isLoading) && <LoadingOverlay/>}
          { posts.posts && posts.posts.length ?
          <Row className="my-3">
            <Category
              category={posts}
              copiedHashtags={copiedHashtags}
              handleCopy={this.handleCopy}
              handleRemove={this.handleRemove}
              currentUser={user && user.username}
            />
          </Row>
          :
          <NoPosts text="No Post Found"/>
          }
        </Container>
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
