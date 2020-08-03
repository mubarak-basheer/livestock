import React, { Component } from "react";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

export default class Login extends Component {
  render() {
    return (
      <>
      <Navbar />
      <Hero hero="defaultHero">
        <div className="form-bg ">
        <a href="/"><button type="button" class="close" >&times;</button></a>
          <h2>Sign In </h2>
          
          <div className = "form" >
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
              </div>
            </div>

            <a href="/home"><button className="btn btn-primary btn-block btn-sm">Submit</button></a>

            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </div>
          
        </div>


      </Hero>
      </>

    );
  }
}