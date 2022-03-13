import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div >
      <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"></img>
      <div className="login">
        <form className="login__form">
          <h2 className="login__title">Sign-In</h2>
          <div className="login__wrap">
            <p>Email or mobiaasdle phone number</p>
            <input />
          </div>
          <button className="login__btn">Continue</button>
        </form>
        <div className="login__subtitle">
          <span>By continuing, you agree to Amazon's </span>
          <Link to="/"> Conditions of Use</Link> and
          <Link to="/"> Privacy Notice.</Link>
        </div>
      </div>
      <div className="login__create">
        <button className="login__create-btn">Create your amazon account</button>
      </div>

    </div>
  )
}

export default Login