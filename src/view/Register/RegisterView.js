import React, { Component } from "react";
import RegisterForm from "../../shared/components/RegisterForm/RegisterForm";
import './Register.scss';

export default class RegisterView extends Component {
    componentDidMount(){

    }
    
  render() {
    return (
      <div className='register'>
        <div className="d-flex justify-content-center my-3">
          <h2>Register</h2>
        </div>
        <div className="d-flex justify-content-center">
          <RegisterForm />
        </div>
      </div>
    );
  }
}