import React, { Component } from "react";
import PropTypes from 'prop-types';
import RegisterForm from "../../shared/components/RegisterForm/RegisterForm";
// import style from './Register.module.scss';

export default class RegisterView extends Component {
    constructor(props){
      super();
    }
    
  render() {
    const {user, registerUser, error} =this.props;
    return (
      <div className='mainContent'>
        <div className="d-flex justify-content-center my-3">
          <h2>Register</h2>
        </div>
        <div className="d-flex justify-content-center">
          <RegisterForm user={user} registerUser={registerUser} error={error}/>
        </div>
      </div>
    );
  }
}

RegisterView.propTypes= {
  user: PropTypes.shape(),
  registerUser: PropTypes.func.isRequired,
  error: PropTypes.shape().isRequired
}

RegisterView.defaultProps= {
  user: []
}