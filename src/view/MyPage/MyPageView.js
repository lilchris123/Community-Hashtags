import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import Category from '../../shared/components/Category/Category';
import style from './MyPage.module.scss';

const MyPageView = (props) => {
    const {user,isLoggedIn, getUserFromToken, logoutUser, copiedHashtags} =props;
    const history = useHistory();

    useEffect(() => {
         if(!isLoggedIn) getUserFromToken();
    },[isLoggedIn, getUserFromToken]);

    const logout = () => {
        logoutUser();
        history.push('/');
    }

    const handleCopy= (id) => {
        const { updateCopiedHashtags }= props;
        updateCopiedHashtags(id);
    } 
    return ( 
    <div className={`mainContent ${style.padding}`}>
        <h1>Welcome {user.username}</h1>
        <div className="container">
            <div className="row grouped-hashtags-container my-3">
                <Category category={{}} copiedHashtags={copiedHashtags} handleCopy={handleCopy}/>
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
    copiedHashtags: PropTypes.string
}
MyPageView.defaultProps ={
    copiedHashtags: null
}

export default MyPageView;