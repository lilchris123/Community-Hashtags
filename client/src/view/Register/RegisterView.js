import React, { Component } from "react";
import PropTypes from 'prop-types';
import RegisterForm from "../../shared/components/RegisterForm/RegisterForm";
 import style from './Register.module.scss';

export default class RegisterView extends Component {

  componentDidUpdate(){
    const {formStatus, history}= this.props;
    if(formStatus === 'SIGNUP_SUBMITTED') history.push('/login');
  }
    
  render() {
    const {user, registerUser, error, formStatus} =this.props;
    return (
      <div className={`${style.content}`}>
        <div className="d-flex justify-content-center my-3">
          <h2>Register</h2>
        </div>
        <div className="d-flex justify-content-center">
          <RegisterForm user={user} registerUser={registerUser} error={error} formStatus={formStatus}/>
        </div>
      </div>
    );
  }
}

RegisterView.propTypes= {
  user: PropTypes.shape(),
  registerUser: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}

RegisterView.defaultProps= {
  user: []
}