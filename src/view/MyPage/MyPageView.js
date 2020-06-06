import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Category from '../../shared/components/Category/Category';
import PostModal from '../../shared/components/PostModal/PostModal';
import style from './MyPage.module.scss';

const MyPageView = (props) => {
    const {user,isLoggedIn, getUserFromToken, logoutUser, copiedHashtags, fetchUserPosts, posts} =props;
    const history = useHistory();

    useEffect(() => {
         if(!isLoggedIn) getUserFromToken();
        fetchUserPosts();
    },[isLoggedIn, getUserFromToken, fetchUserPosts]);

    const logout = () => {
        logoutUser();
        history.push('/');
    }

    const handleCopy= (id) => {
        const { updateCopiedHashtags }= props;
        updateCopiedHashtags(id);
    }

    const handleRemove= (id) => {
        const { removePost }= props;
        removePost(id);
    }
    const handleCreate= (post) => {
        const { createPost }= props;
        createPost(post);
    }
    const handleUpdate= (post) => {
        const { updatePost }= props;
        updatePost(post);
    }
    return ( 
    <>
    
    <div className={`mainContent ${style.padding}`}>
        <h1>Welcome {user.username}</h1>
        <div className="container">
            <div className="row grouped-hashtags-container my-3">
                <Category category={posts} copiedHashtags={copiedHashtags} handleUpdate={handleUpdate} handleCopy={handleCopy} handleRemove={handleRemove} currentUser={user && user.username}/>
            </div>
         </div>
         <div className={style.ButtonGroup}>
            <Button onClick={() => logout()}>Logout</Button>
            <PostModal onCreate={handleCreate}/>
        </div>
    </div> 
    
    </>
    );
}

MyPageView.propTypes={
    user: PropTypes.shape().isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    getUserFromToken: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    updateCopiedHashtags: PropTypes.func.isRequired,
    copiedHashtags: PropTypes.string,
    fetchUserPosts: PropTypes.func.isRequired,
    posts: PropTypes.shape().isRequired,
    createPost: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
    removePost: PropTypes.func.isRequired
}
MyPageView.defaultProps ={
    copiedHashtags: null
}

export default MyPageView;