import React, { Component } from "react";
import LoginForm from "../../shared/components/LoginForm/LoginForm";
import './Login.scss';

export default class LoginView extends Component {
    componentDidMount(){

    }
    
  render() {
    return (
      <div className='login'>
        <div className="d-flex justify-content-center my-3">
          <h2>Login</h2>
        </div>
        <div className="d-flex justify-content-center">
          <LoginForm />
        </div>
      </div>
    );
  }
}
