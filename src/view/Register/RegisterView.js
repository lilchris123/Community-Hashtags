import React, { Component } from "react";
import PropTypes from 'prop-types';
import RegisterForm from "../../shared/components/RegisterForm/RegisterForm";
import './Register.scss';

export default class RegisterView extends Component {
    constructor(props){
      super();
    }
    
  render() {
    const {user, registerUser} =this.props;
    return (
      <div className='register'>
        <div className="d-flex justify-content-center my-3">
          <h2>Register</h2>
        </div>
        <div className="d-flex justify-content-center">
          <RegisterForm user={user} registerUser={registerUser}/>
        </div>
      </div>
    );
  }
}

RegisterView.propTypes= {
  user: PropTypes.shape(),
  registerUser: PropTypes.func.isRequired
}

RegisterView.defaultProps= {
  user: []
}