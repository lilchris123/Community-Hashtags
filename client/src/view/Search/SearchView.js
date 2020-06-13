import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row } from 'react-bootstrap';
import Category from "../../shared/components/Category/Category";

class SearchView extends Component {
    componentDidMount(){
        const { fetchPostsBySearch, location } = this.props;

        const query=location.search.split('=')[1]
        if(location.search.split('=')[1] !== 'undefined')
            fetchPostsBySearch(query);
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
        const { posts, copiedHashtags, user, location } = this.props;
        const query=location.search ? location.search.split('=')[1]: '';
    return (
      <div className="mainContent">
        <h3 className="display-5 d-flex justify-content-center text-capitalize">
          {`Search: "${query}"`}
        </h3>
        <Container>
          <Row className="my-3">
            <Category
              category={posts}
              copiedHashtags={copiedHashtags}
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
