/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Container, Row} from 'react-bootstrap';
import Category from '../../shared/components/Category/Category';
import CategoriesContainer from '../Categories/CategoriesContainer';
import style from './MainContent.module.scss';

export default class MainContentView extends Component{

    // fetch all the hashtags after mounting the component
    componentDidMount(){
        const { fetchCategories, fetchHashtagsByCategory, getUserByToken }= this.props;
        fetchCategories();
        fetchHashtagsByCategory('popular');
        getUserByToken();
    }

    handleCopy= (id) => {
        const { updateCopiedHashtags }= this.props;
        updateCopiedHashtags(id);
    } 

    handleRemove= (id) => {
        const { removePost }= this.props;
        removePost(id);
    }

    handleLike= (id) => {
        const { likePost, user }= this.props;
        likePost(id, user.username);
    }

    render(){
        const { categoryData, copiedHashtags, user } = this.props;

        return(
            <>
            <div className={`${style.content}`}>
                <h3 className="display-5 d-flex justify-content-center"> Top HashTags</h3>
                <Container>
                    <Row className="my-3">
                        <Category category={categoryData} copiedHashtags={copiedHashtags} handleLike={this.handleLike} handleCopy={this.handleCopy} handleRemove={this.handleRemove} currentUser={user && user.username}/>
                    </Row>
                </Container>
            </div>
            <CategoriesContainer/>
            </>
        );
        }
}
MainContentView.propTypes={
    categoryData: PropTypes.shape().isRequired,
    copiedHashtags: PropTypes.string,
    fetchCategories: PropTypes.func.isRequired,
    fetchHashtagsByCategory: PropTypes.func.isRequired,
    updateCopiedHashtags: PropTypes.func.isRequired,
    getUserByToken: PropTypes.func.isRequired,
    user: PropTypes.shape(),
    likePost: PropTypes.func,
    removePost: PropTypes.func
}
MainContentView.defaultProps ={
    copiedHashtags: null,
    likePost: () => {},
    removePost: () => {},
    user: {}
}