import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
// import style from './MyPage.module.scss';

const MyPageView = (props) => {
    const {user,isLoggedIn, getUserFromToken, logoutUser} =props;
    const history = useHistory();
    useEffect(() => {
         if(!isLoggedIn) getUserFromToken();
    },[isLoggedIn, getUserFromToken]);
    const logout = () => {
        logoutUser();
        history.push('/');
    }
    return ( 
    <div className='mainContent'>
        <h1 >Welcome {user.username}</h1>
        <Button onClick={() => logout()}>Logout</Button>
    </div> );
}

MyPageView.propTypes={
    user: PropTypes.shape().isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    getUserFromToken: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired
}
export default MyPageView;