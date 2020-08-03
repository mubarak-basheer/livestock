import React, { Component } from "react";
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
export default class Signup extends Component {
    render() {
        return (
            <>
            <Navbar />
            <Hero hero="defaultHero">
                 <div className="form-bg">
                 <a href="/"><button type="button" class="close" >&times;</button></a>
                 <h2>Sign Up</h2>
                 <div className = "form" >
                       <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="password" className="form-control" placeholder="Enter Phone Number" />
                        </div>
                        <div className="form-group">
                            <label>What's App Number</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>
                        <div className="form-group">
                            <label>Address with country</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block btn-sm">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="/login">sign in?</a>
                        </p>
                   </div>
                    </div>
            </Hero>
            </>
        );
    }
}