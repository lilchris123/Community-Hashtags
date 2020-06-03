import React, { Component } from "react";
import PropTypes from 'prop-types';
import LoginForm from "../../shared/components/LoginForm/LoginForm";
import './Login.scss';

export default class LoginView extends Component {
    constructor(props){
      super();
    }
    
  render() {
    const {user, loginUser} =this.props;
    return (
      <div className='login'>
        <div className="d-flex justify-content-center my-3">
          <h2>Login</h2>
        </div>
        <div className="d-flex justify-content-center">
          <LoginForm user={user} loginUser={loginUser}/>
        </div>
      </div>
    );
  }
}

LoginView.propTypes= {
  user: PropTypes.shape(),
  loginUser: PropTypes.func.isRequired
}

LoginView.defaultProps= {
  user: []
}
