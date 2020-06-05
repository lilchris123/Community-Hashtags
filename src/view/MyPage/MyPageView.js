import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Category from '../../shared/components/Category/Category';
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
    return ( 
    <div className={`mainContent ${style.padding}`}>
        <h1>Welcome {user.username}</h1>
        <div className="container">
            <div className="row grouped-hashtags-container my-3">
                <Category category={posts} copiedHashtags={copiedHashtags} handleCopy={handleCopy} handleRemove={handleRemove} currentUser={user && user.username}/>
            </div>
         </div>
        <Button onClick={() => logout()}>Logout</Button>
    </div> );
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
    removePost: PropTypes.func
}
MyPageView.defaultProps ={
    copiedHashtags: null,
    removePost: () => {}
}

export default MyPageView;